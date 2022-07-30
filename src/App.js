import React, { useState } from "react";
import "./styles/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import { UserContext } from "./components/UserContext";
import { CartContext } from "./components/CartContext";
import Instruments from "./components/Instruments";
import Cart from './components/cart/Cart';

function App() {
  const [user, setUser] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [addToCart, setAddToCart] = useState([]);


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{addToCart, setAddToCart}}>
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

            <Route exact path="instruments" element={<Instruments />} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </Container>
        <Footer />
        </CartContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
