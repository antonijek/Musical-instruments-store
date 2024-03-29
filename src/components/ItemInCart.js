import { React, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { Typography, CardMedia, Box, Divider } from "@mui/material";

const ItemInCart = ({ desc, color, price, quantity, name, img }) => {
  const { user } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState();
  return (
    <Box>
      <Divider />

      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          mb: { xs: "5%", sm: "2%" },
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
                width: { xs: "35vw", sm: "15vw", lg: "10vw" },
                height: { xs: "23vw", sm: "15vw", lg: "10vw" },
              }}
            />
            <Box textAlign="start" sx={{ ml: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: "3vw", sm: "1.5vw", lg: "1.2vw" },
                  mb: { xs: 0, sm: "0%" },
                  mt: { xs: 0, sm: "0%" },
                }}
              >
                {desc.slice(0, 100)}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  mb: { xs: 0, sm: "2%" },
                  color: "black",
                }}
              >
                {color}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "4vw", sm: "2vw" },
                  mb: { xs: 0, sm: "2%" },
                  color: "black",
                }}
              >
                {price}€ * {quantity}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },

              justifyContent: "space-between",
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                mx: { xs: 0, sm: "10%" },
                display: { xs: "block", sm: "flex" },
                width: { xs: "50vw", sm: "20vw" },
                fontSize: { xs: "4vw", sm: "1.8vw" },
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
          <Typography sx={{ fontSize: { xs: "4vw", sm: "2.5vw" } }}>
            Total: € {quantity * price}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default ItemInCart;
