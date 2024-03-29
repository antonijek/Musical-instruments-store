import { React, useContext, useState } from "react";
import axios from "axios";
import { Typography, Box, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { CartContext } from "../CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../UserContext";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const Cart = () => {
  let token = localStorage.getItem("token");
  const { addToCart, setAddToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();

  const totalPrice = addToCart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const totalQuantity = addToCart.length;

  const buyHandler = async () => {
    let items;
    let basket = [];

    const arr = addToCart.map((item) => {
      let obj = {};
      obj[item.id] = item.quantity;
      return obj;
    });

    basket = arr;
    let obj = { item: {} };
    basket.map((item) => {
      for (let key in item) {
        obj.item[key] = item[key];
      }
    });

    items = obj.item;

    const res = await axios.post(
      `https://phplaravel-816081-2801950.cloudwaysapps.com/api/buy`,
      {
        items,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOpenSnack(true);
    setMessage("purchased successfuly");

    setAddToCart([]);
    setTimeout(() => {
      navigate("/shop");
    }, 1000);
  };

  const handleDelete = (instId) => {
    const deleteInst = addToCart.filter((elem) => elem.id !== instId);
    setAddToCart(deleteInst);
  };

  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    justifyConent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: "30vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          height: { xs: "30vh", sm: "70vh" },
          marginTop: "5%",
          marginBottom: { xs: "55vh", sm: "0" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            height: { xs: "40vh", sm: "80vh" },
            overflow: "auto",
            scrollbar: "5px",
            marginBottom: { xs: "5%", sm: "20vh" },
          }}
        >
          {addToCart.length ? (
            <Typography
              sx={{
                fontSize: "1.4em",
                textAlign: "center",
                color: "primary.main",
              }}
            >
              Your have {totalQuantity} items:
            </Typography>
          ) : (
            <Typography
              sx={{
                fontSize: { xs: "1.2", sm: "1.4em" },
                textAlign: "center",
                color: "primary.main",
                mt: { xs: "15vh", sm: "30vh" },
              }}
            >
              There is no instruments in card
            </Typography>
          )}

          {addToCart.map((elem) => (
            <Box sx={{ margin: "3%" }} key={elem.id}>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "20vh",
                  padding: "0%",
                  border: "1px solid black",
                  marginBottom: "2%",
                }}
              >
                <img
                  src={elem.photo}
                  alt="img"
                  style={{ width: "25%", height: "95%" }}
                ></img>
                <Typography>
                  <b>{elem.name}</b>
                </Typography>
                <Typography>{elem.price}&euro;</Typography>
                <Typography>X{elem.quantity}</Typography>
                <Button onClick={() => handleDelete(elem.id)}>
                  <DeleteIcon />
                </Button>
              </Stack>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: { xs: "1%", sm: "35%" },
              padding: { xs: "1%", sm: "20%" },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.7em",
                marginBottom: "15%",
              }}
            >
              Balance: <b>{user.funds} &euro;</b>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.9em",
                marginBottom: "15%",
              }}
            >
              Total: <b>{totalPrice}$</b>
            </Typography>
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{ width: "80%", padding: "4%" }}
            >
              BUY
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Box sx={{ marginTop: "11%" }}>
              <Typography
                sx={{ fontSize: "2em" }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Confirm purchase
              </Typography>
            </Box>
            <Box sx={{ marginTop: "5%" }}>
              <Button
                variant="outlined"
                sx={{ margin: "15px" }}
                onClick={buyHandler}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                sx={{ margin: "15px" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnack}
        autoHideDuration={5000}
        handleClose={setTimeout((e) => {
          setOpenSnack(false);
        }, 4000)}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </>
  );
};

export default Cart;
