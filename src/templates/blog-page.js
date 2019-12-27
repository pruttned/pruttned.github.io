import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container';
import styled from 'styled-components';
import Img from 'gatsby-image'
import ExtLink from '../components/ext-link';
import WrittenByCard from '../components/written-by-card';

const Content = styled.div`
  margin-top: 10px;
`;

const FeaturedImage = styled.figure`
    margin: 0;
`;

const Header = styled.div`
  display: grid;
  justify-content: left;
  grid-auto-flow: column;
  column-gap: 10px;
  font-size: 0.7em;
  margin-top: 30px;
`;

const WrittenByCardContainer = styled(Container)`
  margin-top: ${p => p.theme.grid.gutter}px;
`;
export default function Template({
  data, // injected by pageQuery
}) {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
  const { featuredImageBy, featuredImageByUrl, featuredImageSite, featuredImageSiteUrl } = frontmatter;

  return (
    <Layout title={frontmatter.title} isArticle="true" >
      <SEO title={frontmatter.title} />
      <FeaturedImage>
        <Container narrow noPadding >
          <Img fluid={featuredImgFluid} />
        </Container>
        <Container narrow contentBackground="white">
          <figcaption>Photo by <ExtLink href={featuredImageByUrl}>{featuredImageBy}</ExtLink> on <ExtLink href={featuredImageSiteUrl}>{featuredImageSite}</ExtLink></figcaption>
        </Container>
      </FeaturedImage>
      <Container narrow bottomBorder contentBackground="white">
        <Header>
          <span>{frontmatter.date}</span>
          <span>|</span>
          <span>{timeToRead} mins read</span>
        </Header>
        <Content
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
      <WrittenByCardContainer narrow bottomBorder contentBackground="white">
        <WrittenByCard></WrittenByCard>
      </WrittenByCardContainer>
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
        featuredImageBy
        featuredImageByUrl
        featuredImageSite
        featuredImageSiteUrl
      }
    }
  }
`