/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Shapes from "./Shapes"
import TimelineComp from "./TimelineComp"
import data from "../../content/data"

class Timeline extends React.Component {
  state = {
    index: 0,
  }

  handleToggleIndex = idx => {
    this.setState({
      index: idx,
    })
  }

  render() {
    const { offset } = this.props
    return (
      <div>
        <Divider
          bg="divider"
          clipPath="polygon(0 82%, 100% 94%, 100% 16%, 0 4%)"
          speed={-0.2}
          offset={offset}
          factor={1.5}
        />
        <Shapes offset={offset} />
        <Content speed={0.4} offset={offset} factor={1.5}>
          <Inner>
            <TimelineComp
              handleToggleIndex={this.handleToggleIndex}
              index={this.state.index}
              data={data.timeline}
              style={{ minHeight: "700px" }}
            />
          </Inner>
        </Content>
      </div>
    )
  }
}

Timeline.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Timeline
