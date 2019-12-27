import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import { TwitterIcon, LinkedinIcon, GithubIcon } from './icon';
import Link from './link';

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
                <Link>
                    <TwitterIcon size={iconSize} />
                </Link>
                <Link>
                    <GithubIcon size={iconSize} />
                </Link>
                <Link>
                    <LinkedinIcon size={iconSize} />
                </Link>
            </Root>
        </Container>
    );
};

export default Footer;