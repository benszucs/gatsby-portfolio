/** @jsx jsx */
import React from "react"
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
      {copy.map((section, i) => (
        <div sx={{
          backgroundColor: 'rgba(255,255,255, 0.8)',
          p: 2,
          borderRadius: 'lg',
          mb: i !== 2 ? 3 : 0,
        }}>
          <div
            sx={{
              textTransform: `uppercase`,
              letterSpacing: `wide`,
              fontSize: [1, 2],
              fontWeight: `medium`,
              lineHeight: 1,
              pb: 1
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
