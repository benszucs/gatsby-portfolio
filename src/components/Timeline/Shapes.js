/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Divider from "../../elements/divider"
import Shape from "../Shape"
import { UpDown, UpDownWide } from "../../styles/animations"

const TimelineShapes = ({ offset, clipPath }) => (
    <Divider speed={0.1} offset={offset} clipPath={clipPath}>
      <UpDown>
        <Shape icon="box" hiddenMobile width={4} color="icon_red" left="50%" top="75%" />
        <Shape icon="hexa" hiddenMobile stroke width={6} color="green" left="70%" top="20%" />
        <Shape icon="triangle" width={6} stroke color="icon_blue" left="25%" top="5%" />
        <Shape icon="hexa" hiddenMobile stroke width={8} color="icon_yellow" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Shape icon="triangle" hiddenMobile stroke width={10} color="icon_red" left="5%" top="80%" />
        <Shape icon="triangle" width={8} stroke color="icon_green" left="95%" top="50%" />
        <Shape icon="box" hiddenMobile width={4} color="icon_blue" left="85%" top="15%" />
        <Shape icon="hexa" hiddenMobile stroke width={6} color="icon_red" left="45%" top="10%" />
      </UpDownWide>
      <Shape icon="hexa" hiddenMobile stroke width={4} color="icon_yellow" left="4%" top="20%" />
      <Shape icon="triangle" width={6} stroke color="icon_green" left="10%" top="60%" />
      <Shape icon="box" width={4} color="icon_reg" left="10%" top="10%" />
      <Shape icon="box" width={8} color="icon_blue" left="20%" top="30%" />
      <Shape icon="hexa" width={6} stroke color="icon_red" left="80%" top="70%" />
    </Divider>
)

TimelineShapes.propTypes = {
  offset: PropTypes.number.isRequired,
  clipPath: PropTypes.string
}

export default TimelineShapes