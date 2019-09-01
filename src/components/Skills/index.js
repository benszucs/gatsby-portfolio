/** @jsx jsx */
import PropTypes from 'prop-types'
import { Fragment } from "react"
import { jsx } from "theme-ui"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Title from "../../elements/ui/Title"
import Shapes from "./Shapes"
import RadarChart from "./RadarChart"
import Strengths from "./Strengths"

const Skills = ({ offset }) => (
  <div>
    <Shapes offset={offset} />
    <Content speed={0.4} offset={offset} factor={1.5}>
      <Inner>
        <Fragment>
          <Title title="Strengths" />
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
              <RadarChart />
            </main>
          </div>
        </Fragment>
      </Inner>
    </Content>
  </div>
)

Skills.propTypes = {
  offset: PropTypes.number.isRequired
}

export default Skills
