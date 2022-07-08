import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../utils";
import { TextField } from "@mui/material";

const BasicModal = ({ closeModal }) => {
  const handleClose = () => closeModal();

  return (
    <div>
      <Modal open onClose={handleClose}>
        <Box sx={style}>
          <TextField variant="standard" fullWidth label="Email"></TextField>
          <Typography sx={{ mt: 2 }}>
            Please insert your email address.
          </Typography>
          <Button
            onClick={closeModal}
            variant="contained"
            fullWidth
            sx={{ display: "block", mx: "auto", my: 2 }}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
