import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

const Root = styled.div`
  width: ${p => p.size || 50}px;
  height: ${p => p.size || 50}px;
`;

const Photo = ({ size, className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Root size={size} className={className}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </Root>
  )
}


export default Photo
