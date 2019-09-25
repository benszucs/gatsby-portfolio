/** @jsx jsx */
import PropTypes from "prop-types"
import { animated } from "react-spring"
import { jsx } from "theme-ui"

const FloatingFrame = ({ transform }) => {
  return (
    <animated.div
      style={{ transform: transform }}
      sx={{
        position: "absolute",
        left: "-10px",
        top: "10px",
        borderWidth: `1px`,
        borderStyle: `solid`,
        borderColor: `primary`,
        minWidth: "500px",
        minHeight: "100%",
        maxHeight: "100%",
        borderRadius: "lg",
        display: ["none", "none", "none", "block"],
        zIndex: -1,
        boxSizing: "border-box",
      }}
    />
  )
}

FloatingFrame.propTypes = {
  transform: PropTypes.func.isRequired,
}

export default FloatingFrame
