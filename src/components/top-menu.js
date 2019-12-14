import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link';

const Root = styled.nav`
    display: grid;
    grid: 1fr / auto-flow;
    padding: 10px 0;
`;

const Menu = styled.div`
    justify-self: right;
    display: grid;
    grid: 1fr / auto-flow max-content;
    column-gap: 14px;
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
        <Menu>
          <Link to="/">home</Link>
          <Link to="/">about me</Link>
        </Menu>
      </Root>
    </Container>
  );
};

export default TopMenu;