import { React, useState } from "react";
import { TextField, Modal, Typography, Button, Box } from "@mui/material";
import { style, checkEmail } from "../utils";

const BasicModal = ({ closeModal }) => {
  const [email, setEmail] = useState(true);
  const [error, setError] = useState(false);

  const handleClose = () => {
    if (checkEmail(email) === true) {
      closeModal();
    } else {
      setError(true);
    }
  };

  const handleEmail = (letter) => {
    setEmail(letter);
    setError(false);
  };
  return (
    <div>
      <Modal open onClose={closeModal}>
        <Box sx={style}>
          <TextField
            variant="standard"
            fullWidth
            label="Email"
            error={error}
            helperText={"Invalid email."}
            onChange={(e) => handleEmail(e.target.value)}
          ></TextField>
          <Typography sx={{ mt: 2 }}>
            To request password reset link, please enter your email address.
          </Typography>
          <Button
            onClick={handleClose}
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
