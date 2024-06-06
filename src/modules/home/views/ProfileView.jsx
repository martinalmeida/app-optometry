import { useEffect } from "react";
import { homeLogic } from "../logic";

import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";
import Spinner from "../../shared/components/Spinner.jsx";
import AlertModal from "../../shared/components/AlertModal.jsx";

export default function Home() {
  const {
    isLoading,
    formData,
    setFormData,
    handleInputChange,
    closeModal,
    isModalOpen,
    onSubmit,
    errorText,
  } = homeLogic();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    setFormData({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: "",
      id_role: user.id_role,
      id_comp: user.id_comp,
    });
    return () => {};
  }, []);

  return (
    <section className="sticky w-full px-8 py-12 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
        <span className="block text-sm text-blue-700">formulario</span>
        <span className="block">Perfil de usuario</span>
      </h2>
      <main className="m-2 grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputBase
          label="Nombre de usuario"
          type="text"
          placeholder="ingrese su nombre de usuario"
          name="name"
          value={formData.name}
          onChange={(value) => handleInputChange("name", value)}
        />
        <InputBase
          label="Apellidos de usuario"
          type="text"
          placeholder="ingrese su apellidos de usuario"
          name="lastname"
          value={formData.lastname}
          onChange={(value) => handleInputChange("lastname", value)}
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
          type="password"
          placeholder="ingrese su contraseña"
          name="password"
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
        />
        <BtnBase onClickFunction={() => onSubmit(formData)} type="save">
          Actualizar
        </BtnBase>
      </main>

      <Spinner loader={isLoading} />
      <AlertModal isOpen={isModalOpen} onClose={closeModal} title="Alerta">
        <p>{errorText}</p>
      </AlertModal>
    </section>
  );
}
