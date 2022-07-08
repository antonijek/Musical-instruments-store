import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../utils";
import { TextField } from "@mui/material";

const BasicModal = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => props.closeModal();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField variant="standard" fullWidth label="email"></TextField>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please insert your email address.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
