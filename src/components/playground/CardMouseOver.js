/** @jsx jsx */
import PropTypes from "prop-types"
import { useState } from "react"
import { jsx } from "theme-ui"
import { animated, useSpring } from "react-spring"
import { FaCaretRight } from "react-icons/fa"
import Buttons from "../../components/Projects/Buttons"

const Card = ({
  bg,
  title,
  subtitle,
  pills,
  buttons,
  children,
  handlePrev,
  handleNext,
}) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  const [width] = useState(window.innerWidth)
  const [height] = useState(window.innerHeight)

  const calc = (x, y) => [x - width / 2, y - height / 2]
  const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 15}px,0)`

  return (
    <div
      sx={{ position: "relative", mt: 4 }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        style={{ transform: props.xy.interpolate(trans1) }}
        sx={{
          position: "absolute",
          left: "-10px",
          top: "10px",
          borderWidth: `1px`,
          borderStyle: `solid`,
          borderColor: `primary`,
          minWidth: "500px",
          minHeight: "100%",
          maxHeight: "100%",
          borderRadius: "lg",
          display: ["none", "none", "none", "block"],
          zIndex: -1,
          boxSizing: "border-box",
        }}
      />
      <div
        sx={{
          backgroundColor: bg,
          p: 3,
          borderRadius: "lg",
          boxShadow: "lg",
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          "&:hover": {
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
          },
          width: "500px",
          boxSizing: "border-box",
        }}
      >
        <div
          sx={{
            textTransform: `uppercase`,
            letterSpacing: `wide`,
            fontSize: !!pills ? [3, 4] : [1, 2],
            fontWeight: `medium`,
            lineHeight: 1,
            pb: 2,
          }}
        >
          {title}
        </div>

        {!!pills && (
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              pb: 2,
            }}
          >
            {pills.map((pill, i) => {
              return (
                <div
                  key={i}
                  sx={{
                    variant: `pills`,
                    fontWeight: `semibold`,
                    display: `block`,
                  }}
                >
                  {pill}
                </div>
              )
            })}
          </div>
        )}

        {subtitle.map((text, i) => (
          <div
            key={i}
            sx={{
              letterSpacing: `normal`,
              fontSize: [1],
              fontWeight: `small`,
              lineHeight: 1.5,
              mb: 1,
            }}
          >
            <FaCaretRight sx={{ fill: `primary` }} />
            {text}
          </div>
        ))}

        {!!buttons && (
          <Buttons handleNext={handleNext} handlePrev={handlePrev} />
        )}

        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.array.isRequired,
  pills: PropTypes.array,
  buttons: PropTypes.bool,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
}

export default Card
