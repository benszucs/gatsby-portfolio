import React from "react"
import Layout from "../components/Layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
// import OldProjects from "../components/OldProjects"
import Contact from "../components/Contact"
import Timeline from "../components/Timeline";

const Index = () => {
  return (
    <Layout>
      <Parallax pages={6}>
        <Hero offset={0} />
        <Projects offset={1} />
        <Skills offset={3} />
        <Timeline offset={4}/>
        <Contact offset={5} />
      </Parallax>
    </Layout>
  )
}

export default Index
