/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Shapes from "./Shapes"
import RadialChart from "./RadialChart"
import Strengths from "./Strengths"
import { Styled } from "theme-ui"

const Skills = ({ offset }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Shapes offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
          }}
        >
          <aside
            sx={{
              width: "100%",
              minHeignt: "50vh",
              flex: 1,
              mb: [4, 4, 0],
            }}
          >
            <Styled.h2
              sx={{
                color: "heading",
              }}
            >
              Strengths
            </Styled.h2>
            <Strengths />
          </aside>
          <main
            sx={{
              width: "100%",
              minHeignt: "50vh",
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <RadialChart />
          </main>
        </div>
      </Inner>
    </Content>
  </div>
)

export default Skills
