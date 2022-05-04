import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FeaturesWithLearnMoreLink = ({ NewsItem, EventItem, BlogItem }) => {

  console.log("grid: ", NewsItem, BlogItem);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container spacing={12} justifyContent="center">
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >

          <ListItemText
            primary="Recent News"
            secondary={NewsItem.frontmatter.title}
            primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
            secondaryTypographyProps={{ variant: "h6" }}
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 700,
              },
              margin: 0,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 2,
              marginTop: 2,
            }}
          >
            <GatsbyImage image={getImage(NewsItem.frontmatter.featuredimage)} alt="" />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box marginTop={1}>
            <Button
              endIcon={
                <Box
                  component={"svg"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </Box>
              }
            >
              Learn More
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListItemText
            primary="Upcoming Events"
            secondary={EventItem.frontmatter.name}
            primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
            secondaryTypographyProps={{ variant: "h6" }}
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 700,
              },
              margin: 0,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <GatsbyImage image={getImage(EventItem.frontmatter.featuredimage)} alt="" />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box marginTop={1}>
            <Button
              endIcon={
                <Box
                  component={"svg"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </Box>
              }
            >
              Learn More
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListItemText
            primary="Blog Posts"
            secondary={BlogItem.frontmatter.title}
            primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
            secondaryTypographyProps={{ variant: "h6" }}
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 700,
              },
              margin: 0,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 2,
            }}
          >
            <GatsbyImage image={getImage(BlogItem.frontmatter.featuredimage)} alt="" />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box marginTop={1}>
            <Button
              endIcon={
                <Box
                  component={"svg"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </Box>
              }
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const LearnMoreLinksComponent = () => {
  return (<StaticQuery
    query={graphql`
      {
        news: markdownRemark(frontmatter: {templateKey: {eq: "news-post"}}) {
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
            date
          }
        }
        blog: markdownRemark(frontmatter: {templateKey: {eq: "blog-post"}}) {
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
            date
          }
        }
        event: markdownRemark(frontmatter: {templateKey: {eq: "event-page"}}) {
          frontmatter {
            date
            subheading
            hero_image {
              childImageSharp {
                gatsbyImageData
                fluid {
                  src
                }
              }
            }
            name
          }
          fields {
            slug
          }
        }
      }
    `}
    render={data => <FeaturesWithLearnMoreLink NewsItem={data.news} BlogItem={data.blog} EventItem={data.event} />}
  ></StaticQuery>);
}

export default LearnMoreLinksComponent;