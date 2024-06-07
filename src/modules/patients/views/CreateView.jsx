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
          required
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
          label="Tipo de Documento"
          name="tp_doc"
          value={formData.tp_doc}
          required
          onChange={(value) => handleInputChange("tp_doc", value)}
          options={[
            { value: "cc", label: "Cedula" },
            { value: "ti", label: "Tarjeta de Identidad" },
            { value: "pp", label: "Pasaporte" },
          ]}
        />
        <InputBase
          label="Numero de Documento"
          type="number"
          placeholder="ingrese el numero de documento"
          name="num_doc"
          required
          value={formData.num_doc}
          onChange={(value) => handleInputChange("num_doc", value)}
        />
        <SelectInput
          label="Genero"
          name="gender"
          required
          value={formData.gender}
          onChange={(value) => handleInputChange("gender", value)}
          options={[
            { value: "hombre", label: "Hombre" },
            { value: "mujer", label: "Mujer" },
            { value: "otro", label: "Otro" },
          ]}
        />
        <InputBase
          label="Fecha de Nacimiento"
          type="date"
          placeholder=""
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={(value) => handleInputChange("date_of_birth", value)}
        />
        <InputBase
          label="Edad"
          type="number"
          placeholder="ingrese la edad"
          name="age"
          required
          value={formData.age}
          onChange={(value) => handleInputChange("age", value)}
        />
        <InputBase
          label="Numero de Telefono"
          type="number"
          placeholder="ingrese el numero de telefono"
          name="phone"
          required
          value={formData.phone}
          onChange={(value) => handleInputChange("phone", value)}
        />
        <InputBase
          label="Direccion"
          type="text"
          placeholder="ingrese la direccion"
          name="address"
          value={formData.address}
          onChange={(value) => handleInputChange("address", value)}
        />
        <InputBase
          label="Correo Electronico"
          type="email"
          placeholder="ingrese el correo electronico"
          name="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
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
