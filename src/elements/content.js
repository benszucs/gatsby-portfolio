import React from "react"
import PropTypes from 'prop-types';
import { css } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Content = ({ speed, offset, children, factor }) => (
  <ParallaxLayer
    css={css({
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
  >
    {children}
  </ParallaxLayer>
)

Content.propTypes = {
    speed: PropTypes.number,
    offset: PropTypes.number,
    factor: PropTypes.number
}

export default Content