import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Instruments from "./components/Instruments";
import AdminPanel from "./components/AdminPanel";
import { getUser } from "./api";

const baseUrl = "http://localhost:8000/api";

function App() {
  const [user, setUser] = useState("");
  const [categoryId, setCategoryId] = useState(0);
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

  const buy = async () => {
    const res = await axios.post(
      `${baseUrl}/buy`,
      {
        items: {
          11: 1,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <button onClick={buy}>buy</button>;
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
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Container>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
