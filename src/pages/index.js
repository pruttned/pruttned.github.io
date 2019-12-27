import React from "react"
import styled from 'styled-components';
import media from "styled-media-query";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCardList from "../components/article-card-list"
import PersonAside from "../components/person-aside"
import Container from "../components/container";

const Root = styled.div`
  display: grid;
  ${media.greaterThan('medium')`
    grid: 1fr / 300px auto;
    column-gap: ${p => p.theme.grid.gutter}px;
    padding: 0 ${p => p.theme.grid.gutter}px;
  `}
`;

//also to keep height of actual aside
const PersonAsideWrap = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`;

export default function IndexPage({ data }) {

  const items = data.allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    path: e.node.frontmatter.path,
    date: e.node.frontmatter.date,
    excerpt: e.node.excerpt,
    featuredImageFluid: e.node.frontmatter.featuredImage.childImageSharp.fluid,
  }));

  return (
    <Layout>
      <SEO title="Home" />
      <Container noPadding>
        <Root>
          <PersonAsideWrap>
            <PersonAside></PersonAside>
          </PersonAsideWrap>
          <ArticleCardList items={items}></ArticleCardList>
        </Root>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt,
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
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
      }
    }
`