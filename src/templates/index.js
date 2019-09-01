import React from "react"
import Layout from "../components/Layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
// import OldProjects from "../components/OldProjects"
import Contact from "../components/Contact"
import Timeline from "../components/Timeline"
import Gap from "../elements/gap"

const Index = () => {
  return (
    <Layout>
      <Parallax pages={8}>
        <Hero offset={0} />
        <Projects offset={1} />
        <Skills offset={3} />
        <Gap offset={4} />
        <Timeline offset={5} />
        <Gap offset={6} />
        <Contact offset={7} />
      </Parallax>
    </Layout>
  )
}

export default Index
