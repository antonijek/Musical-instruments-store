import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import Modal from "./Modal";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const {
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
  } = useLogin();

  useEffect(() => {
    setUser(person);
  }, [person, setUser]);

  return (
    <div>
      <Box
        noValidate
        component="form"
        sx={{
          width: { xs: "90%", sm: "60%", md: "30%" },
          mx: "auto",
          mt: { xs: "20%", md: "10%" },
          boxShadow: { md: "20px 20px 50px #9E9E9E" },
          p: { xs: 2, md: 8 },
        }}
      >
        <Typography
          align="center"
          color="primary"
          variant="h3"
          gutterBottom
          component="div"
        >
          Login
        </Typography>
        <TextField
          onChange={(e) => handleInputs(e)}
          sx={{ my: { xs: "5%", md: "6%" } }}
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          required
          name="email"
          error={error.email}
          helperText={error.email ? "Incorrect email." : ""}
          value={formData.email}
        />
        <br />
        <TextField
          onChange={(e) => handleInputs(e)}
          sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="Password"
          variant="standard"
          required
          name="pass"
          error={error.pass}
          value={formData.pass}
          helperText={
            error.pass
              ? "Must contain 8 or more characters, at least one  number, one uppercase and lowercase letter."
              : ""
          }
        />
        <br />
        <Button
          onClick={checkForm}
          href={"/"}
          type="submit"
          variant="contained"
          sx={{ mt: "5%", mb: "3%" }}
          fullWidth
        >
          {loading ? (
            <CircularProgress color="warning" size={20} sx={{ mr: 1 }} />
          ) : null}
          Log in
        </Button>

        <Link
          href="#"
          underline="hover"
          onClick={openModal}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {"Forgot password?"}
        </Link>
        <Link
          href="/register"
          underline="hover"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {"Sign up"}
        </Link>
        <p
          className="login-message"
          style={
            loginMessage.success
              ? { color: "#4caf50", fontSize: 24 }
              : { color: "#ef5350", fontSize: 24 }
          }
        >
          {" "}
          {loginMessage.message}
        </p>
      </Box>
      {openModalForgotPassword && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Login;
