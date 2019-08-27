/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Shape from "./Shape"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import ContactMDX from "../sections/contact.mdx"
import Footer from "./Footer"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset}>
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <InnerWave
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100vw`, height: `40vh` },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <Shape icon="hexa" hiddenMobile stroke width={4} color="icon_red" left="70%" top="20%" />
        <Shape icon="triangle" width={4} stroke color="icon_blue" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <Shape icon="triangle" width={6} stroke color="icon_yellow" left="95%" top="50%" />
        <Shape icon="box" width={6} color="icon_green" left="85%" top="15%" />
        <Shape icon="hexa" hiddenMobile stroke width={8} color="icon_red" left="45%" top="10%" />
      </UpDownWide>
      <Shape icon="triangle" width={6} stroke color="icon_blue" left="4%" top="20%" />
      <Shape icon="hexa" width={8} stroke color="icon_green" left="70%" top="60%" />
      <Shape icon="box" width={4} color="icon_yellow" left="20%" top="30%" />
      <Shape icon="hexa" width={4} stroke color="icon_red" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Contact
