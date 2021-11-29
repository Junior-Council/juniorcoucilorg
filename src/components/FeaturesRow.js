import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export default function FeaturesRow({gridItems}) {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {gridItems.map((index, item) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                        xs=2
                        </Grid>
                    ))}
            </Grid>
        </Container>
    </React.Fragment>
  );
}