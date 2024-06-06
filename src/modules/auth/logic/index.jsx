import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { coreApi } from "../../../api/coreApi";
import { formValidator } from "../../../lib/formValidator";

export function authLogic() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const closeModal = () => setModalOpen(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const isValid = formValidator(formData, ["email", "password"]);

      if (!isValid) {
        setModalOpen(true);
        setErrorText("Todos los campos son obligatorios");
        return;
      }
      setIsLoading(true);
      const response = await coreApi().post("auth/login", formData);
      setIsLoading(false);

      if (response && response.status === 201) {
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        window.localStorage.setItem("tokenJwt", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      setIsLoading(false);
      setModalOpen(true);
      setErrorText(error.response.data.message);
    }
  };

  return {
    isLoading,
    formData,
    handleInputChange,
    closeModal,
    isModalOpen,
    onSubmit,
    errorText,
  };
}
