/** @jsx jsx */
import { jsx } from "theme-ui"
import Smarties from "./Smarties"
import Content from "./Content"

const Timeline = ({ index, handleToggleIndex }) => (
  <div>
    <Smarties index={index} handleToggleIndex={handleToggleIndex}/>
    <Content />
  </div>
)

export default Timeline
