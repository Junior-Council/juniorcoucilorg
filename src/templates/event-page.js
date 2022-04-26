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
import EventCard from "../components/EventCard";
import GallerySection from "../components/GallerySection";

export const EventPageTemplate = ({
  image,
  title,
  name,
  subheading,
  html,
  date,
  streetAddress,
  heroImage,
  city,
  galleryImages,
}) => {
  return (
    <div>
      <SimpleHero
        heroImage={heroImage}
        heroTitle={name}
        heroSubtitle={subheading}
      />
      <EventDescription
        html={html}
        eventDate={date}
        streetAddress={streetAddress}
        city={city}
      />
      <GallerySection images={galleryImages} />
    </div>
  );
};

const EventPage = ({ data }) => {
  return (
    <Main>
      <EventPageTemplate
        heroImage={
          data.markdownRemark.frontmatter.hero_image.childImageSharp.fluid
        }
        galleryImages={data.markdownRemark.frontmatter.galleryImages}
        title={data.title}
        name={data.markdownRemark.frontmatter.name}
        html={data.markdownRemark.html}
        date={data.markdownRemark.frontmatter.date}
        streetAddress={data.markdownRemark.frontmatter.street_address}
        subheading={data.markdownRemark.frontmatter.subheading}
        city={data.markdownRemark.frontmatter.city}
      />
    </Main>
  );
};

const EventDescription = ({ html, eventDate, streetAddress, city }) => {
  return (
    <div className="section">
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} sx={{ alignItems: "center" }}>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </Grid>
        <Grid item xs={6} md={4}>
          <EventCard
            eventDate={eventDate}
            streetAddress={streetAddress}
            city={city}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EventPage;

export const pageQuery = graphql`
  query getEvent($slug: String) {
    markdownRemark(fields: { slug: { glob: $slug } }) {
      html
      frontmatter {
        date
        description
        subheading
        hero_image {
          childImageSharp {
            gatsbyImageData
            fluid {
              src
            }
          }
        }
        galleryImages {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        heading
        name
        path
        title
        street_address
        address
        city
        state
      }
      fields {
        slug
      }
    }
  }
`;
