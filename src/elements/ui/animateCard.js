/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Transition } from "react-spring/renderprops"
import { animated } from "react-spring"

const ProjectsContent = ({ index, direction, speed, children }) => {
  return (
    <Transition
      reset
      unique
      items={index}
      from={() => {
        switch (direction) {
          case "next":
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(${speed}%, 0, 0)`,
            }
          case "prev":
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(-${speed}%, 0, 0)`,
            }
          case "down":
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(0, -${speed}%, 0)`,
            }
          case "up":
          default:
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(0, ${speed}%, 0)`,
            }
        }
      }}
      enter={{
        opacity: 1,
        display: "block",
        transform: "translate3d(0%, 0, 0)",
      }}
      leave={() => {
        switch (direction) {
          case "next":
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(-${speed}%, 0, 0)`,
            }
          case "prev":
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(${speed}%, 0, 0)`,
            }
          case "down":
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(0, ${speed}%, 0)`,
            }
          case "up":
          default:
            return {
              opacity: 0,
              display: "none",
              transform: `translate3d(0, -${speed}%, 0)`,
            }
        }
      }}
    >
      {index => props => (
        <animated.div style={{ ...props }}>{children}</animated.div>
      )}
    </Transition>
  )
}

ProjectsContent.propTypes = {
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
}

export default ProjectsContent
