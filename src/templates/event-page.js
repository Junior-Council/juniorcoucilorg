import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import SimpleHeroWithSearchBox from "../components/SimpleHeroWithSearchBox";
import { getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";


export const EventPageTemplate = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
}) => {

    const heroImage = getImage(image) || image;

    return(
        <div>
            <SimpleHeroWithSearchBox heroImage={heroImage} heroTitle={title} heroSubtitle={subheading} />
        </div>
    )
}


const EventPage = ({ data }) =>{
    return(
        <Layout>
            <EventPageTemplate/>
        </Layout>
    );
};

EventPage.propTypes = {
    data: PropTypes.shape({
        markdowmRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default EventPage;

export const pageQuery = graphql`
    query EventPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "event-page" } }){
            frontmatter {
                title
                date
            }
        }
    }
`