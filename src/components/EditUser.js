import { React, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AlertDialog from "./AlertDialog";

import {
  Box,
  Typography,
  Modal,
  Checkbox,
  TextField,
  FormControlLabel,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { style } from "../utils";
import { verify } from "../api";
import { editInstrument, removeInstrument, editUser } from "../api";
import AddNewInstrument from "./AddNewInstrument";

const EditUser = ({ handleClose, form, handleForm, details }) => {
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState();
  const [loading, setloading] = useState(false);

  let token = localStorage.getItem("token");

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const res = await editUser(form, token);
      setMessage(res.data.message);
      setSnackbar(true);
      setTimeout(handleClose, 2000);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  const verifyUser = async () => {
    setloading(true);
    try {
      const res = await verify(details.id, token);
      setMessage(res.data.message);
      setloading(false);
      setSnackbar(true);
      setTimeout(handleClose, 2000);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <CloseIcon
        onClick={handleClose}
        sx={{ cursor: "pointer", border: "1px solid black" }}
        color="warning"
      />
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Edit user datails
        </Typography>
        <TextField
          required
          value={form.first_name}
          sx={{ mt: 2 }}
          name="first_name"
          onChange={(e) => handleForm(e)}
        />
        <TextField
          required
          value={form.last_name}
          sx={{ mt: 2 }}
          name="last_name"
          onChange={(e) => handleForm(e)}
        />
        <Snackbar
          width="100%"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackbar}
          autoHideDuration={4000}
          handleclose={setTimeout(handleCloseSnackbar, 2000)}
        >
          <Alert severity="success">{message}</Alert>
        </Snackbar>
        <TextField
          required
          type="email"
          value={form.email}
          sx={{ mt: 2 }}
          name="email"
          onChange={(e) => handleForm(e)}
        />
        {loading ? (
          <CircularProgress sx={{ display: "block", mx: "auto" }} />
        ) : null}
        <TextField
          required
          type="number"
          value={form.funds}
          sx={{ mt: 2 }}
          name="funds"
          onChange={(e) => handleForm(e)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "5%",
        }}
      >
        <Button onClick={handleEditUser} type="submit" variant="contained">
          Submit
        </Button>
        <Box sx={{ textAlign: "end", display: "block" }}>
          <FormControlLabel
            control={<Checkbox onChange={verifyUser} />}
            label="Verified"
          />
        </Box>
      </Box>
      <Box textAlign="end">
        <Button variant="outlined" color="error">
          Remove user
        </Button>
      </Box>
    </Box>
  );
};

export default EditUser;
