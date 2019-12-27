import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import Photo from './photo';
import SocialLinks from './social-links';

const photoSize = 60;
const iconSize = 24;

const Root = styled.aside`
    display: grid;
    column-gap: 20px;
    row-gap: 5px;
    grid: 
        "photo name" min-content 
        "photo desc" min-content 
        "photo social" min-content
        / 60px auto;
    padding: ${p => p.theme.grid.gutter}px 0;
`;

const PhotoContainer = styled.div` 
    grid-area: photo;
`;
const PhotoWrap = styled.div`
    border-radius: 50%;
    overflow: hidden;
`;
const Name = styled.h2`
    grid-area: name;
    margin: 0;
    font-size: 1em;
`;
const Desc = styled.div`
    grid-area: desc;
`;
const Social = styled.div`
    grid-area: social;
    display: grid;
    column-gap: 16px;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    color: ${p => p.theme.color.secLink};
`;

const WrittenByCard = () => {
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
    const { author, authorShortDescription } = site.siteMetadata;

    return (
        <Root>
            <PhotoContainer>
                <PhotoWrap>
                    <Photo size={photoSize} />
                </PhotoWrap>
            </PhotoContainer>
            <Name>
                {author}
            </Name>
            <Desc>
                {authorShortDescription}
            </Desc>
            <Social>
                <SocialLinks iconSize={iconSize}></SocialLinks>
            </Social>
        </Root>
    )
};

export default WrittenByCard;