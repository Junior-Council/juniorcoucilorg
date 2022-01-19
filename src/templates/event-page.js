import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import SimpleHeroWithSearchBox from "../components/SimpleHeroWithSearchBox";


export const EventPageTemplate = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
}) => {
    return(
        <div>
            <SimpleHeroWithSearchBox heroImage={heroImage} heroTitle={title} heroSubtitle={subheading} />
        </div>
    )
}