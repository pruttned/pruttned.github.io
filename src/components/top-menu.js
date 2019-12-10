import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link';

const Root = styled.nav`
    padding: 10px 0;
`;

const TopMenu = () => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    );
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.background}>
            <Root>
                <Link to="/">{site.siteMetadata.title}</Link>
            </Root>
        </Container>
    );
};

export default TopMenu;