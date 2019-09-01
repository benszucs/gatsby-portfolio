/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import AnimCard from "../../elements/ui/animateCard"
import Card from "../../elements/ui/Card"

const data = [
  {
    title: "Project 1",
    subtitle: [
      "A fancy-schmancy project utilising all the hyped up modern tech you could want, but not necessarily need.",
    ],
    pills: ["JAMstack", "GatsbyJS", "Contentful", "Styled Components", "CMS"],
  },
  {
    title: "Project 2",
    subtitle: [
      "A fancy-schmancy project utilising all the hyped up modern tech you could want, but not necessarily need.",
    ],
    pills: ["JAMstack", "GatsbyJS", "Contentful", "Styled Components", "CMS"],
  },
  {
    title: "Project 3",
    subtitle: [
      "A fancy-schmancy project utilising all the hyped up modern tech you could want, but not necessarily need.",
    ],
    pills: ["JAMstack", "GatsbyJS", "Contentful", "Styled Components", "CMS"],
  },
]

const ProjectsContent = ({ index, direction, handleNext, handlePrev }) => {
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
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
}

export default ProjectsContent
