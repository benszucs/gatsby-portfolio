/** @jsx jsx */
import { PureComponent } from "react"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { useColorMode, jsx } from "theme-ui"

const data = [
  {
    subject: "HTML5",
    A: 110,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "NodeJS",
    A: 50,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "CSS3",
    A: 110,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "ReactJS",
    A: 100,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "JAMstack",
    A: 90,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "D3",
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

class Chart extends PureComponent {
  render() {
    const { fill, stroke, tick } = this.props
    return (
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: tick }} />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke={stroke}
          fill={fill}
          fillOpacity={0.8}
        />
      </RadarChart>
    )
  }
}

const ChartContainer = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Chart
      fill={isDark ? `#00212B` : `#fdf6e3`}
      stroke={isDark ? `#196E6C` : `#b58900`}
      tick={isDark ? `white` : `black`}
    />
  )
}

export default ChartContainer
