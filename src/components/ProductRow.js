import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function ProductRow(props) {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden", paddingBottom: "50px" }}>
      <Stack spacing={5}>
        <Grid item sx={item}>
          <Box
            component="img"
            src="/static/themes/onepirate/productValues1.svg"
            alt="suitcase"
            sx={{ height: 55 }}
          />
        </Grid>
        <Grid sx={item}>
          <Typography variant="h6" sx={{ my: 5 }}>
            The best luxury hotels
          </Typography>
          <Typography variant="h5">
            {
              "From the latest trendy boutique hotel to the iconic palace with XXL pool"
            }

            {
              ", go for a mini-vacation just a few subway stops away from your home."
            }
          </Typography>
        </Grid>
        <Box item sx={item}>
          <Button variant="contained">Contained</Button>
        </Box>
      </Stack>
      <Stack spacing={5}>
        <Grid item sx={item}>
          <Box
            component="img"
            src="/static/themes/onepirate/productValues1.svg"
            alt="suitcase"
            sx={{ height: 55 }}
          />
        </Grid>
        <Grid item sx={item}>
          <Typography variant="h6" sx={{ my: 5 }}>
            The best luxury hotels
          </Typography>
          <Typography variant="h5">
            {
              "From the latest trendy boutique hotel to the iconic palace with XXL pool"
            }

            {
              ", go for a mini-vacation just a few subway stops away from your home."
            }
          </Typography>
        </Grid>
        <Box item sx={item}>
          <Button variant="contained">Contained</Button>
        </Box>
      </Stack>
      <Stack spacing={5}>
        <Grid item sx={item}>
          <Box
            component="img"
            src="/static/themes/onepirate/productValues1.svg"
            alt="suitcase"
            sx={{ height: 55 }}
          />
        </Grid>
        <Grid item sx={item}>
          <Typography variant="h6" sx={{ my: 5 }}>
            The best luxury hotels
          </Typography>
          <Typography variant="h5">
            {
              "From the latest trendy boutique hotel to the iconic palace with XXL pool"
            }

            {
              ", go for a mini-vacation just a few subway stops away from your home."
            }
          </Typography>
        </Grid>
        <Box item sx={item}>
          <Button variant="contained">Contained</Button>
        </Box>
      </Stack>
    </Box>
  );
}
