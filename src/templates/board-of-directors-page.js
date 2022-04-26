import React from "react";
import Main from "../layouts/Main";
import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const BoardOfDirectorsTemplate = () => {
  return (
    <section>
      <div class="container">
        <div class="container is-primary">
          <Typography variant="h2">Board Of Directors</Typography>
          <div
            class="is-primary is-mobile"
            style={{ marginTop: "60px", marginBottom: "60px" }}
          >
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={4} key={"1"}>
                  <DirectorCard />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DirectorCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="title" component="div">
          first_name
        </Typography>
        <Typography gutterBottom variant="subtitle" component="div">
          TitleName
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

const BoardOfDirectorsPage = ({ data }) => {
  console.log("ddddddd: ", data);
  return (
    <Main>
      <BoardOfDirectorsTemplate />
    </Main>
  );
};

export default BoardOfDirectorsPage;

export const directorsQuery = graphql`
  {
    markdownRemark(
      frontmatter: { templateKey: { eq: "board-of-directors-page" } }
    ) {
      frontmatter {
        members {
          first_name
          last_name
          image
          position
        }
      }
    }
  }
`;
