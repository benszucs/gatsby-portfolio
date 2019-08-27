/** @jsx jsx */
import { jsx } from "theme-ui"

const copy = [
  {
    title: "Learning and being curious",
    text:
      "Never done learning and always seeking to improve myself. Curious about new possibilities and taking action to explore them.",
  },
  {
    title: "Planning and organising",
    text:
      "Break down goals into measurable objectives. Making an action plan based on these objectives and arranging the resources to carry it out",
  },
  {
    title: "Delivering results",
    text:
      "Focus on the key inputs and deliver them with high quality in a timely fashion.",
  },
]

const Strengths = () => {
  return (
    <div>
      {copy.map((section, idx) => (
        <div
          key={idx}
          sx={{
            backgroundColor: `background`,
            p: 2,
            borderRadius: "lg",
            mb: idx !== 2 ? 4 : 0,
            boxShadow: "lg",
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            "&:hover": {
              transform: `translateY(-5px)`,
              boxShadow: `xl`,
            },
          }}
        >
          <div
            sx={{
              textTransform: `uppercase`,
              letterSpacing: `wide`,
              fontSize: [1, 2],
              fontWeight: `medium`,
              lineHeight: 1,
              pb: 2,
            }}
          >
            {section.title}
          </div>
          <div
            sx={{
              letterSpacing: `normal`,
              fontSize: [1],
              fontWeight: `small`,
              lineHeight: 1.5,
            }}
          >
            {section.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Strengths
