import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Main from "../layouts/Main";
import SimpleHero from "../components/SimpleHero";
import FeaturesWithLearnMoreLink from "../components/FeaturesWithLearnMoreLink";

// eslint-disable-next-line
export const IndexPageTemplate = ({ title, heroImage, subheading, intro }) => {
  return (
    <div>
      <SimpleHero
        heroImage={heroImage}
        heroTitle={title}
        heroSubtitle={subheading}
      />
      <section>
        <div>
          <div className="section">
            <div>
              <FeaturesWithLearnMoreLink gridItems={intro.blurbs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Main>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        heroImage={frontmatter.hero_image.childImageSharp.fluid}
      />
    </Main>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        hero_image {
          childImageSharp {
            gatsbyImageData
            fluid {
              src
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
            title
          }
          heading
          description
        }
      }
    }
  }
`;
