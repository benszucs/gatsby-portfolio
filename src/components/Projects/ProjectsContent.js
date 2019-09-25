/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import AnimCard from "../../elements/ui/animateCard"
import Card from "../../elements/ui/Card"

const ProjectsContent = ({ index, direction, data, handleNext, handlePrev }) => {
  return (
    <AnimCard index={index} direction={direction} speed="20">
      {data.map((item, idx) => {
        if (index === idx) {
          return (
            <Card
              key={idx}
              title={item.title}
              subtitle={item.subtitle}
              pills={item.pills}
              width="600px"
              buttons
              bg="background"
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          )
        }
        return ""
      })}
    </AnimCard>
  )
}

ProjectsContent.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
}

export default ProjectsContent
