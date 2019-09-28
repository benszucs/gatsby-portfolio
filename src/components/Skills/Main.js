/** @jsx jsx */
import { jsx } from "theme-ui"
import data from "../../content/data"
import Title from "../../elements/ui/Title"
import Strengths from "../../components/Skills/Strengths"
import RadarChart from "../../components/Skills/RadarChart"
import withMouseParalax from "../playground/withMouseParalax"

const Main = ({ transform }) => {
  return (
    <main>
      <Title title="Strengths" />
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "column", "row"],
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
          <Strengths data={data.strengths} transform={transform} />
        </aside>
        <main
          sx={{
            width: "100%",
            minHeignt: "50vh",
            flex: 1,
            display: "flex",
            justifyContent: ["center", "center", "center", "center"],
          }}
        >
          <RadarChart />
        </main>
      </div>
    </main>
  )
}

export default withMouseParalax(Main)
