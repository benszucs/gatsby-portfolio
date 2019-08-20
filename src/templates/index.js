import React from "react"
import Layout from "../components/Layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import OldProjects from "../components/OldProjects"
import Contact from "../components/Contact"

const Index = () => {
  return (
    <Layout>
      <Parallax pages={7}>
        <Hero offset={0} />
        <Projects offset={1} />
        <Skills offset={3} />
        <OldProjects offset={4} />
        <Contact offset={6} />
      </Parallax>
    </Layout>
  )
}

export default Index
