/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Title from "../../elements/ui/Title"
import Shapes from "./Shapes"
import Card from "../../elements/ui/Card"
import { Styled } from "theme-ui"
import { FaCaretRight } from "react-icons/fa"
// import ProjectsSlide from "./ProjectsSlide"
// import ProjectsContent from "./ProjectsContent"
// import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import data from "../../content/data"

class Projects extends React.Component {
  state = {
    index: 0,
  }

  handleToggleIndex = idx => {
    this.setState({
      index: idx,
    })
  }

  render() {
    const { index } = this.state
    const { offset } = this.props
    console.log(index)

    return (
      <div sx={{ position: "relative !important" }}>
        <Divider
          bg="divider"
          clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
          speed={-0.2}
          offset={offset}
          factor={2}
        />
        <Content speed={0.4} offset={offset + 0.2} factor={2}>
          <Inner>
            <Title title="Freelance Projects" />

            <div
              sx={{ display: "flex", flexDirection: "row", minHeight: "650px" }}
            >
              <div sx={{ width: "35%" }}>
                {data.projects.map((project, idx) => (
                  <div
                    sx={{ marginBottom: "1rem", cursor: "pointer" }}
                    onClick={() => this.handleToggleIndex(idx)}
                  >
                    <Card
                      key={idx}
                      title={project.title}
                      subtitle={[]}
                      bg="background"
                    />
                  </div>
                ))}
              </div>
              <div sx={{ width: "65%", paddingLeft: "2rem" }}>
                {data.projects.map((project, idx) => {
                  if (index === idx) {
                    return (
                      <div>
                        <Styled.h4
                          sx={{
                            color: "heading",
                          }}
                        >
                          {project.title}
                        </Styled.h4>
                        <div
                          sx={{
                            variant: `pills`,
                            fontWeight: `semibold`,
                            display: `block`,
                            fontSize: ["90%"],
                            mb: 2,
                          }}
                        >
                          {project.subtitle}
                        </div>
                        <div sx={{ display: "flex", mb: 2 }}>
                          <button
                            sx={{
                              variant: `buttons.styled`,
                              fontWeight: `semibold`,
                              display: `block`,
                              mr: 2,
                              color: "white",
                            }}
                            type="button"
                            aria-label="Demo"
                          >
                            Demo
                          </button>
                          <button
                            sx={{
                              variant: `buttons.styled`,
                              fontWeight: `semibold`,
                              display: `block`,
                              mr: 2,
                              color: "white",
                            }}
                            type="button"
                            aria-label="Code"
                          >
                            Code
                          </button>
                        </div>
                        <div
                          sx={{
                            letterSpacing: `normal`,
                            fontWeight: `small`,
                            lineHeight: 1.5,
                            mb: 2,
                            fontSize: ["90%", "90%", "90%", "100%"],
                          }}
                        >
                          {project.description}
                        </div>
                        <div
                          sx={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "primary",
                            my: 3,
                          }}
                        />
                        <div
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            mb: 1,
                          }}
                        >
                          <div sx={{ fontWeight: "bold", mr: "2" }}>
                            Stack:{" "}
                          </div>
                          {project.pills.map((pill, i) => {
                            return (
                              <div
                                key={i}
                                sx={{
                                  variant: `pills`,
                                  fontWeight: `semibold`,
                                  display: `block`,
                                  fontSize: ["90%"],
                                }}
                              >
                                {pill}
                              </div>
                            )
                          })}
                        </div>
                        <div sx={{ fontWeight: "bold" }}>Role: </div>
                        {project.bullets.map((text, i) => (
                          <div
                            key={i}
                            sx={{
                              letterSpacing: `normal`,
                              fontWeight: `small`,
                              lineHeight: 1.5,
                              mb: 1,
                              fontSize: ["90%", "90%", "90%", "100%"],
                            }}
                          >
                            <FaCaretRight sx={{ fill: `primary` }} />
                            {text}
                          </div>
                        ))}
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </Inner>
        </Content>
        <Shapes offset={offset} />
      </div>
    )
  }
}

Projects.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Projects
