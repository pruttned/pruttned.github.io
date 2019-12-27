import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import SocialLinks from './social-links';

const iconSize = 24;

const Root = styled.aside`
    display: grid;
    grid-template-columns: repeat(4, auto);
    color: ${p => p.theme.color.invTextLight};
    padding: 10px 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
`;

const Footer = () => {
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
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.invBackground}>
            <Root>
                <div>© {site.siteMetadata.author} </div>
                <SocialLinks iconSize={iconSize}></SocialLinks>
            </Root>
        </Container>
    );
};

export default Footer;