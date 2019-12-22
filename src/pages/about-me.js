import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PersonCard from "../components/person-card"

export default function AboutMePage() {
  return (
    <Layout title="About me" isArticle="true" >
      <SEO title="About me" />
      <Container narrow bottomBorder contentBackground="white">
        <PersonCard>
          <div>
            <p>
              Hi, I`m Peter Ruttkay-Nedecký.
        </p>
            <p>
              I`m a freelance full stack software engineer and technology lead, currently doing projects mainly for Steinringer WEB and IT solutions.
        </p>
            <p>
              I love to learn about new trends and technologies to expand my toolset, which I use to design new solutions and to refactor old ones. I`m always keen to teach others and to get into lengthy nerdy discussions.
        </p>
            <p>
              I`m spending most of my time with C#, Javascript, Typescript, Angular, React, ASP.Net, EntityFramework and  NodeJs.
        </p>
            <p>
              In my leisure time, I`m also working with MonoGame and Unity to build a video game <a href="http://tendrilechoreceived.com/">Tendril: Echo Received</a>.
        </p>
            <p>
              Currently, I’m expanding my knowledge with Docker, styled-components, CSS  grid, and Gatsby.
        </p>

          </div>
        </PersonCard>
      </Container>
    </Layout>
  )
}