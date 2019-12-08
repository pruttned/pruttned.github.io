import * as React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './icon';
import { useStaticQuery, graphql } from 'gatsby';
import { SecLink } from './link';

const photoSize = 140;
const iconSize = 40;

const Container = styled.aside`
    background: ${props => props.theme.backgroundColor};
    text-align: center;
    max-width: 300px;
    position: relative;
    padding: ${props => photoSize / 2 + 10 + props.theme.gutterSize}px 20px 20px 20px;
    border-bottom: ${props => props.theme.bottomBorder} ;
`;

const PhotoContainer = styled.div`
    position:absolute;    
    top: -${props => photoSize / 2 + props.theme.gutterSize}px;
    left: calc(50% - ${props => photoSize / 2 + props.theme.gutterSize}px);
    border: solid ${props => props.theme.gutterSize}px ${props => props.theme.bodyBackgroundColor};
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
                <SecLink>
                    <FacebookIcon size={iconSize} />
                </SecLink>
                <SecLink>
                    <GithubIcon size={iconSize} />
                </SecLink>
                <SecLink>
                    <LinkedinIcon size={iconSize} />
                </SecLink>
            </Social>
        </Container>
    )
};

export default PersonAside;