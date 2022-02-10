import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function EventCard(props) {
    return (
      <Card sx={{ maxWidth: 250 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{color: "white", backgroundColor: "red"}}>
            June
          </Typography>
          <Typography variant="h3" align="center" component="div" gutterBottom>
            6th
          </Typography>
          <Typography variant="h6"  align="center" gutterBottom>
          7:00-9:00 PM
          </Typography>
          <Typography variant="h6" align="center">
          123 State St.
            <br />
            Walawala, WA
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Add to Calander</Button>
        </CardActions>
      </Card>
    );
  }