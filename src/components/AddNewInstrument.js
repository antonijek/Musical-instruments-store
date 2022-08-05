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
import CloseIcon from "@mui/icons-material/Close";

const AddNewInstrument = ({
  modalForNewInstrument,
  setModalForNewInstrument,
}) => {
  const [form, setForm] = useState({});
  const [snackBar, setSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [dialog, setDialog] = useState(false);

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
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      const {
        name,
        color,
        description,
        dimensions,
        quantity,
        weight,
        instrument_category_id,
        price,
      } = form;
      data.append("photo", selectedFile);
      data.append("name", name);
      data.append("color", color);
      data.append("description", description);
      data.append("dimensions", dimensions);
      data.append("quantity", quantity);
      data.append("weight", weight);
      data.append("instrument_category_id", instrument_category_id);
      data.append("price", price);

      const res = await adding(data, token);
      setMessage(res.data.message);
      setSnackBar(true);
      setTimeout(handleClose, 2000);
      setLoading(false);
    } catch (err) {
      setDialog(true);

      setLoading(false);
    }
  };
  console.log(form);
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
          <CloseIcon
            onClick={handleClose}
            sx={{ cursor: "pointer", border: "1px solid black" }}
            color="warning"
          />
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
              sx={{ mt: 1, width: "80%" }}
              name="name"
              onChange={(e) => handleForm(e)}
            />
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <TextField
              required
              type="number"
              label="Category id"
              variant="standard"
              value={form.instrument_category_id}
              sx={{ mt: 1, width: "80%" }}
              name="instrument_category_id"
              onChange={(e) => handleForm(e)}
            />

            <TextField
              required
              type="number"
              label="Price"
              variant="standard"
              value={form.price}
              sx={{ mt: 1, width: "80%" }}
              name="price"
              onChange={(e) => handleForm(e)}
            />
            <TextField
              required
              type="number"
              label="Quantity"
              variant="standard"
              value={form.quantity}
              sx={{ mt: 1, width: "80%" }}
              name="quantity"
              onChange={(e) => handleForm(e)}
            />
            {loading ? (
              <CircularProgress sx={{ display: "block", mx: "auto" }} />
            ) : null}
            <TextField
              required
              label="Description"
              variant="standard"
              value={form.description}
              sx={{ mt: 1, width: "80%" }}
              name="description"
              onChange={(e) => handleForm(e)}
            />

            <TextField
              required
              label="Color"
              variant="standard"
              value={form.color}
              sx={{ mt: 1, width: "80%" }}
              name="color"
              onChange={(e) => handleForm(e)}
            />

            <TextField
              required
              type="number"
              label="Weight"
              variant="standard"
              value={form.weight}
              sx={{ mt: 1, width: "80%" }}
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
              sx={{ mt: 1, width: "80%" }}
              name="dimensions"
              onChange={(e) => handleForm(e)}
            />

            <Box>
              <Button onClick={addInstrument} type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar}
        autoHideDuration={4000}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={dialog}
        autoHideDuration={4000}
      >
        <Alert severity="error">Pravilno popunite sva polja!</Alert>
      </Snackbar>
    </div>
  );
};

export default AddNewInstrument;
