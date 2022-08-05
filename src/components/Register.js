import { React, useEffect, useContext } from "react";
import useRegister from "../hooks/useRegister.js";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { UserContext } from "./UserContext";

const Register = () => {
  const { setUser } = useContext(UserContext);
  const { formValues, formErrors, handleChange, handleSubmit, user, loading } =
    useRegister();

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  // Styles
  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  };
  const paperStyle = {
    width: { xs: "90%", sm: "70%", md: "60%", lg: "40%" },
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const avatarStyle = {
    marginTop: "10px",
    width: 60,
    height: 60,
  };
  const formStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const textFieldStyle = {
    width: { xs: "90%", sm: "70%", md: "60%", lg: "70%" },
    marginTop: "5%",
    // width:'60%'
  };
  const errorText = {
    color: "red",
    fontSize: "0.8em",
  };
  const buttonStyle = {
    width: { xs: "70%", sm: "40%", md: "30%", lg: "40%" },
    margin: {
      xs: "10% 10% 4% 10%",
      sm: "10% 10% 4% 10%",
      md: "6% 10% 3% 10%",
      lg: "10% 10% 4% 10%",
    },
  };

  return (
    <Grid sx={gridStyle}>
      <Typography variant="h3" color="primary" sx={{ padding: "3px" }}>
        Sign up
      </Typography>
      <Paper variant="outlined" sx={paperStyle}>
        <Avatar sx={avatarStyle} src="/broken-image.jpg" />
        <form style={formStyle} onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            variant="standard"
            value={formValues.firstName}
            onChange={(e) => handleChange(e)}
            sx={textFieldStyle}
          />
          <Typography sx={errorText}> {formErrors.firstName} </Typography>

          <TextField
            type="text"
            name="lastName"
            label="Last Name"
            variant="standard"
            value={formValues.lastName}
            onChange={handleChange}
            sx={textFieldStyle}
          />
          <Typography sx={errorText}> {formErrors.lastName} </Typography>

          <TextField
            type="text"
            name="username"
            label="Username"
            variant="standard"
            value={formValues.username}
            onChange={handleChange}
            sx={textFieldStyle}
          />
          <Typography sx={errorText}> {formErrors.username} </Typography>

          <TextField
            type="text"
            name="email"
            label="Email"
            variant="standard"
            value={formValues.email}
            onChange={handleChange}
            sx={textFieldStyle}
          />
          <Typography sx={errorText}> {formErrors.email} </Typography>

          <TextField
            type="password"
            name="password"
            label="Password"
            variant="standard"
            value={formValues.password}
            onChange={handleChange}
            sx={textFieldStyle}
          />
          <Typography sx={errorText}> {formErrors.password} </Typography>

          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm password"
            variant="standard"
            value={formValues.confirmPassword}
            onChange={handleChange}
            sx={textFieldStyle}
          />
          <Typography sx={errorText}> {formErrors.confirmPassword} </Typography>

          <Button sx={buttonStyle} variant="contained" type="submit">
            {loading ? (
              <CircularProgress color="inherit" size={20} sx={{ mr: 1 }} />
            ) : null}
            Sign in
          </Button>
        </form>
        <Typography variant="p" sx={{ padding: "3px" }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
