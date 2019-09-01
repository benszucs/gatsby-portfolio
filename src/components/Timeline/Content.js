/** @jsx jsx */
import PropTypes from "prop-types"
import { useColorMode, jsx } from "theme-ui"
import Card from "../../elements/ui/Card"
import SVG from "./SVG"
import AnimCard from "../../elements/ui/animateCard"

const data = [
  {
    title: "The Graduate",
    subtitle: [
      "Realized I'm passionate about working with technology and creating interactive user facing programs.",
      "With the surgance of React, UI development became even quicker to build, allowing for more creative interface solutions.",
      "After getting to the point where I could replicate any website with HTML, CSS & JS I decided to learn a front-end framework, ReactJS.",
    ],
  },
  {
    title: "The Self-taught Dev",
    subtitle: [
      "Realized I'm passionate about working with technology and creating interactive user facing programs.",
      "With the surgance of React, UI development became even quicker to build, allowing for more creative interface solutions.",
      "After getting to the point where I could replicate any website with HTML, CSS & JS I decided to learn a front-end framework, ReactJS.",
    ],
  },
  {
    title: "The Freelance Dev",
    subtitle: [
      "Realized I'm passionate about working with technology and creating interactive user facing programs.",
      "With the surgance of React, UI development became even quicker to build, allowing for more creative interface solutions.",
      "After getting to the point where I could replicate any website with HTML, CSS & JS I decided to learn a front-end framework, ReactJS.",
    ],
  },
  {
    title: "The Full-stack Dev",
    subtitle: [
      "Realized I'm passionate about working with technology and creating interactive user facing programs.",
      "With the surgance of React, UI development became even quicker to build, allowing for more creative interface solutions.",
      "After getting to the point where I could replicate any website with HTML, CSS & JS I decided to learn a front-end framework, ReactJS.",
    ],
  },
]

const Content = ({ index }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
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

      <AnimCard index={index} direction="up" speed="20">
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
  )
}

Content.propTypes = {
  index: PropTypes.number.isRequired,
}

export default Content
