import { React, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AlertDialog from "./AlertDialog";
import EditUser from "./EditUser";
import EditInstrument from "./EditInstrument";
import { Box, Typography, Modal, Button } from "@mui/material";

import { style } from "../utils";

import { editInstrument, removeInstrument } from "../api";
import AddNewInstrument from "./AddNewInstrument";

export default function Table({ title, columns, rows, setRows }) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [form, setForm] = useState({});
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [modalForNewInstrument, setModalForNewInstrument] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState();
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
          id: e.row.id,
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

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEditInstrument = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const res = await editInstrument(details.id, form, token);
      setMessage(res.data.message);
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
            {details.email ? (
              <EditUser
                handleClose={handleClose}
                form={form}
                handleForm={handleForm}
                details={details}
                rows={rows}
                setRows={setRows}
              />
            ) : (
              <EditInstrument
                handleClose={handleClose}
                form={form}
                handleForm={handleForm}
                validate={validate}
                handleClickOpen={handleClickOpen}
                loading={loading}
                message={message}
                snackbar={snackbar}
                setSnackbar={setSnackbar}
              />
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
