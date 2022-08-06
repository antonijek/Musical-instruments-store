import {
  TextField,
  Box,
  Typography,
  Button,
  Link,
  Snackbar,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { React, useState, useContext, useEffect } from "react";
import { checkPass } from "../utils";
import { changePassword } from "../api";

const ChangePassword = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [snackBar, setSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ new: false, confirm: false });

  let token = localStorage.getItem("token");

  const validate = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      setError({
        ...error,
        confirm: "Confirm password and password do not match!",
      });
      return;
    }
    if (checkPass(password.newPassword) === false) {
      setError({ ...error, new: "Incorrect password format!" });
      return;
    } else {
      handleChangePassword();
    }
  };

  const handleChangePassword = async (e) => {
    setLoading(true);
    const form = {
      old_password: password.oldPassword,
      new_password: password.newPassword,
      password_repeat: password.confirmPassword,
    };
    try {
      const res = await changePassword(form, token);
      setMessage(res.data.message);
      console.log(res.data.message);
      setSnackBar(true);
      setLoading(false);
      setTimeout(handleCloseSnackbar, 2000);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackBar(false);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
    setError({ new: "", confirm: "" });
  };
  console.log(password);

  useEffect(() => {
    if (message === "password has been changed") {
      setTimeout(() => navigate("/Profile"), 2100);
    }
  }, [message]);

  return (
    <>
      <Box
        noValidate
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "90%", sm: "60%", md: "30%" },
          mx: "auto",
          mt: { xs: "20%", md: "10%" },
          mb: { xs: "20%" },
          boxShadow: { md: "20px 20px 50px #9E9E9E" },
          p: { xs: 2, md: 8 },
        }}
      >
        <Typography
          align="center"
          color="primary"
          variant="h4"
          gutterBottom
          component="div"
        >
          Change password
        </Typography>

        <TextField
          variant="standard"
          label=" Old password"
          margin="dense"
          onChange={handleChangeInput}
          name="oldPassword"
          value={password.oldPassword}
          type="password"
        />
        <TextField
          variant="standard"
          label="New password"
          margin="dense"
          name="newPassword"
          onChange={handleChangeInput}
          value={password.newPassword}
          type="password"
          error={error.new}
          helperText={error.new}
        />
        {loading ? (
          <CircularProgress sx={{ display: "block", mx: "auto" }} />
        ) : null}
        <TextField
          variant="standard"
          label=" Confirm password"
          margin="dense"
          onChange={handleChangeInput}
          name="confirmPassword"
          value={password.confirmPassword}
          type="password"
          error={error.confirm}
          helperText={error.confirm}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: "8%", mb: "5%" }}
          fullWidth
          onClick={validate}
        >
          OK
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackBar}
          autoHideDuration={4000}
        >
          <Alert
            severity={
              message === "password has been changed" ? "success" : "error"
            }
          >
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default ChangePassword;
