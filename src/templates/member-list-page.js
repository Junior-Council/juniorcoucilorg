import React from "react";
import Main from "../layouts/Main";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";

export function MemberListTemplate() {
  return (
    <section>
      <div class="container">
        <div class="is-primary">
          <Typography variant="h1">Members</Typography>
        </div>
      </div>
    </section>
  );
}

const MembershipListPage = ({}) => {
  return (
    <Main>
      <MemberListTemplate />
    </Main>
  );
};

const MemberRow = ({ name, image }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Full Name"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Ali Connors
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default MembershipListPage;
