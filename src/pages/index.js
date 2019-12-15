import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCardList from "../components/article-card-list"

export default function IndexPage({ data }) {

  const items = data.allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    path: e.node.frontmatter.path,
    date: e.node.frontmatter.date,
    excerpt: e.node.excerpt,
    featuredImageFluid: e.node.frontmatter.featuredImage.childImageSharp.fluid,
  }));

  console.log(items);
  return (
    <Layout>
      <SEO title="Home" />
      <ArticleCardList items={items}></ArticleCardList>
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
              path,
              title,
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