import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, ThemeContext } from 'styled-components'
import { Reset } from 'styled-reset'

import theme from '../theme';
import GlobalStyle from './global-style'
import Header from './header';
import PersonAside from './person-aside';
import Footer from './footer';
import TopMenu from './top-menu';

const Layout = ({ children, title, isArticle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Root = styled.div`
   display: grid;
   grid-template-rows: auto auto 1fr auto;
   min-height: 100vh;
  `;

  const Content = styled.div``

  const Main = (isArticle ? styled.article : styled.div)`
    display: contents;
  `;


  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Root>
        <TopMenu />
        <Main>
          <Header title={title} />
          <Content>
            {children}
          </Content>
        </Main>
        <Footer />
      </Root>
    </ThemeProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
