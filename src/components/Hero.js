/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Shape from "./Shape"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ offset }) => (
  <div>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <Shape icon="triangle" hiddenMobile stroke width={8} color="icon_gold" left="10%" top="20%" />
        <Shape icon="hexa" width={4} stroke color="icon_gold" left="60%" top="70%" />
        <Shape icon="box" width={6} color="icon_gold" left="60%" top="15%" />
        <Shape icon="box" width={4}  color="icon_gold" left="90%" top="20%" />
        <Shape icon="box" hiddenMobile width={8} color="icon_gold" left="5%" top="90%" />
      </UpDown>
      <UpDownWide>
        <Shape icon="box" hiddenMobile width={8} color="icon_gold" left="40%" top="80%" />
        <Shape icon="triangle" hiddenMobile stroke width={4} color="icon_gold" left="80%" top="10%" />
        <Shape icon="triangle" width={6} stroke color="icon_gold" left="90%" top="50%" />
        <Shape icon="triangle" width={4} stroke color="icon_gold" left="30%" top="65%" />
        <Shape icon="hexa" hiddenMobile stroke width={8} color="icon_gold" left="45%" top="10%" />
      </UpDownWide>
      <Shape icon="triangle" width={8} stroke color="icon_gold" left="95%" top="90%" />
      <Shape icon="triangle" width={6} stroke color="icon_gold" left="25%" top="5%" />
      <Shape icon="hexa" width={6} stroke color="icon_gold" left="30%" top="30%" />
      <Shape icon="hexa" width={4} stroke color="icon_gold" left="10%" top="50%" />
      <Shape icon="hexa" width={8} stroke color="icon_gold" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero