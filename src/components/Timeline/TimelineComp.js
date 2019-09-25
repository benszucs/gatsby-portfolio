/** @jsx jsx */
import PropTypes from "prop-types"
import { useColorMode, jsx } from "theme-ui"
import Card from "../../elements/ui/Card"
import SVG from "./SVG"
import AnimCard from "../../elements/ui/animateCard"
import Smarties from "./Smarties"
import Title from "../../elements/ui/Title"
import withMouseParalax from "../playground/withMouseParalax"
import FloatingFrame from "../playground/FloatingFrame"

const Timeline = ({ index, data, handleToggleIndex, transform }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`
  return (
    <div>
      <Title title="Timeline" />
      <div>
        <Smarties index={index} handleToggleIndex={handleToggleIndex} />
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <AnimCard index={index} direction="down" speed="20">
            <SVG box="100px" fill={isDark ? "#196E6C" : "#b58900"} />
          </AnimCard>

          <div
            sx={{
              position: "relative",
              minHeight: "700px",
            }}
          >
            <AnimCard index={index} direction="up" speed="20">
              <FloatingFrame transform={transform} />
              {data.map((item, idx) => {
                if (index === idx) {
                  return (
                    <Card
                      key={idx}
                      title={item.title}
                      subtitle={item.subtitle}
                      bg="background"
                    />
                  )
                }
                return ""
              })}
            </AnimCard>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  handleToggleIndex: PropTypes.func.isRequired,
}

export default withMouseParalax(Timeline)
