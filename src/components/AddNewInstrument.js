import { React, useState } from "react";
import { adding } from "../api";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { style } from "../utils";

const AddNewInstrument = ({
  modalForNewInstrument,
  setModalForNewInstrument,
}) => {
  const [form, setForm] = useState({});
  const [snackBar, setSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  let token = localStorage.getItem("token");

  const handleClose = () => setModalForNewInstrument(false);
  const handleCloseSnackbar = () => {
    setSnackBar(false);
  };
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addInstrument = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      console.log("test");
      const res = await adding(form, token);
      setMessage(res.data.message);
      setSnackBar(true);
      setTimeout(handleClose, 2000);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const validate = (e) => {
    const {
      name,
      photo,
      instrument_category_id,
      price,
      quantity,
      description,
      color,
      weight,
      dimensions,
    } = form;
    if (
      name &&
      photo &&
      instrument_category_id &&
      price &&
      quantity &&
      description &&
      color &&
      weight &&
      dimensions
    ) {
      addInstrument(e);
    }
  };

  return (
    <div>
      <Modal open={modalForNewInstrument} onClose={handleClose}>
        <Box sx={style}>
          <form action="">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              New Instrument
            </Typography>
            <TextField
              required
              label="Name"
              variant="standard"
              value={form.name}
              sx={{ mt: 2, width: "80%" }}
              name="name"
              onChange={(e) => handleForm(e)}
            />
            <TextField
              required
              label="Photo"
              variant="standard"
              value={form.photo}
              sx={{ mt: 2, width: "80%" }}
              name="photo"
              onChange={(e) => handleForm(e)}
            />
            <TextField
              required
              type="number"
              label="Category id"
              variant="standard"
              value={form.instrument_category_id}
              sx={{ mt: 2, width: "80%" }}
              name="instrument_category_id"
              onChange={(e) => handleForm(e)}
            />

            <TextField
              required
              type="number"
              label="Price"
              variant="standard"
              value={form.price}
              sx={{ mt: 2, width: "80%" }}
              name="price"
              onChange={(e) => handleForm(e)}
            />
            <TextField
              required
              type="number"
              label="Quantity"
              variant="standard"
              value={form.quantity}
              sx={{ mt: 2, width: "80%" }}
              name="quantity"
              onChange={(e) => handleForm(e)}
            />
            {loading ? <CircularProgress sx={{ ml: "40%" }} /> : null}
            <TextField
              required
              label="Description"
              variant="standard"
              value={form.description}
              sx={{ mt: 2, width: "80%" }}
              name="description"
              onChange={(e) => handleForm(e)}
            />

            <TextField
              required
              label="Color"
              variant="standard"
              value={form.color}
              sx={{ mt: 2, width: "80%" }}
              name="color"
              onChange={(e) => handleForm(e)}
            />

            <TextField
              required
              type="number"
              label="Weight"
              variant="standard"
              value={form.weight}
              sx={{ mt: 2, width: "80%" }}
              name="weight"
              onChange={(e) => handleForm(e)}
            />
            <TextField
              required
              helperText={
                form.dimensions === "" ? "Dimensions are required!" : " "
              }
              label="Dimensions"
              variant="standard"
              value={form.dimensions}
              sx={{ mt: 2, width: "80%" }}
              name="dimensions"
              onChange={(e) => handleForm(e)}
            />

            <Box>
              <Button onClick={validate} type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      <Snackbar
        sx={{ color: "red" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar}
        autoHideDuration={4000}
        handleclose={setTimeout(handleCloseSnackbar, 3000)}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default AddNewInstrument;
