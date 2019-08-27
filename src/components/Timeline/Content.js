/** @jsx jsx */
import { useColorMode, jsx } from "theme-ui"
import Card from "../../elements/Card"
import SVG from "./SVG"

const Content = () => {
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
      <SVG box="100px" fill={isDark ? "#196E6C" : "#b58900"} />
      <Card
        title={"The Graduate"}
        subtitle={[
          "Realized I'm passionate about working with technology and creating interactive user facing programs.",
          "With the surgance of React, UI development became even quicker to build, allowing for more creative interface solutions.",
          "After getting to the point where I could replicate any website with HTML, CSS & JS I decided to learn a front-end framework, ReactJS.",
        ]}
      />
    </div>
  )
}

export default Content
