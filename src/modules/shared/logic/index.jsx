import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function sharedLogic() {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [headerTable, setHeaderTable] = useState([]);
  const [bodyTable, setBodyTable] = useState([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const outSesion = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    outSesion,
    search,
    handleInputChange,
    headerTable,
    setHeaderTable,
    bodyTable,
    setBodyTable,
  };
}
