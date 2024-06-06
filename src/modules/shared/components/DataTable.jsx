import { useEffect } from "react";
import { sharedLogic } from "../logic";
import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";

export default function DataTable({ createRoute, thead = [], tbody = [] }) {
  const {
    search,
    handleInputChange,
    headerTable,
    setHeaderTable,
    bodyTable,
    setBodyTable,
  } = sharedLogic();

  useEffect(() => {
    setHeaderTable(thead);
    setBodyTable(tbody);
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
        <div className="relative">
          <BtnBase onClickFunction={createRoute} type="add">
            Agregar registro
          </BtnBase>
        </div>
        <div className="relative">
          <InputBase
            label=""
            type="email"
            placeholder="Busqueda en la tabla"
            name="email"
            value={search}
            onChange={handleInputChange}
          />
        </div>
      </div>
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
  );
}
