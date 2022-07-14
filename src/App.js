import "./styles/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign-up" element={<Register />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
