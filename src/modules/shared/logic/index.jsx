import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function sharedLogic() {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const outSesion = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return { isModalOpen, openModal, closeModal, outSesion };
}
