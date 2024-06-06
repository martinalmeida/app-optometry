import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { coreApi } from "../../../api/coreApi";

export function sharedLogic() {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [headerTable, setHeaderTable] = useState([]);
  const [bodyTable, setBodyTable] = useState([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const outSesion = async () => {
    try {
      const payload = {
        token: window.localStorage.getItem("tokenJwt"),
      };

      setIsLoading(true);
      const response = await coreApi().post("auth/logout", payload);
      setIsLoading(false);

      if (response && response.status === 201) {
        window.localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isModalOpen,
    isLoading,
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
