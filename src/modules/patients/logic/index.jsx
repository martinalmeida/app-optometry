import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { coreApi } from "../../../api/coreApi";
import { formValidator } from "../../../lib/formValidator";
import { SesionLocal } from "../../shared/helpers/sesionLocal";

export function patientLogic() {
  const navigate = useNavigate();
  const { id, id_comp } = SesionLocal();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    tp_doc: "",
    num_doc: "",
    gender: "",
    date_of_birth: "",
    age: "",
    phone: "",
    address: "",
    email: "",
    id_user: id,
    id_comp: id_comp,
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

  const dataTable = async () => {
    try {
      const response = await coreApi().get("patient");
      return response.data.Patient;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const onSubmitCreated = async () => {
    try {
      const isValid = formValidator(formData, [
        "name",
        "tp_doc",
        "num_doc",
        "gender",
        "age",
        "phone",
      ]);

      if (!isValid) {
        setModalOpen(true);
        setErrorText("Todos los campos son obligatorios para registrar");
        return;
      }
      setIsLoading(true);
      const response = await coreApi().post("patient", formData);
      setIsLoading(false);

      if (response && response.status === 201) return navigate("/patients");
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
    dataTable,
    onSubmitCreated,
    errorText,
  };
}
