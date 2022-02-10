import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import SimpleHero from "../components/SimpleHero";
import { getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Main from "../layouts/Main";

export const EventPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <SimpleHero
        heroImage={heroImage}
        heroTitle={title}
        heroSubtitle={subheading}
      />
    </div>
  );
};

const EventPage = ({ data }) => {
  return (
    <Main>
      <EventPageTemplate />
    </Main>
  );
};

export default EventPage;

export const pageQuery = graphql`
  query getevents($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { glob: $slug } } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          feature_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        fields {
          slug
        }
        html
      }
    }
  }
`;
