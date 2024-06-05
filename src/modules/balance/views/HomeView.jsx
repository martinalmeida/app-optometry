import DataTable from "../../shared/components/DataTable.jsx";

export default function Home() {
  return (
    <section className="sticky w-full px-8 py-12 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
        <span className="block text-sm text-blue-700">tabla</span>
        <span className="block">Tabla de Balance</span>
      </h2>
      <DataTable />
    </section>
  );
}
