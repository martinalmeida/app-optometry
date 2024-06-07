import { useEffect, useState } from "react";
import { sharedLogic } from "../logic";
import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";

export default function DataTable({ createRoute, data = [] }) {
  const {
    search,
    handleInputChange,
    headerTable,
    setHeaderTable,
    bodyTable,
    setBodyTable,
  } = sharedLogic();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data.length > 0) {
      const headers = Object.keys(data[0]);
      setHeaderTable(headers);

      const body = data.map((item) => headers.map((header) => item[header]));
      setBodyTable(body);
      setFilteredData(data);
    }
  }, [data, setHeaderTable, setBodyTable]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          value && value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );

    const body = filtered.map((item) =>
      headerTable.map((header) => item[header])
    );
    setBodyTable(body);
  }, [search, data, headerTable, setBodyTable]);

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div className="relative">
          <BtnBase
            onClickFunction={createRoute}
            type="add"
            className="text-sm px-4 py-2 bg-blue-500 text-white rounded"
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
            onChange={(value) => handleInputChange("name", value)}
            className="w-64"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto">
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
            {bodyTable.length > 0 ? (
              bodyTable.map((row, rowIndex) => (
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
      </div>
    </div>
  );
}
