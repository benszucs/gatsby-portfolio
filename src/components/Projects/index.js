/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Title from "../../elements/ui/Title"
import Shapes from "./Shapes"
import data from "../../content/data"
import Cont from "./Content"

class Projects extends React.Component {
  state = {
    index: 0,
  }

  handleToggleIndex = idx => {
    this.setState({
      index: idx,
    })
  }

  render() {
    const { index } = this.state
    const { offset } = this.props

    return (
      <div sx={{ position: "relative !important" }}>
        <Divider
          bg="divider"
          clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
          speed={-0.2}
          offset={offset}
          factor={2}
        />
        <Content speed={0.4} offset={offset + 0.2} factor={2}>
          <Inner>
            <Title title="Freelance Projects" />
            <Cont
              handleToggleIndex={this.handleToggleIndex}
              data={data}
              index={index}
            />
          </Inner>
        </Content>
        <Shapes offset={offset} />
      </div>
    )
  }
}

Projects.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Projects
