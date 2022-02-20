import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { StaticQuery, graphql } from "gatsby";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";

import { NavItem } from "./components";

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light" && !colorInvert
              ? "../../../img/jcsmall.png"
              : "../../../img/jcsmall.png"
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box>
          <NavItem
            title={"About"}
            id={"landing-pages"}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Donate"}
            id={"company-pages"}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <EventNavItems />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Membership"}
            id={"secondary-pages"}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Contact"}
            id={"secondary-pages"}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={2}>
          <IconButton href={"https://www.facebook.com/TheJuniorCouncil/"}>
            <FacebookIcon color={"gray"} />
          </IconButton>
          <IconButton href={"https://www.instagram.com/junior_council/?hl=en"}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

function NavigationItem({ data }) {
  let pages = sortLinks(data.allMarkdownRemark.nodes);
  return <NavItem title={"Events"} id={"blog-pages"} items={pages} />;
}

function EventNavItems(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: { fields: { slug: { glob: "/event/*" } } }
          ) {
            nodes {
              frontmatter {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      `}
      render={(data) => <NavigationItem data={data} {...props} />}
    ></StaticQuery>
  );
}

function sortLinks(nodes) {
  let sortedLinks = [];
  nodes.forEach((item) => {
    let sortedItem = { title: item.frontmatter.name, href: item.fields.slug };
    sortedLinks.push(sortedItem);
  });

  return sortedLinks;
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
