import { patientLogic } from "../logic";
import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";
import Spinner from "../../shared/components/Spinner.jsx";

export default function Home() {
  const { isLoading, formData, handleInputChange, onSubmit } = patientLogic();

  return (
    <section className="sticky w-full px-8 py-12 bg-white border rounded-lg shadow-lg">
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
      </main>
    </section>
  );
}
