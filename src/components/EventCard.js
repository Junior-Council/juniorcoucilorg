import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

export default function EventCard({ eventDate, streetAddress, city }) {
  const eventDateTime = moment(eventDate);

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "white", backgroundColor: "red" }}
        >
          {eventDateTime.format("MMMM")}
        </Typography>
        <Typography variant="h3" align="center" component="div" gutterBottom>
          {eventDateTime.format("Do")}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          {eventDateTime.format("h:mm a")}
        </Typography>
        <Typography variant="h6" align="center">
          {streetAddress}
          <br />
          {city}, IL
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Add to Calander</Button>
      </CardActions>
    </Card>
  );
}
