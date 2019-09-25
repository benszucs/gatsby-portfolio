/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { FaCaretRight } from "react-icons/fa"
import Buttons from "../../components/Projects/Buttons"

const Card = ({
  bg,
  title,
  subtitle,
  pills,
  buttons,
  width,
  children,
  handlePrev,
  handleNext,
}) => {
  return (
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
        width: ["100%"],
        maxWidth: ["500px"],
        boxSizing: "border-box",
      }}
    >
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          fontWeight: `medium`,
          lineHeight: 1,
          pb: 2,
          fontSize: ["90%", "90%", "90%", "120%"],
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
                  fontSize: ["90%"],
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
            fontWeight: `small`,
            lineHeight: 1.5,
            mb: 1,
            fontSize: ["90%", "90%", "90%", "100%"],
          }}
        >
          <FaCaretRight sx={{ fill: `primary` }} />
          {text}
        </div>
      ))}

      {!!buttons && <Buttons handleNext={handleNext} handlePrev={handlePrev} />}

      {children}
    </div>
  )
}

Card.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.array.isRequired,
  pills: PropTypes.array,
  buttons: PropTypes.bool,
  width: PropTypes.string,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
}

export default Card
