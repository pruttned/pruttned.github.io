import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

const ImgContainer = styled.div`
  width: ${props => props.size || 50}px;
  height: ${props => props.size || 50}px;
`;

const Photo = ({ size }) => {
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
    <ImgContainer size={size}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </ImgContainer>
  )
}


export default Photo
