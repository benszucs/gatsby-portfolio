/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Card from "../../elements/ui/Card"

const Strengths = ({ data }) => {
  return (
    <div>
      {data.map((section, idx) => (
        <div
          sx={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: ["center", "center", "center", "flex-end"],
            position: "relative",
          }}
        >
          <Card
            key={idx}
            title={section.title}
            subtitle={section.text}
            bg="divider"
          />
        </div>
      ))}
    </div>
  )
}

Strengths.propTypes = {
  data: PropTypes.array.isRequired,
  transform: PropTypes.func.isRequired,
}

export default Strengths
