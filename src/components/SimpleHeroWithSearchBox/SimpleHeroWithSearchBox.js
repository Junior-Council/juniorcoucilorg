/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

import Container from '../../components/Container';

const SimpleHeroWithSearchBox = ({heroImage, heroTitle, heroSubtitle}) => {
  const theme = useTheme();

  return (
    <Box
      minHeight={500}
      height={'auto'}
      position={'relative'}
      sx={{
        background:
          'url(https://assets.maccarianagency.com/backgrounds/img3.jpg) no-repeat center',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 1,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha(theme.palette.primary.dark, 0.6),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginTop={4}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              {heroTitle}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              {heroSubtitle}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SimpleHeroWithSearchBox;
