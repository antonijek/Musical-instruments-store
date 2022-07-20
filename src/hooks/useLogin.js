import { useState } from "react";
import { checkEmail, checkPass } from "../utils";
import { fetchLogin } from "../api/index";
const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const [error, setError] = useState({ email: false, pass: false });
  const [openModalForgotPassword, setOpenModalForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkForm = (e) => {
    e.preventDefault();

    if (checkPass(formData.pass) && checkEmail(formData.email)) {
      fetchLogin(formData.email, formData.pass, setLoading);
    } else {
      setError({
        pass: !checkPass(formData.pass),
        email: !checkEmail(formData.email),
      });
    }
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
    loading,
  };
};

export default useLogin;
