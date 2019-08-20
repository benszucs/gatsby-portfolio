/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
        <path d="M39 20a19 19 0 1 1-38 0 19 19 0 1 1 38 0z" fill="none" stroke-width="1.99975"/>
    ),
    viewBox: `0 0 30 30`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
}

const Shape = ({ stroke, color, width, icon, left, top, hiddenMobile }) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

Shape.defaultProps = {
  stroke: false,
  hiddenMobile: false,
}

Shape.propTypes = {
  stroke: PropTypes.bool,
  color: PropTypes.any,
  width: PropTypes.number,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

export default Shape
