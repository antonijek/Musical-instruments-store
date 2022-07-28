import { TextField, Box, Typography, Button, Link } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { React, useState } from "react";
import { checkPass } from "../utils";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState();
  console.log(user);

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
          Edit data
        </Typography>
        <TextField
          variant="standard"
          margin="dense"
          placeholder={user.first_name}
        />
        <TextField
          variant="standard"
          placeholder={user.last_name}
          margin="dense"
        />
        <TextField variant="standard" label=" Old password" margin="dense" />
        <TextField
          variant="standard"
          label="New password"
          margin="dense"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField variant="standard" placeholder={user.photo} margin="dense" />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: "8%", mb: "5%" }}
          fullWidth
        >
          OK
        </Button>
      </Box>
    </>
  );
};

export default EditProfile;
