import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer";
<<<<<<< HEAD
=======
import { UserContext } from "./components/UserContext";
import axios from "axios";
import { CartContext } from "./components/CartContext";
>>>>>>> 39954be361aa29eccf9cc6c893574edd348bae42
import Instruments from "./components/Instruments";
import Cart from "./components/cart/Cart";
import AdminPanel from "./components/AdminPanel";

import { Container } from "@mui/material";
import { UserContext } from "./components/UserContext";
import { CartContext } from "./components/CartContext";
import { getUser } from "./api";

function App() {
  const [user, setUser] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [addToCart, setAddToCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  let token = localStorage.getItem("token");

  const handleUser = async () => {
    try {
      const res = await getUser(token);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      handleUser();
    }
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
<<<<<<< HEAD
        <CartContext.Provider value={{ addToCart, setAddToCart }}>
          <Header />
          <Container maxWidth="lg" sx={{ px: 0 }}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home categoryId={categoryId} setCategoryId={setCategoryId} />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/Sign-up" element={<Register />} />
              <Route path="/Profile" element={<Profile />} />
              <Route
                path="/Menu"
                element={
                  <Menu categoryId={categoryId} setCategoryId={setCategoryId} />
                }
              />
=======
        <button onClick={buy}>buy</button>;
      <CartContext.Provider value={{addToCart, setAddToCart, totalQuantity, setTotalQuantity}}>
        <Header />
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home categoryId={categoryId} setCategoryId={setCategoryId} />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Sign-up" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
            <Route
              path="/Menu"
              element={
                <Menu categoryId={categoryId} setCategoryId={setCategoryId} />
              }
            />
>>>>>>> 39954be361aa29eccf9cc6c893574edd348bae42

              <Route exact path="instruments" element={<Instruments />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </Container>
          <Footer />
        </CartContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
