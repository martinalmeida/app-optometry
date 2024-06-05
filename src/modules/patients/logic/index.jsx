import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { coreApi } from "../../../api/coreApi";
import { formValidator } from "../../../lib/formValidator";

export function patientLogic() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const closeModal = () => setModalOpen(false);

  /**
   * Updates the form data state with the provided name-value pair.
   *
   * @param {string} name - The name of the input field.
   * @param {string} value - The value of the input field.
   * @return {void} This function does not return anything.
   */
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Submits the form data to the server for authentication.
   *
   * @return {Promise<void>} A promise that resolves when the form is submitted successfully,
   * or rejects with an error if there is an issue with the form data or the server response.
   */
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
