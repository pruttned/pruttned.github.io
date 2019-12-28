import * as React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import ButtonLink from './button-link';

const Root = styled.article`
    display:grid;
    row-gap: 15px;
    grid: 
      "img img img img" 200px
      ". heading heading ." max-content
      ". excerpt excerpt ." max-content
      ". btn date ." max-content
      / 10px max-content 1fr 10px; 
    background: ${p => p.theme.color.background};
    padding-bottom: 10px;
    border-bottom: ${p => p.theme.card.bottomBorder} ;
    box-shadow: ${p => p.theme.card.boxShadow};
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
    align-self: end;
    font-size: 0.7em;
    text-align: right;
`;
const ReadMoreBtn = styled(ButtonLink)`
    grid-area: btn;
    align-self: end;
`;

const ArticleCard = ({ title, excerpt, date, featuredImageFluid, path }) => {
    return (
        <Root>
            <FeaturedImage fluid={featuredImageFluid}></FeaturedImage>
            <Heading>{title}</Heading>
            <Excerpt>{excerpt}</Excerpt>
            <Date>{date}</Date>
            <ReadMoreBtn to={path}>Continue reading</ReadMoreBtn>
        </Root>
    );
}


export default ArticleCard;