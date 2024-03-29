import { React } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EditInstrument = ({
  handleClose,
  form,
  handleForm,
  validate,
  handleClickOpen,
  loading,
  message,
  snackbar,
  setSnackbar,
}) => {
  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  return (
    <Box>
      <CloseIcon
        onClick={handleClose}
        sx={{ cursor: "pointer", border: "1px solid black" }}
        color="warning"
      />
      <form action="">
        <Box>
          <Snackbar
            width="100%"
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={snackbar}
            autoHideDuration={4500}
            handleclose={setTimeout(handleCloseSnackbar, 4000)}
          >
            <Alert severity="success">{message}</Alert>
          </Snackbar>
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
          {loading ? (
            <CircularProgress sx={{ display: "block", mx: "auto" }} />
          ) : null}
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
        </Box>
        <Box
          sx={{
            mt: "5%",
          }}
        >
          <Button onClick={validate} type="submit" variant="contained">
            Submit
          </Button>
        </Box>
        <Box textAlign="end">
          <Button onClick={handleClickOpen} variant="outlined" color="error">
            Remove instrument
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditInstrument;
