import React from "react"
import { css } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import PropTypes from "prop-types"

const Divider = ({ speed, offset, factor, bg, fill, clipPath, children }) => (
  <ParallaxLayer
    css={css({
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
  >
    {children}
  </ParallaxLayer>
)

Divider.propTypes = {
  speed: PropTypes.number,
  offset: PropTypes.number,
  factor: PropTypes.number,
  bg: PropTypes.string,
  fill: PropTypes.string,
  clipPath: PropTypes.string,
}

export default Divider
