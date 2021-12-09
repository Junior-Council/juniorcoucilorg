import React from "react";
import { Link } from "gatsby";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { getImage } from "gatsby-plugin-image";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import Stack from '@mui/material/Stack';

const pages = ["About Us", "Donate", "Events", "Membership", "Contact"];
const settings = ["About Us", "Donate", "Events", "Membership", "Contact"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Avatar alt="logo" src="../img/jcsmall.png" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleOpenNavMenu}
                style={{ color: "black" }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Menu
              sx={{ mt: "45px" }}
              id="menu--links"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Avatar alt="logo" src="../img/jcsmall.png" />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <SocialMediaRow />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function SocialMediaRow() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <div>
        <a title="facebook" href="https://facebook.com">
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: "2em", height: "2em" }}
          />
        </a>
      </div>
      <div>
        <a title="instagram" href="https://instagram.com">
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: "2em", height: "2em" }}
          />
        </a>
      </div>
      <div>
        <a title="vimeo" href="https://vimeo.com">
          <img
            src={vimeo}
            alt="Vimeo"
            style={{ width: "2em", height: "2em" }}
          />
        </a>
      </div>
    </Stack>
  );
}
