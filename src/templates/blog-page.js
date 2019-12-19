import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container';
import theme from '../theme';
import styled from 'styled-components';
import Img from 'gatsby-image'

const Content = styled.div`
`;

export default function Template({
  data, // injected by pageQuery
}) {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout title={frontmatter.title} isArticle="true" >
      <SEO title={frontmatter.title} />
      <Container background={theme.color.background} narrow>
        <Img fluid={featuredImgFluid} />
        <div>{timeToRead}mins</div>
        <div>{frontmatter.date}</div>
        <Content
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`