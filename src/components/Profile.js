import { React, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import ItemInCart from "./ItemInCart";
import "../styles/Profile.css";
import { Button, Typography, Box, Divider, Link, Avatar } from "@mui/material";
import { Link as LinkR } from "react-router-dom";
import { getOrders } from "../api";
import { getOneOrder, getUser } from "../api";
import { pad_with_zeroes } from "../utils";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [instrumentsPerOrder, setInstrumentsPerOrder] = useState([]);
  let token = localStorage.getItem("token");

  const handleOrder = async () => {
    const res = await getOrders(token);
    setOrders(res.data.data);
    console.log(res);
  };

  const showOrder = async (id) => {
    const res = await getOneOrder(token, id);

    setInstrumentsPerOrder(res.data.data.has_many_baskets);
  };
  const handleUser = async () => {
    try {
      const res = await getUser(token);
      setUser(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleOrder();
    handleUser();
  }, []);

  return (
    <Box className="profile">
      <Typography
        sx={{ mb: "2vw", fontSize: { xs: "8vw", sm: "4vw" } }}
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
      <Box className="profile-img" sx={{ mx: "auto", mt: 10 }}>
        <Avatar
          sx={{
            mx: "auto",
            mt: "5%",
            width: { xs: "10vw", sm: "6vw" },
            height: { xs: "10vw", sm: "6vw" },
          }}
          src="/broken-image.jpg"
        />
      </Box>

      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "6vw", sm: "2.5vw" } }}
      >
        {user.first_name} {user.last_name}
      </Typography>
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "4vw", sm: "1.5vw" } }}
      >
        Remaining balance: {user.funds} €
      </Typography>

      <Box sx={{ mt: 2 }}>
        <LinkR
          to="/change-password"
          style={{
            color: "#42a5f5",

            textDecoration: "none",
          }}
        >
          Change password
          <EditSharpIcon sx={{ color: "text.secondary", ml: 1 }} />
        </LinkR>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "text.secondary",
            mt: "10%",
            mb: { xs: "10%", sm: "5%" },
            fontSize: { xs: "3vw", sm: "1.5vw" },
            textDecoration: "none",
          }}
        >
          {orders.length > 0 ? (
            "Your previus orders:"
          ) : (
            <LinkR
              to="/shop"
              style={{
                color: "#42a5f5",

                textDecoration: "none",
              }}
            >
              You dont have orders yet, please go to shop.
            </LinkR>
          )}
        </Typography>
      </Box>
      <Divider />

      <Divider />
      {orders.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: { sm: "space-around" },
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

            <Link onClick={(e) => showOrder(item.id)}>
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
