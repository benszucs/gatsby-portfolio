/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Divider from "../../elements/divider"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Shapes from "./Shapes"
import TimelineComp from "./TimelineComp"

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
        />
        <Shapes offset={offset} />
        <Content speed={0.4} offset={offset}>
          <Inner>
            <TimelineComp
              handleToggleIndex={this.handleToggleIndex}
              index={this.state.index}
            />
          </Inner>
        </Content>
      </div>
    )
  }
}

export default Timeline
