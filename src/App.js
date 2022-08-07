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
import { UserContext } from "./components/UserContext";
import ChangePassword from "./components/ChangePassword";
import { CartContext } from "./components/CartContext";
import Instruments from "./components/Instruments";
import Cart from "./components/cart/Cart";
import AdminPanel from "./components/AdminPanel";

import Statistic from "./components/Statistic";
// import CartModal from "./components/cart/CartModal"

import { Container } from "@mui/material";

import { getUser } from "./api";

function App() {
  const [user, setUser] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [addToCart, setAddToCart] = useState([]);

  let token = localStorage.getItem("token");

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
    if (token) {
      handleUser();
    }
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
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
                path="/statistic"
                element={user.admin ? <Statistic /> : <div>Page404</div>}
              />
              <Route
                path="/Menu"
                element={
                  <Menu categoryId={categoryId} setCategoryId={setCategoryId} />
                }
              />

              <Route exact path="instruments" element={<Instruments />} />
              <Route path="/Cart" element={<Cart />} />
              <Route
                path="/admin"
                element={user.admin ? <AdminPanel /> : <div>Page404</div>}
              />
              <Route path="/change-password" element={<ChangePassword />} />
            </Routes>
          </Container>
          <Footer />
        </CartContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
