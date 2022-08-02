import { React, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  closeAlertDialog,
  deleteInstrument,
  confirmationDelete,
  setConfirmationDelete,
}) {
  const handleDelete = () => {
    deleteInstrument();
    console.log("test");
  };

  return (
    <div>
      <Dialog
        open
        onClose={closeAlertDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this instrument?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAlertDialog}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        sx={{ color: "red" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={confirmationDelete}
        autoHideDuration={6000}
        handleClose={setTimeout((e) => {
          setConfirmationDelete(false);
        }, 6000)}
      >
        <Alert severity="success">Instrument deleted successfully!</Alert>
      </Snackbar>
    </div>
  );
}
