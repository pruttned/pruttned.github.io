import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import media from "styled-media-query";
import { Collapse } from 'react-collapse'
import Container from './container';
import Link from './link';
import MenuButton from './menu-button';

const Root = styled.nav`
    display: grid;
    grid: 
      "logo burger" max-content
      "menu menu" max-content
      / max-content auto;
    align-items: center;
    padding: ${p => p.theme.grid.gutter}px 0;
    ${media.greaterThan('medium')`
      grid: 
        "logo menu" max-content
        / max-content auto;
      padding: 10px 0;
    `}
`;

const Logo = styled(Link)`
    grid-area: logo;
`;

const Menu = styled.div`
    display: none;
    grid-area: menu;
    justify-self: right;
    grid: 1fr / auto-flow max-content;
    column-gap: 14px;
    
    ${media.greaterThan('medium')`
      display: grid;
    `}
`;
const MobMenu = styled.div`
    grid-area: menu;

    ${media.greaterThan('medium')`
      display: none;
    `}
    .ReactCollapse--content{
    display: grid;
    }
    .ReactCollapse--collapse {
      transition: height 500ms;
    }
`;

const MenuButtonStyled = styled(MenuButton)`
  grid-area: burger;
  justify-self: right;
  ${media.greaterThan('medium')`
      display: none;
  `}
`;

const MenuLinks = () => (
  <>
    <Link to="/">home</Link>
    <Link to="/about-me">about me</Link>
  </>
)


const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <div>
      <Container background={themeContext.color.background}>
        <Root>
          <Logo to="/">{site.siteMetadata.title}</Logo>
          <MenuButtonStyled onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} size="25"></MenuButtonStyled>
          <MobMenu >
            <Collapse isOpened={isMenuOpen}>
              <MenuLinks />
            </Collapse>
          </MobMenu>
          <Menu>
            <MenuLinks />
          </Menu>
        </Root>
      </Container>
    </div >
  );
};

export default MainNav;