import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from '../components/link'
import Container from '../components/container'

const Root = styled.div`
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Root>
      <Container narrow>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <p>Try it <Link to='/' inText>here</Link> instead.</p>
      </Container>
    </Root>
  </Layout>
)

export default NotFoundPage
