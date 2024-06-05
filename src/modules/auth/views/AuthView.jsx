import { authLogic } from "../logic";

import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";
import Spinner from "../../shared/components/Spinner.jsx";
import AlertModal from "../../shared/components/AlertModal.jsx";

export default function App() {
  const {
    isLoading,
    formData,
    handleInputChange,
    closeModal,
    isModalOpen,
    onSubmit,
    errorText,
  } = authLogic();

  return (
    <>
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
      <BtnBase onClickFunction={() => onSubmit(formData)} type="login">
        Iniciar Sesion
      </BtnBase>

      <Spinner loader={isLoading} />
      <AlertModal isOpen={isModalOpen} onClose={closeModal} title="Error">
        <p>{errorText}</p>
      </AlertModal>
    </>
  );
}
