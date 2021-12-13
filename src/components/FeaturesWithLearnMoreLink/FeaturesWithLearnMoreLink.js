import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';


import Container from '../../components/Container';

const mock = [
  {
    title: 'Coworking communities',
    subtitle:
      'Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.',
  },
  {
    title: 'Flexible contracts',
    subtitle:
      'Stay as little as 3 months with rolling contracts. Like it here? This is your space, so stay as long as you want.',
  },
  {
    title: 'All inclusive',
    subtitle:
      'Monthly fee covers everything you need hassle free. Keep cool and focus on what matters to you.',
  },
  {
    title: 'Hospitality service',
    subtitle:
      '24/7 support. No more hidden prices. It is your workingplace, playground, relax room.',
  },
];

const FeaturesWithLearnMoreLink  = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={3}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{display: 'flex', justifyContent: "center", marginBottom: 2}}>
              <img src='https://via.placeholder.com/200'></img>
            </Box>
            <ListItemText
              primary={item.title}
              secondary={item.subtitle}
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{ variant: 'subtitle1' }}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                },
                margin: 0,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box marginTop={1}>
              <Button
                endIcon={
                  <Box
                    component={'svg'}
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
        ))}
      </Grid>
    </Container>
  );
};


function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FeaturesWithLearnMoreLink;
