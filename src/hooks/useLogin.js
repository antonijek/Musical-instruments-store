import { useState } from "react";
import { checkEmail, checkPass } from "../utils";

const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const [error, setError] = useState({ email: false, pass: false });
  const [openModalForgotPassword, setOpenModalForgotPassword] = useState(false);

  const checkForm = (e) => {
    e.preventDefault();
    //kad bude server gotov, ispitati checkPass i checkEmail i ako su true napraviti api call, ako nisu onda setovati error
    setError({
      pass: !checkPass(formData.pass),
      email: !checkEmail(formData.email),
    });
  };

  const handleInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpenModalForgotPassword(true);
  };

  const closeModal = () => {
    setOpenModalForgotPassword(false);
    setFormData({ pass: "", email: "" });
    setError({ pass: false, email: false });
  };
  return {
    openModalForgotPassword,
    checkForm,
    handleInputs,
    openModal,
    closeModal,
    formData,
    error,
  };
};

export default useLogin;
