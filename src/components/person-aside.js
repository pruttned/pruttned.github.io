import * as React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './icon';
import theme from '../theme';
import { useStaticQuery, graphql } from 'gatsby';

const photoSize = 140;
const iconSize = 40;

const Container = styled.aside`
    background: ${theme.backgroundColor};
    text-align: center;
    max-width: 300px;
    position: relative;
    padding: ${photoSize / 2 + 10 + theme.gutterSize}px 20px 20px 20px;
`;

const PhotoContainer = styled.div`
    position:absolute;    
    top: -${photoSize / 2 + theme.gutterSize}px;
    left: calc(50% - ${photoSize / 2 + theme.gutterSize}px);
    border: solid ${theme.gutterSize}px ${theme.bodyBackgroundColor};
    border-radius: 50%; 
    overflow:hidden;
`;
const Name = styled.div`
    grid-row: 2;
`;
const Description = styled.div`
    grid-row: 3;
    padding: 30px 0;
`;
const Social = styled.div`
    grid-row: 4;
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 20px;
    justify-content: center;
`;


const PersonAside = () => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                author
                authorShortDescription
              }
            }
          }
        `
    );

    return (
        <Container>
            <PhotoContainer>
                <Photo size={photoSize} />
            </PhotoContainer>
            <Name>{site.siteMetadata.author}</Name>
            <Description>
                {site.siteMetadata.authorShortDescription}
            </Description>
            <Social>
                <FacebookIcon size={iconSize} />
                <GithubIcon size={iconSize} />
                <LinkedinIcon size={iconSize} />
            </Social>
        </Container>
    )
};

export default PersonAside;