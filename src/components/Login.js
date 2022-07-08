import React from "react";
import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import Modal from "./Modal";
const Login = () => {
  const [form, setForm] = useState({ email: "", pass: "" });
  const [error, setError] = useState({ email: false, pass: false });
  const [open, setOpen] = useState(false);

  const checkEmail = (e) => {
    let patern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let res = patern.test(form.email);
    return !res;
  };

  const checkPass = (e) => {
    let patern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let res = patern.test(form.pass);
    return !res;
  };
  const checkForm = (e) => {
    e.preventDefault();
    setError({ pass: checkPass(), email: checkEmail() });
  };

  const checkError = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  console.log(open);
  return (
    <div>
      <Box
        noValidate
        component="form"
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%" },
          mx: "auto",
          mt: "20%",
          boxShadow: { md: "20px 20px 50px #9E9E9E" },
          p: 2,
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
          onChange={(e) => checkError(e)}
          sx={{ mb: "10%" }}
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          required
          name="email"
          error={error.email}
          helperText={error.email ? "Incorrect email." : ""}
        />
        <br />
        <TextField
          onChange={(e) => checkError(e)}
          sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="Password"
          variant="standard"
          required
          name="pass"
          error={error.pass}
          helperText={
            error.pass
              ? "Must contain 8 or more characters, at least one  number, one uppercase and lowercase letter."
              : ""
          }
        />
        <br />
        <Button
          onClick={checkForm}
          type="submit"
          variant="contained"
          sx={{ mt: "5%", mb: "3%" }}
          fullWidth
        >
          Log in
        </Button>

        <Link component="button" underline="hover" onClick={openModal}>
          {"Forgot password?"}
        </Link>
        <Link
          href="/register"
          underline="hover"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {"Sign up"}
        </Link>
      </Box>
      {open && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Login;
