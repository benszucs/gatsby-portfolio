/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Transition } from "react-spring/renderprops"
import { animated, useSpring } from "react-spring"
import Buttons from "./Buttons"

const TextScreen = ({ handleNext, handlePrev }) => {
  return (
    <div
      sx={{
        p: 3,
        boxShadow: "xl",
      }}
    >
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pb: 2,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        Project Title
      </div>
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          pb: 2,
        }}
      >
        {["JAMstack", "GatsbyJS", "Contentful", "Styled Components", "CMS"].map(
          pill => (
            <div
              sx={{
                variant: `pills`,
                fontWeight: `semibold`,
                display: `block`,
              }}
            >
              {pill}
            </div>
          )
        )}
      </div>
      <div
        sx={{
          opacity: 0.75,
        }}
      >
        A fancy-schmancy project utilising all the hyped up modern tech you
        could want, but not necessarily need.
      </div>
      <div sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
        <Buttons handleNext={handleNext} handlePrev={handlePrev} />
        <button
          sx={{
            variant: `buttons.toggle`,
            fontWeight: `semibold`,
            ml: 0,
            mt: 3,
          }}
        >
          Demo
        </button>
      </div>
    </div>
  )
}

const textScreens = [TextScreen, TextScreen, TextScreen]

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 20}px,0)`

const ProjectsContent = ({ index, direction, handleNext, handlePrev }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <div
      sx={{
        maxWidth: "500px",
        backgroundColor: "background",
        borderRadius: "lg",
      }}
    >
      <div
        sx={{ position: "relative" }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          style={{ transform: props.xy.interpolate(trans1) }}
          sx={{
            position: "absolute",
            left: "-10px",
            top: "10px",
            border: "#eee8d5 solid 2px",
            minWidth: "500px",
            minHeight: "100%",
            borderRadius: "lg",
            display: ["none", "none", "none", "block"],
          }}
        />
        <Transition
          reset
          unique
          items={index}
          from={
            direction === "next"
              ? {
                  opacity: 0,
                  display: "none",
                  transform: "translate3d(10%, 0 ,0)",
                }
              : {
                  opacity: 0,
                  display: "none",
                  transform: "translate3d(-5%, 0 ,0)",
                }
          }
          enter={{
            opacity: 1,
            display: "block",
            transform: "translate3d(0%, 0, 0)",
          }}
          leave={
            direction === "next"
              ? {
                  opacity: 0,
                  display: "none",
                  transform: "translate3d(-5%, 0 ,0)",
                }
              : {
                  opacity: 0,
                  display: "none",
                  transform: "translate3d(10%, 0 ,0)",
                }
          }
        >
          {index => props => (
            <animated.div style={{ ...props }}>
              {/* {React.createElement(textScreens[index](handleNext, handlePrev))} */}
              {textScreens.map((component, idx) => {
                if (idx === index) {
                  return (
                    <TextScreen
                      handleNext={handleNext}
                      handlePrev={handlePrev}
                    />
                  )
                }
              })}
            </animated.div>
          )}
        </Transition>
      </div>
    </div>
  )
}

export default ProjectsContent
