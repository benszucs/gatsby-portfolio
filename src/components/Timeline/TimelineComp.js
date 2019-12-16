/** @jsx jsx */
import PropTypes from "prop-types"
import { useColorMode, jsx } from "theme-ui"
import Card from "../../elements/ui/Card"
import Graduate from "./SVG/Graduate"
import SelfTaught from "./SVG/SelfTaught"
import Freelance from "./SVG/Freelance"
import FullStack from "./SVG/FullStack"
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
            {index === 0 && (
              <Graduate box="100px" fill={isDark ? "#196E6C" : "#b58900"} />
            )}
            {index === 1 && (
              <SelfTaught box="100px" fill={isDark ? "#196E6C" : "#b58900"} />
            )}
            {index === 2 && (
              <Freelance box="100px" fill={isDark ? "#196E6C" : "#b58900"} />
            )}
            {index === 3 && (
              <FullStack box="100px" fill={isDark ? "#196E6C" : "#b58900"} />
            )}
          </AnimCard>

          <div
            sx={{
              position: "relative",
              minHeight: "700px",
              mt: 3,
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
