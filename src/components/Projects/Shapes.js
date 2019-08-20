/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Shape from "../Shape"
import { UpDown, UpDownWide } from "../../styles/animations"

const ProjectsShapes = ({ offset }) => (
    <Divider speed={0.1} offset={1} factor={2}>
      <UpDown>
        <Shape icon="box" width={4} color="icon_light" left="85%" top="75%" />
        <Shape icon="hexa" width={4} stroke color="icon_light" left="70%" top="20%" />
        <Shape icon="triangle" width={6} stroke color="icon_light" left="25%" top="5%" />
        <Shape icon="triangle" hiddenMobile stroke width={8} color="icon_light" left="17%" top="60%" />
        <Shape icon="box" hiddenMobile width={8} color="icon_light" left="45%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Shape icon="hexa" hiddenMobile width={6} stroke color="icon_light" left="10%" top="35%" />
        <Shape icon="hexa" hiddenMobile width={6} stroke color="icon_light" left="20%" top="90%" />
        <Shape icon="triangle" width={4} stroke color="icon_light" left="90%" top="30%" />
        <Shape icon="triangle" width={6} stroke color="icon_light" left="70%" top="90%" />
        <Shape icon="triangle" hiddenMobile width={6} stroke color="icon_light" left="18%" top="75%" />
        <Shape icon="box" width={4} color="icon_light" left="75%" top="10%" />
        <Shape icon="box" hiddenMobile width={8} color="icon_light" left="45%" top="10%" />
      </UpDownWide>
      <Shape icon="triangle" hiddenMobile width={6} stroke color="icon_light" left="4%" top="20%" />
      <Shape icon="triangle" width={10} stroke color="icon_light" left="80%" top="60%" />
      <Shape icon="box" width={6} color="icon_light" left="10%" top="10%" />
      <Shape icon="box" width={6} color="icon_light" left="10%" top="70%" />
      <Shape icon="hexa" width={8} stroke color="icon_light" left="29%" top="26%" />
      <Shape icon="hexa" width={6} stroke color="icon_light" left="75%" top="30%" />
      <Shape icon="hexa" width={8} stroke color="icon_light" left="90%" top="70%" />
    </Divider>
)

export default ProjectsShapes