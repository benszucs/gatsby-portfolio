/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Styled } from "theme-ui"

const Title = ({ title }) => {
  return (
    <Styled.h2
      sx={{
        color: "heading",
        mb: 5,
        textAlign: "center",
      }}
    >
      {title}
    </Styled.h2>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
