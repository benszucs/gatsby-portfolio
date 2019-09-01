/** @jsx jsx */
import { jsx } from "theme-ui"
import Card from "../../elements/ui/Card"

const copy = [
  {
    title: "Learning and being curious",
    text: [
      "Never done learning and always seeking to improve myself. Curious about new possibilities and taking action to explore them.",
    ],
  },
  {
    title: "Planning and organising",
    text: [
      "Break down goals into measurable objectives. Making an action plan based on these objectives and arranging the resources to carry it out",
    ],
  },
  {
    title: "Delivering results",
    text: [
      "Focus on the key inputs and deliver them with high quality in a timely fashion.",
    ],
  },
]

const Strengths = () => {
  return (
    <div>
      {copy.map((section, idx) => (
        <Card
          key={idx}
          title={section.title}
          subtitle={section.text}
          bg="divider"
        />
      ))}
    </div>
  )
}

export default Strengths
