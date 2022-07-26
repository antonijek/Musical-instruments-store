import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { React, useState, useEffect } from "react";
import { Modal, Typography, Button, Box, Rating } from "@mui/material";
import { styleModal } from "../utils";
import "../styles/OneInstrument.css";
import { getOneInstrument } from "../api/index";

const OneInstrument = ({ handleClose, id }) => {
  const [instrument, setInstrument] = useState("");
  const [value, setValue] = useState(2);
  const [com, setCom] = useState(1);

  const handleModalForInstrument = async () => {
    try {
      const res = await getOneInstrument(id);
      console.log(res.data.data);
      setInstrument(res.data.data[0]);
    } catch (err) {
      console.log(err);
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
            <Box>
              <img
                className="img-modal"
                src="../images/piano.jpg"
                alt="pianos"
              />
            </Box>
            <Box sx={{ textAlign: "start", mb: "5%" }}>
              <Typography
                sx={{
                  fontSize: { xs: "5vw", sm: "2vw" },
                  fontWeight: "semibold",
                  mb: "5%",
                }}
              >
                {instrument.name}
              </Typography>
              <Typography sx={{ fontSize: { xs: "3vw", sm: "1.2vw" } }}>
                SKY Accordion Purple Color 7 Button 2 Bass Kid Music Instrument
                Easy to PlayGREAT GIFT
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
                <span> black</span>
              </Typography>

              <Typography sx={style}>
                <span className="instrument-details">Weight:</span>
                <span>kg 112 </span>
              </Typography>
              <Typography sx={style}>
                <span className="instrument-details">Dimensions:</span>
                <span> 105/130/88</span>
              </Typography>
            </Box>

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

            <Box sx={{ mt: { xs: 3, sm: "10%" } }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<ShoppingCartRoundedIcon sx={{ color: "orange" }} />}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default OneInstrument;
