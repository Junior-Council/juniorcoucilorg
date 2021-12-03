import * as React from "react";
import Typography from "@mui/material/Typography";
import HeroLayout from "./HeroLayout";
import Container from "@mui/material/Container";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <Container maxWidth='xl'>
      <img
        style={{
          height: "50%",
          backgroundPosition: "center",
          backgroundRepeat: "noRepeat",
          backgroundSize: "cover",
          position: "relative",
        }}
        src={backgroundImage}
        alt="increase priority"
      />
      <div style={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
            Upgrade your Sundays
        </Typography>
        <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
            Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
        </Typography>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
            Discover the experience
        </Typography>
      </div>
    </Container>
    
  );
}
