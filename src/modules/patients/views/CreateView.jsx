import { patientLogic } from "../logic";

import InputBase from "../../shared/components/InputBase.jsx";
import SelectInput from "../../shared/components/SelectInput.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";
import Spinner from "../../shared/components/Spinner.jsx";
import AlertModal from "../../shared/components/AlertModal.jsx";

export default function CreatePatient() {
  const {
    isLoading,
    formData,
    handleInputChange,
    closeModal,
    isModalOpen,
    onSubmitCreated,
    errorText,
  } = patientLogic();

  return (
    <section className="sticky w-full px-8 py-12 bg-white border-t-4 border-indigo-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
        <span className="block text-sm text-blue-700">formulario</span>
        <span className="block">Registro de Paciente</span>
      </h2>
      <main className="m-2 grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputBase
          label="Nombre de paciente"
          type="text"
          placeholder="ingrese el nombre del paciente"
          name="name"
          value={formData.name}
          onChange={(value) => handleInputChange("name", value)}
        />
        <InputBase
          label="Apellidos de paciente"
          type="text"
          placeholder="ingrese los apellidos del paciente"
          name="lastname"
          value={formData.lastname}
          onChange={(value) => handleInputChange("lastname", value)}
        />
        <SelectInput
          label="Select an option"
          name="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <InputBase
          label="Correo Electronico"
          type="email"
          placeholder="ingrese su correo electronico"
          name="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <InputBase
          label="Contraseña"
          type="date"
          placeholder="ingrese su contraseña"
          name="password"
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
        />
      </main>
      <div className="flex justify-end m-2 gap-2">
        <BtnBase onClickFunction="/patients" type="cancel">
          Cancelar
        </BtnBase>
        <BtnBase onClickFunction={() => onSubmitCreated(formData)} type="save">
          Registrar
        </BtnBase>
      </div>
      <Spinner loader={isLoading} />
      <AlertModal isOpen={isModalOpen} onClose={closeModal} title="Alerta">
        <p>{errorText}</p>
      </AlertModal>
    </section>
  );
}
