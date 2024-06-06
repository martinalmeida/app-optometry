import { useState } from "react";
import { coreApi } from "../../../api/coreApi";
import { formValidator } from "../../../lib/formValidator";

export function homeLogic() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    id_role: "",
    id_comp: "",
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
      const isValid = formValidator(formData, [
        "name",
        "lastname",
        "email",
        "password",
      ]);

      if (!isValid) {
        setModalOpen(true);
        setErrorText("Todos los campos son obligatorios");
        return;
      }
      const payload = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        id_role: formData.id_role,
        id_comp: formData.id_comp,
      };

      setIsLoading(true);
      const response = await coreApi().put(`user/${formData.id}`, payload);
      setIsLoading(false);

      if (response && response.status === 200) {
        setModalOpen(true);
        setErrorText(response.data.message);
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
    setFormData,
    handleInputChange,
    closeModal,
    isModalOpen,
    onSubmit,
    errorText,
  };
}
