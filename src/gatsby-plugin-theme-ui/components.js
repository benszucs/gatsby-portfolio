import React from "react"
import ProjectCard from "../components/ProjectCard"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, imgUrl, children }) => (
    <ProjectCard link={link} title={title} bg={bg} imgUrl={imgUrl}>
      {children}
    </ProjectCard>
  ),
}