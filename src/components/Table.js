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
import { style } from "../utils";
import { verify } from "../api";
import { editInstrument, removeInstrument } from "../api";
import AddNewInstrument from "./AddNewInstrument";

export default function Table({ title, setTitle, columns, rows, setRows }) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [form, setForm] = useState({});
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [modalForNewInstrument, setModalForNewInstrument] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [loading, setloading] = useState(false);

  const handleClickOpen = () => {
    setOpenAlertDialog(true);
  };

  const closeAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  let token = localStorage.getItem("token");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showMOreDetails = (e) => {
    handleOpen();
    setDetails(e.row);
    e.row.email
      ? setForm({
          first_name: e.row.first_name,
          last_name: e.row.last_name,
          email: e.row.email,
          funds: e.row.funds,
        })
      : setForm({
          name: e.row.name,
          instrument_category_id: e.row.instrument_category_id,
          price: e.row.price,
          quantity: e.row.quantity,
          description: e.row.description,
          color: e.row.color,
          weight: e.row.weight,
          dimensions: e.row.dimensions,
        });
  };

  const verifyUser = async () => {
    try {
      const res = await verify(details.id, token);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEditInstrument = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const res = await editInstrument(details.id, form, token);
      setSnackbar(true);
      setTimeout(handleClose, 3000);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  const validate = (e) => {
    const {
      name,
      instrument_category_id,
      price,
      quantity,
      description,
      color,
      weight,
      dimensions,
    } = form;
    name &&
    instrument_category_id &&
    price &&
    quantity &&
    description &&
    color &&
    weight &&
    dimensions
      ? handleEditInstrument(e)
      : alert("All fields must be filled");
  };

  const deleteInstrument = async () => {
    setloading(true);
    try {
      const res = await removeInstrument(details.id, token);
      const restInstruments = rows.filter((ins) => ins.id !== details.id);
      setConfirmationDelete(true);
      setRows(restInstruments);
      setTimeout(closeAlertDialog, 3000);
      setTimeout(handleClose, 3000);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      {modalForNewInstrument ? (
        <AddNewInstrument
          modalForNewInstrument={modalForNewInstrument}
          setModalForNewInstrument={setModalForNewInstrument}
        />
      ) : null}

      <div>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", my: "5%", color: "text.secondary" }}
        >
          {title}
        </Typography>
        {title === "Instruments" ? (
          <Button
            onClick={() => setModalForNewInstrument(true)}
            sx={{ mb: 1, ml: 1 }}
            variant="outlined"
          >
            Add new instrument
          </Button>
        ) : null}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          autoPageSize
          autoHeight
          onRowClick={showMOreDetails}
        />
      </div>

      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Snackbar
              width="100%"
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={snackbar}
              autoHideDuration={4000}
              handleclose={setTimeout(handleCloseSnackbar, 2000)}
            >
              <Alert severity="success">Instrument updated!</Alert>
            </Snackbar>

            {details.email ? (
              <Box>
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
                  <TextField
                    required
                    type="email"
                    value={form.email}
                    sx={{ mt: 2 }}
                    name="email"
                    onChange={(e) => handleForm(e)}
                  />
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
                  <Button
                    onClick={handleEditInstrument}
                    type="submit"
                    variant="contained"
                  >
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
            ) : (
              <Box>
                <form action="">
                  <Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{ textAlign: "center" }}
                    >
                      Edit instrument datails
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
                    <TextField
                      required
                      label="Description"
                      variant="standard"
                      value={form.description}
                      sx={{ mt: 2, width: "80%" }}
                      name="description"
                      onChange={(e) => handleForm(e)}
                    />
                    {loading ? <CircularProgress sx={{ ml: "40%" }} /> : null}
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
                        form.dimensions === ""
                          ? "Dimensions are required!"
                          : " "
                      }
                      label="Dimensions"
                      variant="standard"
                      value={form.dimensions}
                      sx={{ mt: 2, width: "80%" }}
                      name="dimensions"
                      onChange={(e) => handleForm(e)}
                    />
                  </Box>
                  <Box
                    sx={{
                      mt: "5%",
                    }}
                  >
                    <Button
                      onClick={validate}
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Box>
                  <Box textAlign="end">
                    <Button
                      onClick={handleClickOpen}
                      variant="outlined"
                      color="error"
                    >
                      Remove instrument
                    </Button>
                  </Box>
                </form>
              </Box>
            )}
          </Box>
        </Modal>
      </div>
      {openAlertDialog ? (
        <AlertDialog
          deleteInstrument={deleteInstrument}
          closeAlertDialog={closeAlertDialog}
          confirmationDelete={confirmationDelete}
          setConfirmationDelete={setConfirmationDelete}
          loading={loading}
        />
      ) : null}
    </div>
  );
}
