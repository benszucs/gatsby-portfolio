/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { FaCaretRight } from "react-icons/fa"

const Card = ({ title, subtitle }) => {
  return (
    <>
      <div
        sx={{
          backgroundColor: `background`,
          p: 2,
          borderRadius: "lg",
          boxShadow: "lg",
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          mt: 4,
          "&:hover": {
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
          },
          width: "500px",
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
          {title}
        </div>
        {subtitle.map((text, i) => (
          <div
            key={i}
            sx={{
              letterSpacing: `normal`,
              fontSize: [1],
              fontWeight: `small`,
              lineHeight: 1.5,
              mb: 1

            }}
          >
            <FaCaretRight sx={{ fill: `primary` }} />
            {text}
          </div>
        ))}
      </div>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.array.isRequired,
}

export default Card
