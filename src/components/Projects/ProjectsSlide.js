/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Transition } from "react-spring/renderprops"
import { animated } from "react-spring"
import d2Img from '../../../static/d2.png'
import r2Img from '../../../static/r2.png'
import museImg from '../../../static/muse.png'
import dpImg from '../../../static/dp.png'

const TestScreen = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  overflow: hidden;
  border-radius: 10px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
  }
`
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

const images = [dpImg, museImg, r2Img, d2Img ]

const ProjectSlide = ({ index, direction, data, handleNext }) => {
  return (
    <div>
      <Container
        sx={{
          height: ["200px", "200px", "300px", "500px"],
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
                  boxShadow: "xl",
                }}
              >
                <TestScreen>
                  <img src={images[index]} alt={data[index].title} />
                </TestScreen>
              </div>
            </animated.div>
          )}
        </Transition>
      </Container>
    </div>
  )
}

ProjectSlide.propTypes = {
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  handleNext: PropTypes.func.isRequired,
}

export default ProjectSlide
