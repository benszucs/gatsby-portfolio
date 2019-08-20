/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Transition } from "react-spring/renderprops"
import { animated } from "react-spring"

const TestScreen = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

const TestScreen1 = props => {
  return <TestScreen bgColor="tomato">Im number 1</TestScreen>
}

const TestScreen2 = props => {
  return <TestScreen bgColor="aqua">Im number 2</TestScreen>
}

const TestScreen3 = props => {
  return <TestScreen bgColor="navy">Im number 3</TestScreen>
}

const testScreens = [TestScreen1, TestScreen2, TestScreen3]

const Container = styled("div")`
  z-index: 49 !important;
  position: relative;
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const ProjectSlide = ({ index, direction, handleNext, handlePrev }) => {
  return (
    <div>
      <Container
        sx={{
          height: ["200px", "200px", "300px", "400px"],
          width: ["100%", "100%", "90%", "80%"],
        }}
      >
        <Transition
          reset
          unique
          items={index}
          from={
            direction === "next"
              ? { opacity: 0, transform: "translate3d(100%, 0 ,0)" }
              : { opacity: 0, transform: "translate3d(-50%, 0 ,0)" }
          }
          enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
          leave={
            direction === "next"
              ? { opacity: 0, transform: "translate3d(-50%, 0 ,0)" }
              : { opacity: 0, transform: "translate3d(100%, 0 ,0)" }
          }
        >
          {index => style => (
            <animated.div
              style={{ ...style, cursor: "pointer" }}
              onClick={handleNext}
            >
              <div
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  boxShadow: 'xl'
                }}
              >
                {React.createElement(testScreens[index])}
              </div>
            </animated.div>
          )}
        </Transition>
      </Container>
    </div>
  )
}

export default ProjectSlide
