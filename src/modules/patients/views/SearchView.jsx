import { Link } from "react-router-dom";
import { patientLogic } from "../logic";
import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";
import Spinner from "../../shared/components/Spinner.jsx";

export default function Home() {
  const { isLoading, formData, handleInputChange, onSubmit } = patientLogic();

  return (
    <section className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
        <span className="block text-sm text-blue-700">busqueda</span>
        <span className="block">Busqueda de Pacientes</span>
      </h2>
      <main className="m-2 grid grid-cols-1 gap-6 md:grid-cols-1">
        <InputBase
          label="Buscar"
          type="email"
          placeholder="ingrese cedula o nombre"
          name="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <div className="flex justify-center">
          <BtnBase
            onClickFunction={() => onSubmit(formData)}
            type="search"
            customClass="py-2 px-4 text-sm w-auto"
          >
            Buscar Pacientes
          </BtnBase>
        </div>
        <Spinner loader={isLoading} />

        <Link
          to="/patients"
          className="sticky w-full px-8 py-12 bg-white border rounded-lg shadow-lg"
        >
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left">
                <th>#Numero de servicio</th>
                <th>Nombre del Paciente</th>
                <th>Cedula</th>
                <th>Ultima Valoracion</th>
                <th>Ultima Montura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>123456789</td>
                <td>
                  <a href="#" className="text-blue-700">
                    ver
                  </a>
                </td>
                <td>
                  <a href="#" className="text-blue-700">
                    Ver
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Link>
      </main>
    </section>
  );
}
