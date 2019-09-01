/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Shape from "../Shape"
import { UpDown, UpDownWide } from "../../styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, #8D8464 0%, #D3CBB7 100%)"
      clipPath='polygon(0 15%, 100% 25%, 100% 85%, 0 75%)'
      speed={-0.2}
      offset={3.8}
      factor={2}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={2}>
      <Inner>
        {/* <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div> */}
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
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
  </div>
)

export default Projects