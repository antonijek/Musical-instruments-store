import { React, useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CartContext } from "./CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@material-ui/core";
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

const menuItems = ["home", "shop", "about us", "contact"];
const menuItemsSmallScreens = [
  "home",
  "shop",
  "about us",
  "contact",
  "login",
  "sign up",
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
                to={"cart"}
                className="login-signup"
                style={changeStyleOnActiveMenuItem}
              >
                <ShoppingCartIcon sx={{ color: "gray" }} />
              </NavLink>
            ) : null,
            <NavLink to={"/profile"}>
              <Avatar
                src="/broken-image.jpg"
                sx={{ width: 30, height: 30, ml: 0 }}
              />
            </NavLink>,
            "logout",
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
              {menu.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "#1976d2",
                      fontWeight: isActive ? "bold" : "",
                    })}
                    to={
                      page === "sign up"
                        ? "sign-up"
                        : page === "home"
                        ? "/"
                        : page === "about us"
                        ? "about-us"
                        : page === "logout"
                        ? "/login"
                        : page
                    }
                    className="menu-item"
                  >
                    {page === "logout" ? (
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
            {menuItems.map((page, i) => (
              <NavLink
                to={
                  page === "about us"
                    ? "about-us"
                    : page === "home"
                    ? "/"
                    : page
                }
                key={i}
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
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            {user && user.admin === 1 ? (
              <NavLink
                to="/admin"
                className="login-signup"
                style={changeStyleOnActiveMenuItem}
              >
                Admin
              </NavLink>
            ) : null}

            {user ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <NavLink
                  to={"login"}
                  className="login-signup"
                  style={changeStyleOnActiveMenuItem}
                  onClick={logout}
                >
                  Logout
                </NavLink>
                <NavLink to={"/profile"}>
                  <Avatar
                    sx={{ ml: 2, width: 30, height: 30 }}
                    src="../images/Ana.jpg"
                  />
                </NavLink>
                {user.verified === 1 ? (
                  <NavLink
                    to={"cart"}
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
                  to={"login"}
                  className="login-signup"
                  style={changeStyleOnActiveMenuItem}
                >
                  Login
                </NavLink>
                <NavLink
                  to={"sign-up"}
                  className="login-signup"
                  style={changeStyleOnActiveMenuItem}
                >
                  Sign up
                </NavLink>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
