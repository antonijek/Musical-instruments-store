import { useState } from "react";
import { checkEmail, checkPass } from "../utils";
const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const [error, setError] = useState({ email: false, pass: false });
  const [open, setOpen] = useState(false);

  const checkForm = (e) => {
    e.preventDefault();
    //kad bude server gotov, ispitati checkPass i checkEmail i ako su true napraviti api call, ako nisu onda setovati error
    setError({
      pass: !checkPass(formData.pass),
      email: !checkEmail(formData.email),
    });
  };

  const checkError = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setFormData({ pass: "", email: "" });
    setError({ pass: false, email: false });
  };
  return {
    open,
    checkForm,
    checkError,
    openModal,
    closeModal,
    formData,
    error,
  };
};

export default useLogin;
