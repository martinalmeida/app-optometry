import { useEffect, useState, useCallback } from "react";
import { sharedLogic } from "../logic";
import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";

export default function DataTable({ createRoute, data = [] }) {
  const { headerTable, setHeaderTable, bodyTable, setBodyTable } =
    sharedLogic();

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const initializeTable = useCallback(() => {
    if (data.length > 0) {
      const headers = Object.keys(data[0]);
      setHeaderTable(headers);

      const body = data.map((item) => headers.map((header) => item[header]));
      setBodyTable(body);
      setFilteredData(data);
    }
  }, [data, setHeaderTable, setBodyTable]);

  useEffect(() => {
    initializeTable();
  }, [initializeTable]);

  useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(search.toLowerCase())
        )
      );

      const body = filtered.map((item) =>
        headerTable.map((header) => item[header])
      );
      setBodyTable(body);
    }
  }, [search, data, headerTable, setBodyTable]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = bodyTable.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(bodyTable.length / itemsPerPage);

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div className="relative mr-4">
          <BtnBase
            onClickFunction={createRoute}
            type="add"
            className="text-sm bg-blue-500 text-white rounded"
          >
            Agregar
          </BtnBase>
        </div>
        <div className="relative">
          <InputBase
            label=""
            type="text"
            placeholder="Buscar en la tabla"
            name="search"
            value={search}
            onChange={(value) => handleInputChange("search", value)}
            className="w-64"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto">
        {data.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {headerTable.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {header}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="dark:border-gray-700 hover:bg-gray-50"
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4">
                        {cell}
                      </td>
                    ))}
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Editar
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headerTable.length + 1}
                    className="px-6 py-4 text-center"
                  >
                    No hay datos para mostrar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div className="px-6 py-4 text-center">No hay datos para mostrar</div>
        )}
      </div>
      {data.length > 0 && (
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
