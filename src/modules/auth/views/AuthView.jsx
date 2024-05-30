import { useState } from "react";

import InputBase from "../../shared/components/InputBase.jsx";
import BtnBase from "../../shared/components/BtnBase.jsx";
import AlertModal from "../../shared/components/AlertModal.jsx";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <InputBase
        label="Nombre"
        type="text"
        placeholder="escriba su nombre"
        name="name"
      />
      <InputBase
        label="Contraseña"
        type="password"
        placeholder="ingrese su contraseña"
        name="password"
      />
      <BtnBase onClickFunction={openModal} type="login">
        Iniciar Sesion
      </BtnBase>
      <AlertModal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
        <p>This is a modal alert. You can put any content here.</p>
      </AlertModal>
    </>
  );
}
