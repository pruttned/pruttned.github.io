import * as React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './icon';
import { useStaticQuery, graphql } from 'gatsby';
import { SecLink } from './link';

const photoSize = 140;
const iconSize = 40;

const Root = styled.aside`
    background: ${p => p.theme.color.background};
    text-align: center;
    max-width: 300px;
    position: relative;
    padding: ${p => photoSize / 2 + 10 + p.theme.grid.gutter}px 20px 20px 20px;
    border-bottom: ${p => p.theme.card.bottomBorder} ;
`;

const PhotoContainer = styled.div`
    position:absolute;    
    top: -${p => photoSize / 2 + p.theme.grid.gutter}px;
    left: calc(50% - ${p => photoSize / 2 + p.theme.grid.gutter}px);
    border: solid ${p => p.theme.grid.gutter}px ${props => props.theme.color.bodyBackground};
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
        <Root>
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
        </Root>
    )
};

export default PersonAside;