import { MenuItem, Select, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import Home from "@mui/icons-material/Home";
import { TheaterComedy } from "@mui/icons-material";
import MuiNextLink from "@components/MuiNextLink";
import { navLinks } from "configs/data";
import { useContext, useEffect } from "react";
import { Store } from "utils/Store";
import Cookies from "js-cookie";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const whiteSelect = styled;
const Header = () => {
  useEffect(() => {
    const savedTheme =
      Cookies.get("themeName") !== undefined
        ? Cookies.get("themeName")
        : "default";
    dispatch({ type: "CHANGE_THEME", payload: savedTheme });
  }, []);

  const changeTheme = () => {
    const newTheme = themeName === "default" ? "pink" : "default";
    dispatch({ type: "CHANGE_THEME", payload: newTheme });
  };

  const { state, dispatch } = useContext(Store);
  const { themeName } = state;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <IconButton edge="start" aria-label="home">
              <MuiNextLink href="/" activeClassName="active" to="/">
                <Home
                  sx={{ color: (theme) => theme.palette.common.white }}
                  fontSize="large"
                />
              </MuiNextLink>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="change-theme"
              onClick={changeTheme}
            >
              <MuiNextLink href="/" activeClassName="active" to="/">
                <TheaterComedy
                  sx={{ color: (theme) => theme.palette.common.white }}
                  fontSize="large"
                />
              </MuiNextLink>
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
