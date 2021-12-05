import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import Home from "@mui/icons-material/Home";
import MuiNextLink from "@components/MuiNextLink";
import { navLinks } from "configs/data";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
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
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
