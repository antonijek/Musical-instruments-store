import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import {
  Modal,
  Typography,
  Button,
  Box,
  Rating,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { styleModal } from "../utils";
import "../styles/OneInstrument.css";
import { getOneInstrument } from "../api/index";
import { rating } from "../api/index";
import { React, useState, useEffect, useContext } from "react";
import "../styles/OneInstrument.css";
import { CartContext } from "./CartContext";

const OneInstrument = ({ handleClose, id }) => {
  const [instrument, setInstrument] = useState("");
  const [value, setValue] = useState(2);
  const [com, setCom] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  let token = localStorage.getItem("token");
  const { addToCart, setAddToCart } = useContext(CartContext);

  const handleModalForInstrument = async () => {
    try {
      const res = await getOneInstrument(id);
      setInstrument(res.data.data[0]);
      // console.log(res.data.data[0])
    } catch (err) {
      console.log(err);
    }
  };

  const rateInstrument = async (num) => {
    setLoading(true);
    try {
      const res = await rating(token, id, num);
      console.log(res);
      setOpen(true);
      setMessage(res.data.message);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleModalForInstrument();
  }, []);

  const decrease = () => {
    com > 1 ? setCom(com - 1) : setCom(1);
  };
  const increase = () => {
    com > instrument.quantity - 1
      ? setCom(instrument.quantity)
      : setCom(com + 1);
  };

  const handleAddToCart = (inst) => {
    const instrumentExist = addToCart.find((item) => item.id === inst.id);
    if (instrumentExist) {
      setAddToCart(
        addToCart.map((item) =>
          item.id === inst.id
            ? { ...instrumentExist, quantity: instrumentExist.quantity + 1 }
            : item
        )
      );
    } else {
      setAddToCart([...addToCart, { ...inst, quantity: com }]);
    }
  };

  // console.log(addToCart[0]);

  // console.log('kvant: ' + instrument.quantity);
  // console.log('com: ' + com);

  const style = {
    fontSize: { xs: "4vw", sm: "1.5vw" },
    color: "orange",
    mb: { xs: "2%", sm: "5%" },
    display: "flex",
    justifyContent: "space-between",
  };
  const itemNumber = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: "10vw", sm: "4vw" },
    height: { xs: "10vw", sm: "4vw" },
    borderRadius: "50%",
    border: "3px solid orange",
    marginTop: "1vw",
    fontWeight: "bold",
    fontSize: { xs: "5vw", sm: "2vw" },
  };

  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box sx={styleModal}>
          <Box>
            <Box className="img-modal">
              <img src={instrument.photo} alt="pianos" />
            </Box>
            <Box sx={{ textAlign: "center", mb: "5%" }}>
              <Typography
                sx={{
                  fontSize: { xs: "5vw", sm: "2vw" },
                  fontWeight: "semibold",
                  mb: "5%",
                }}
              >
                {instrument.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "3vw", sm: "1.2vw" },
                  textAlign: "start",
                }}
              >
                {instrument.description}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ pl: { xs: 0, sm: 2 } }}>
              <Typography sx={style}>
                <span className="instrument-details">Price: </span>
                <span> € {instrument.price}</span>
              </Typography>
              <Typography sx={style}>
                <span className="instrument-details">Quantity: </span>
                <span> {instrument.quantity}</span>
              </Typography>
              <Typography sx={style}>
                <span className="instrument-details">Color: </span>
                <span> {instrument.color}</span>
              </Typography>

              <Typography sx={style}>
                <span className="instrument-details">Weight:</span>
                <span>kg {instrument.weight} </span>
              </Typography>
              <Typography sx={style}>
                <span className="instrument-details">Dimensions:</span>
                <span> {instrument.dimensions}</span>
              </Typography>
            </Box>
            {loading ? (
              <CircularProgress sx={{ ml: { xs: "40%", sm: 0 } }} />
            ) : null}

            <Box
              sx={{
                textAlign: "center",
                mt: { xs: "4vw", sm: "15%" },
              }}
            >
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  width: "100%",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    rateInstrument(newValue);
                  }}
                />
              </Box>
              <Box sx={{ mt: "5%", display: "flex", justifyContent: "center" }}>
                <Button>
                  <RemoveIcon
                    sx={{ fontSize: { xs: "10vw", sm: "5vw" } }}
                    onClick={decrease}
                  />
                </Button>
                <Box sx={itemNumber}>{com}</Box>

                <Button>
                  <AddIcon
                    sx={{ fontSize: { xs: "10vw", sm: "5vw" } }}
                    onClick={increase}
                  />
                </Button>
              </Box>
            </Box>

            <Box sx={{ mt: { xs: 3, sm: "25%" } }}>
              <Button
                onClick={() => handleAddToCart(instrument)}
                fullWidth
                variant="contained"
                disabled={false}
                startIcon={<ShoppingCartRoundedIcon sx={{ color: "orange" }} />}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        sx={{ color: "red" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        handleClose={setTimeout((e) => {
          setOpen(false);
        }, 6000)}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default OneInstrument;
