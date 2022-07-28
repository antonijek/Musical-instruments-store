import { React, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { Typography, CardMedia, Box } from "@mui/material";

const ItemInCart = ({ desc, color, price, quantity, name, img }) => {
  const { user } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState();
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          width: { xs: "90%", sm: "100%" },
          height: { xs: "25vw", sm: "auto" },
          color: "text.secondary",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={img}
            alt="img"
            sx={{
              width: { xs: "40vw", sm: "10vw" },
              height: { xs: "23vw", sm: "6vw" },
            }}
          />
          <Box textAlign="start" sx={{ ml: 1 }}>
            <Typography sx={{ fontSize: { xs: "3vw", sm: "1.2vw" } }}>
              {desc}
            </Typography>
            <Typography sx={{ fontSize: { xs: "3vw", sm: "1.2vw" } }}>
              {" "}
              {color}
            </Typography>
            <Typography sx={{ fontSize: { xs: "3vw", sm: "1.2vw" } }}>
              {" "}
              {price}€ * {quantity}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              m: 0,
              display: { xs: "block", sm: "flex" },
              width: { xs: "50vw", sm: "10vw" },
              fontSize: { xs: "5vw", sm: "1.5vw" },
            }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          my: "auto",
          width: { xs: "30vw", sm: "20vw" },
          ml: { xs: "70%", sm: "0" },
        }}
      >
        <Typography sx={{ fontSize: { xs: "4vw", sm: "1.5vw" } }}>
          Total: € 21,00
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemInCart;
