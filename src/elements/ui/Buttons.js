/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, useColorMode } from "theme-ui"

const Buttons = ({ handleNext, handlePrev }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mt: 3,
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          sx={{
            variant: `buttons.styled`,
            fontWeight: `semibold`,
            display: `block`,
            mr: 2,
            color: isDark ? `white` : `text`
          }}
          onClick={handlePrev}
          type="button"
          aria-label="Prev"
        >
          Prev
        </button>
        <button
          sx={{
            variant: `buttons.styled`,
            fontWeight: `semibold`,
            display: `block`,
            color: isDark ? `white` : `text`
          }}
          onClick={handleNext}
          type="button"
          aria-label="Next"
        >
          Next
        </button>
      </div>
      <button
        sx={{
          variant: `buttons.styled`,
          fontWeight: `semibold`,
          ml: 0,
          color: isDark ? `white` : `text`
        }}
      >
        Demo
      </button>
    </div>
  )
}

Buttons.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
}

export default Buttons
