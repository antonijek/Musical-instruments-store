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
            <Box sx={{ textAlign: "start" }}>
              <Typography sx={{ fontSize: { xs: "4vw", sm: "2vw" } }}>
                SKY Accordion Purple Color 7 Button 2 Bass Kid Music Instrument
                Easy to PlayGREAT GIFT
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "5vw", sm: "3vw" },
                  fontWeight: "semibold",
                }}
              >
                {instrument.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ pl: { xs: 0, sm: 2 } }}>
              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  color: "orange",
                  mb: "2%",
                }}
              >
                <span className="instrument-details">Price: </span>
                {instrument.price} €
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  color: "orange",
                  mb: "2%",
                }}
              >
                <span className="instrument-details">Quantity: </span>
                {instrument.quantity}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  color: "orange",
                  mb: "2%",
                }}
              >
                <span className="instrument-details">Color: </span>
                black
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  color: "orange",
                  mb: "2%",
                }}
              >
                <span className="instrument-details">Item Weight:</span>
                112 kg
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  color: "orange",
                  mb: "2%",
                }}
              >
                <span className="instrument-details">Item Dimensions:</span>
                105/130/88
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center", mt: { xs: 3, sm: "15%" } }}>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <Box sx={{ my: "5%", display: "flex", justifyContent: "center" }}>
                <Button>
                  <RemoveIcon fontSize="large" onClick={decrease} />
                </Button>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    marginTop: "4px",
                  }}
                >
                  {com}
                </span>

                <Button>
                  <AddIcon fontSize="large" onClick={() => setCom(com + 1)} />
                </Button>
              </Box>
            </Box>

            <Box sx={{ mt: { xs: 3, sm: "20%" } }}>
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
