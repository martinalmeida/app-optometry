import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <Link
        to="/patients"
        className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
          <span className="block text-sm text-blue-700">modulo</span>
          <span className="block">Pacientes</span>
        </h2>
        <p>modulo de gestion de los pacientes de optometria</p>
      </Link>
      <Link
        to="/history"
        className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
          <span className="block text-sm text-blue-700">modulo</span>
          <span className="block">Historia Clinica</span>
        </h2>
        <p>modulo de gestion de historias clinicas de pacientes</p>
      </Link>
      <Link
        to="/mounts"
        className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
          <span className="block text-sm text-blue-700">modulo</span>
          <span className="block">Monturas</span>
        </h2>
        <p>modulo de gestion de monturas de optometria</p>
      </Link>
      <Link
        to="/balance"
        className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
          <span className="block text-sm text-blue-700">modulo</span>
          <span className="block">Balance</span>
        </h2>
        <p>modulo de informes de balance de caja</p>
      </Link>
    </section>
  );
}
