/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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

const Layout = ({ children }) => {
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

  const Content = styled.div`
  `

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Root>
        <TopMenu siteTitle={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          {children}
        </Content>
        <Footer />
      </Root>
    </ThemeProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
