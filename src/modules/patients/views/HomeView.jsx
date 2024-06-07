import { useEffect, useState } from "react";
import { patientLogic } from "../logic";
import DataTable from "../../shared/components/DataTable.jsx";

export default function Home() {
  const { dataTable } = patientLogic();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataTable();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <section className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
        <span className="block text-sm text-blue-700">tabla</span>
        <span className="block">Tabla de Pacientes</span>
      </h2>
      <DataTable createRoute="/patients/create" data={data} />
    </section>
  );
}
