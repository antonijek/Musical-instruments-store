import { React, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import ItemInCart from "./ItemInCart";
import "../styles/Profile.css";
import { Button, Typography, Box, Divider, Link } from "@mui/material";
import { getOrders } from "../api";
import { getOneOrder } from "../api";
import { pad_with_zeroes } from "../utils";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [instrumentsPerOrder, setInstrumentsPerOrder] = useState([]);
  let token = localStorage.getItem("token");

  const handleOrder = async () => {
    const res = await getOrders(token);
    setOrders(res.data.data);
    console.log(res);
  };

  const shoeOrder = async (id) => {
    const res = await getOneOrder(token, id);

    setInstrumentsPerOrder(res.data.data.has_many_baskets);
  };

  useEffect(() => {
    handleOrder();
  }, []);

  return (
    <Box className="profile">
      <Typography
        sx={{ mb: "2vw", fontSize: { xs: "8vw", sm: "5vw" } }}
        color="text.secondary"
      >
        Account Profile
      </Typography>
      <Button sx={{ textTransform: "capitalize" }}></Button>
      <Divider
        sx={{
          width: { xs: "100%", sm: "70vw" },
          mx: "auto",
          backgroundColor: "black",
        }}
      />
      <img className="profile-img" src="../images/ana.jpg" alt="img" />
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "6vw", sm: "3vw" } }}
      >
        {user.first_name} {user.last_name}
      </Typography>
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "5vw", sm: "2vw" } }}
      >
        Remaining balance: {user.funds} Euro
      </Typography>
      <Box>
        <Typography
          sx={{
            color: "text.secondary",
            mt: "10%",
            mb: { xs: "10%", sm: "5%" },
            fontSize: { xs: "5vw", sm: "2vw" },
          }}
        >
          Your previus orders:
        </Typography>
      </Box>
      <Divider />

      <Divider />
      {orders.map((item) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: "2%",
            border: "1px solid black",
            mx: 5,
            my: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "space-around ",
              width: "100%",
            }}
          >
            <Typography sx={{}}> Order number: </Typography>

            <Link onClick={(e) => shoeOrder(item.id)}>
              <Typography sx={{ cursor: "pointer" }}>
                {" "}
                {pad_with_zeroes(item.id, 6)}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Typography>Date: </Typography>

            <Typography>{item.created_at.slice(0, 16)}</Typography>
          </Box>
        </Box>
      ))}
      <Divider sx={{ mb: 5 }} />
      {instrumentsPerOrder.map((item) => (
        <ItemInCart
          desc={item.belongs_to_instrument.description}
          color={item.belongs_to_instrument.color}
          price={item.belongs_to_instrument.price}
          quantity={item.quantity}
          name={item.belongs_to_instrument.name}
          img={item.belongs_to_instrument.photo}
        ></ItemInCart>
      ))}
    </Box>
  );
};

export default Profile;
