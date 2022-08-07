import { React, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert, CircularProgress } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = ({
  closeAlertDialog,
  deleteItem,
  confirmationDelete,
  setConfirmationDelete,
  loading,
}) => {
  const handleClose = () => {
    setConfirmationDelete(false);
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
            Are you sure?
          </DialogContentText>
        </DialogContent>
        {loading ? <CircularProgress sx={{ ml: "40%" }} /> : null}
        <DialogActions>
          <Button onClick={closeAlertDialog}>No</Button>
          <Button onClick={deleteItem} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={confirmationDelete}
        autoHideDuration={5000}
        handleclose={setTimeout(handleClose, 4500)}
      >
        <Alert severity="success">instrument deleted successfully!</Alert>
      </Snackbar>
    </div>
  );
};
export default AlertDialog;
