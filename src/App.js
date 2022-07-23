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

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Sign-up" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Menu" element={<Menu />} />
          </Routes>
        </Container>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
