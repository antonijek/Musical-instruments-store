import { useState } from "react";
import { checkEmail, checkPass } from "../utils";
import { login } from "../api/index";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const [error, setError] = useState({ email: false, pass: false });
  const [openModalForgotPassword, setOpenModalForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState("");
  const [loginMessage, setloginMessage] = useState("");

  const handleToken = async () => {
    setLoading(true);
    try {
      const res = await login(formData.email, formData.pass);
      console.log(res);
      setloginMessage(res.data);
      setPerson(res.data.user);
      localStorage.setItem("token", res.data.access_token.plainTextToken);
      setTimeout(() => navigate("/"), 200);
      setLoading(false);
    } catch (err) {
      console.log(err);

      setLoading(false);
    }
  };

  const checkForm = (e) => {
    e.preventDefault();
    if (checkPass(formData.pass) && checkEmail(formData.email)) {
      handleToken();
      setTimeout(() => setloginMessage(""), 3000);
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
    person,
    loginMessage,
  };
};

export default useLogin;
