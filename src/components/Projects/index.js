/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Styled } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Shapes from "./Shapes"
import ProjectsSlide from "./ProjectsSlide"
// import ProjectsContent from "./ProjectsContent"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

class Projects extends React.Component {
  state = {
    index: 0,
    direction: "",
  }
  handlePrev = e =>
    this.setState(state => ({
      index: state.index === 0 ? 2 : state.index - 1,
      direction: "prev",
    }))
  handleNext = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
      direction: "next",
    }))
  render() {
    const { index, direction } = this.state
    const { offset } = this.props

    return (
      <div sx={{ position: "relative !important" }}>
        <Divider
          bg="linear-gradient(to right, #8D8464 0%, #D3CBB7 100%)"
          clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
          speed={-0.2}
          offset={1}
          factor={2}
        />
        <Content speed={0.4} offset={offset + 0.2} factor={2}>
          <Inner>
            <Styled.h2
              sx={{
                mb: 4,
                color: "white",
              }}
            >
              Projects
            </Styled.h2>
            <ProjectsSlide
              index={index}
              direction={direction}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
            />
          </Inner>
          <ParallaxLayer
            sx={{
              position: "absolute",
              padding: [3, 4, 4, 0],
              top: ["80px", "80px", "-20px"],
              right: [0, 0, 0, "72px", "72px", "300px", "400px"],
              zIndex: 50,
              maxWidth: "500px",
            }}
            speed={0.2}
            offset={offset + 0.25}
            factor={2}
          >
            {/* <ProjectsContent
              index={index}
              direction={direction}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
            /> */}
          </ParallaxLayer>
        </Content>
        <Shapes offset={offset} />
      </div>
    )
  }
}

export default Projects
