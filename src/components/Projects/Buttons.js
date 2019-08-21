/** @jsx jsx */
import { jsx } from "theme-ui"

const Buttons = ({ handleNext, handlePrev }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: 3
      }}
    >
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          ml: 0
        }}
        onClick={handlePrev}
        type="button"
        aria-label="Prev"
      >
        Prev
      </button>
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
        }}
        onClick={handleNext}
        type="button"
        aria-label="Next"
      >
        Next
      </button>
    </div>
  )
}

export default Buttons
