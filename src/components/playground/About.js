/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Shape from "../Shape"
import { UpDown, UpDownWide } from "../../styles/animations"
import AboutMDX from "../sections/about.mdx"

const About = ({ offset }) => (
  <div>
    <Divider bg="divider" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <Shape icon="box" hiddenMobile width={4} color="icon_gold" left="50%" top="75%" />
        <Shape icon="hexa" hiddenMobile stroke width={6} color="icon_gold" left="70%" top="20%" />
        <Shape icon="triangle" width={6} stroke color="icon_gold" left="25%" top="5%" />
        <Shape icon="hexa" hiddenMobile stroke width={8} color="icon_gold" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Shape icon="triangle" hiddenMobile stroke width={10} color="icon_gold" left="5%" top="80%" />
        <Shape icon="triangle" width={8} stroke color="icon_gold" left="95%" top="50%" />
        <Shape icon="box" hiddenMobile width={4} color="icon_gold" left="85%" top="15%" />
        <Shape icon="hexa" hiddenMobile stroke width={6} color="icon_gold" left="45%" top="10%" />
      </UpDownWide>
      <Shape icon="hexa" hiddenMobile stroke width={4} color="icon_gold" left="4%" top="20%" />
      <Shape icon="triangle" width={6} stroke color="icon_gold" left="10%" top="60%" />
      <Shape icon="box" width={4} color="icon_gold" left="10%" top="10%" />
      <Shape icon="box" width={8} color="icon_gold" left="20%" top="30%" />
      <Shape icon="hexa" width={6} stroke color="icon_gold" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About