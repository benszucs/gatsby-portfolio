/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from "theme-ui"
import Smarties from "./Smarties"
import Content from "./Content"

const Timeline = ({ index, handleToggleIndex }) => (
  <div>
    <Smarties index={index} handleToggleIndex={handleToggleIndex}/>
    <Content index={index}/>
  </div>
)

Timeline.propTypes = {
  index: PropTypes.number.isRequired,
  handleToggleIndex: PropTypes.func.isRequired,
}

export default Timeline
