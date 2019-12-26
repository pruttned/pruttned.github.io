import * as React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './icon';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link';
import PersonCard from './person-card';

const Root = styled.aside`
    text-align: center;
    border-bottom: ${p => p.theme.card.bottomBorder} ;
`;

const Name = styled.div`
    grid-row: 2;
`;
const Description = styled.div`
    padding: 30px 0;
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
            <PersonCard>
                <Name>{site.siteMetadata.author}</Name>
                <Description>
                    {site.siteMetadata.authorShortDescription}
                </Description>
            </PersonCard>
        </Root>
    )
};

export default PersonAside;