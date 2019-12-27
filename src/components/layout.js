import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme';
import GlobalStyle from './global-style'
import Header from './header';
import Footer from './footer';
import MainNav from './main-nav';

const Layout = ({ children, title, isArticle }) => {

  const Root = styled.div`
   display: grid;
   grid-template-rows: max-content 1fr max-content;
   min-height: 100vh;
  `;

  const Content = styled.div`
    padding: ${p => p.theme.grid.gutter}px 0;
  `

  const Main = (isArticle ? styled.article : styled.div)`
  `;


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        <MainNav />
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
