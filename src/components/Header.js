import { React, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Header.css";

const pages = ["Home", "Menu", "About us", "Contact"];

const Header = () => {
  const [burger, setBurger] = useState(null);

  const handleOpenNavMenu = (event) => {
    setBurger(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setBurger(null);
  };
  const changeStyleOnActiveMenuItem = ({ isActive }) => ({
    color: isActive ? "orange" : "",
    fontWeight: isActive ? "bold" : "",
  });
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {burger ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={burger}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={Boolean(burger)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                style: {
                  width: 150,
                },
              }}
            >
              {pages.concat(["Login", "Sign up"]).map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "#1976d2",
                      fontWeight: isActive ? "bold" : "",
                    })}
                    to={
                      page === "Sign up"
                        ? "Sign-up"
                        : page === "Home"
                        ? "/"
                        : page === "About us"
                        ? "About-us"
                        : page
                    }
                    className="menu-item"
                  >
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <NavLink to="/">
            <img src="../guitarLogo.png" width="80vw" alt="logo-img" />
          </NavLink>

          <Box sx={{ width: "60%", display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={
                  page === "About us"
                    ? "About-us"
                    : page === "Home"
                    ? "/"
                    : page
                }
                key={page}
                className="menu-item"
                onClick={handleCloseNavMenu}
                style={changeStyleOnActiveMenuItem}
              >
                {page}
              </NavLink>
            ))}
          </Box>
          <Box
            sx={{
              width: "30%",
              justifyContent: "end",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <NavLink
              to={"Login"}
              className="login-signup"
              style={changeStyleOnActiveMenuItem}
            >
              Login
            </NavLink>
            <NavLink
              to={"Sign-up"}
              className="login-signup"
              style={changeStyleOnActiveMenuItem}
            >
              Sign up
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
