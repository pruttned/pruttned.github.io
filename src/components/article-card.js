import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './icon';
import Link from './link';
import Img from 'gatsby-image'


const Root = styled.article`
    display:grid;
    row-gap: 15px;
    grid: 
      "img img img img" 100px
      ". heading heading ." max-content
      ". excerpt excerpt ." max-content
      ". btn date ." max-content
      / 10px 1fr 1fr 10px; 
    background: ${p => p.theme.color.background};
`;

const FeaturedImage = styled(Img)`
    overflow:hidden;
    grid-area: img;
`;

const Heading = styled.h2`
    grid-area: heading;
    margin: 0;
`;

const Excerpt = styled.div`
    grid-area: excerpt;
`;
const Date = styled.div`
    grid-area: date;
    justify-self: right;
`;

const ArticleCard = ({ title, excerpt, date, featuredImageFluid }) => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Root>
            <FeaturedImage fluid={featuredImageFluid}></FeaturedImage>
            <Heading>{title}</Heading>
            <Excerpt>{excerpt}</Excerpt>
            <Date>{date}</Date>
        </Root>
    );
}


export default ArticleCard;