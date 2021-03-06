/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Shape from "./Shape"
import { UpDown, UpDownWide } from "../styles/animations"
import data from '../content/data'

const Hero = ({ offset }) => (
  <div>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <Shape icon="triangle" hiddenMobile stroke width={8} color="icon_green" left="10%" top="20%" />
        <Shape icon="hexa" width={4} stroke color="icon_red" left="60%" top="70%" />
        <Shape icon="box" width={6} color="icon_green" left="60%" top="15%" />
        <Shape icon="box" width={4}  color="icon_yellow" left="90%" top="20%" />
        <Shape icon="box" hiddenMobile width={8} color="icon_yellow" left="5%" top="90%" />
      </UpDown>
      <UpDownWide>
        <Shape icon="box" hiddenMobile width={8} color="icon_green" left="40%" top="80%" />
        <Shape icon="triangle" hiddenMobile stroke width={4} color="icon_green" left="80%" top="10%" />
        <Shape icon="triangle" width={6} stroke color="icon_blue" left="90%" top="50%" />
        <Shape icon="triangle" width={4} stroke color="icon_green" left="30%" top="65%" />
        <Shape icon="hexa" hiddenMobile stroke width={8} color="icon_red" left="45%" top="10%" />
      </UpDownWide>
      <Shape icon="triangle" width={8} stroke color="icon_red" left="95%" top="90%" />
      <Shape icon="triangle" width={6} stroke color="icon_yellow" left="25%" top="5%" />
      <Shape icon="hexa" width={6} stroke color="icon_blue" left="30%" top="30%" />
      <Shape icon="hexa" width={4} stroke color="icon_yellow" left="10%" top="50%" />
      <Shape icon="hexa" width={8} stroke color="icon_red" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Styled.h1>{data.intro.title}</Styled.h1>
        <Styled.h4>{data.intro.subtitle}</Styled.h4>
        <Styled.p>{data.intro.text}</Styled.p>
      </Inner>
    </Content>
  </div>
)

export default Hero