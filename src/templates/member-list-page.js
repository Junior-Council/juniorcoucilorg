import React from "react";
import Main from "../layouts/Main";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { graphql } from "gatsby";

export function MemberListTemplate({ members }) {
  return (
    <section>
      <div class="container">
        <div class="container is-primary">
          <Typography variant="h1">Members</Typography>
          <div class="is-primary is-mobile" style={{ marginTop: "60px" }}>
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {members.map((member, index) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <MemberRow member={member} />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MemberRow = ({ member }) => {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar
          alt={`${member.first_name} ${member.last_name}`}
          src={member.image}
        />
      </ListItemAvatar>
      <ListItemText
        primary={`${member.first_name} ${member.last_name}`}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {member.position}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
const MembershipListPage = ({ data }) => {
  return (
    <Main>
      <MemberListTemplate members={data.markdownRemark.frontmatter.members} />
    </Main>
  );
};

export default MembershipListPage;

export const membersQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "member-list-page" } }) {
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
