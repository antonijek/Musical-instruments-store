import { React, useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CartContext } from "./CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@material-ui/core";
import Cart from "../components/cart/Cart";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Header.css";

const menuItems = ["Home", "Menu", "About us", "Contact"];
const menuItemsSmallScreens = [
  "Home",
  "Menu",
  "About us",
  "Contact",
  "Login",
  "Sign up",
];

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [burger, setBurger] = useState(null);
  const [menu, setMenu] = useState(menuItemsSmallScreens);
  const { addToCart } = useContext(CartContext);

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
  const logout = () => {
    setUser("");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    user
      ? setMenu(
          [
            user.verified === 1 ? (
              <NavLink
                to={"Cart"}
                className="login-signup"
                style={changeStyleOnActiveMenuItem}
              >
                <ShoppingCartIcon sx={{ color: "gray" }} />
              </NavLink>
            ) : null,
            <Avatar
              src="../images/Ana.jpg"
              sx={{ width: 30, height: 30, ml: 0 }}
            />,
            "Logout",
          ].concat(menuItems)
        )
      : setMenu(menuItemsSmallScreens);
  }, [user]);

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
              {menu.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "#1976d2",
                      fontWeight: isActive ? "bold" : "",
                    })}
                    to={
                      page === "Sign up"
                        ? "sign-up"
                        : page === "Home"
                        ? "/"
                        : page === "About us"
                        ? "about-us"
                        : page === "Logout"
                        ? "/login"
                        : page
                    }
                    className="menu-item"
                  >
                    {page === "Logout" ? (
                      <p style={{ margin: 0, padding: 0 }} onClick={logout}>
                        Logout
                      </p>
                    ) : (
                      page
                    )}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <NavLink to="/">
            <img src="../guitarLogo.png" width="80vw" alt="logo-img" />
          </NavLink>

          <Box sx={{ width: "60%", display: { xs: "none", sm: "flex" } }}>
            {menuItems.map((page) => (
              <NavLink
                to={
                  page === "About us"
                    ? "about-us"
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
            {user ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <NavLink
                  to={"Login"}
                  className="login-signup"
                  style={changeStyleOnActiveMenuItem}
                  onClick={logout}
                >
                  Logout
                </NavLink>
                <NavLink to={"/Profile"}>
                  <Avatar
                    sx={{ ml: 2, width: 30, height: 30 }}
                    src="../images/Ana.jpg"
                  />
                </NavLink>
                {user.verified === 1 ? (
                  <NavLink
                    to={"Cart"}
                    className="login-signup"
                    style={changeStyleOnActiveMenuItem}
                  >
                    <Badge
                      overlap="rectangular"
                      badgeContent={addToCart.length}
                      color="error"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </NavLink>
                ) : null}
              </Box>
            ) : (
              <>
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
                </NavLink>{" "}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
