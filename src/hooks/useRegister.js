import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/index";

const useRegister = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [message, setMessage] = useState("");

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6 || values.password.length > 14) {
      errors.password = "Password must be between 6 and 14 charaters!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password does not match!";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    checkregisterForm();
  };

  const registerUser = async () => {
    const { firstName, lastName, username, email, password } = formValues;
    try {
      setLoading(true);
      const res = await register(
        firstName,
        lastName,
        username,
        email,
        password
      );
      console.log(res);
      setUser(res.data.data);
      setMessage(res.data.message);
      setSnackBar(true);
      setLoading(false);
      localStorage.setItem("token", res.data.access_token);
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const checkregisterForm = () => {
    if (Object.keys(validate(formValues)).length === 0) {
      registerUser();
    } else {
      console.log("nije prazan objekat");
    }
  };

  return {
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
    checkregisterForm,
    user,
    loading,
    message,
    snackBar,
  };
};
export default useRegister;
