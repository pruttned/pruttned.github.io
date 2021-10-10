import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PersonCard from "../components/person-card"
import ExtLink from "../components/ext-link"

export default function AboutMePage() {
  return (
    <Layout title="About me" isArticle="true" >
      <SEO title="About me" />
      <Container narrow bottomBorder contentBackground="white" shadow>
        <PersonCard>
          <div>
            <p>
              Hi, I’m Peter Ruttkay-Nedecký.
            </p>
            <p>
              I’m a passionate full-stack software engineer, technology lead, and architect.
            </p>
            <p>
              I love learning about new trends and technologies, which I can use to design new solutions and refactor old ones. I’m always keen to teach others and to get into lengthy nerdy discussions.
            </p>
            <p>
              My stack consists mainly of C#, Javascript, Typescript, Angular, React, ASP.Net, EntityFramework, and NodeJs.
            </p>
            <p>
              I’m also working with MonoGame and Unity to build a video game <ExtLink href="http://tendrilechoreceived.com/" follow>Tendril: Echo Received</ExtLink> in my leisure time.
            </p>
          </div>
        </PersonCard>
      </Container>
    </Layout>
  )
}