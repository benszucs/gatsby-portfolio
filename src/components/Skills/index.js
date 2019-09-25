/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import Inner from "../../elements/inner"
import Content from "../../elements/content"
import Main from "./Main"
import Shapes from "./Shapes"

const Skills = ({ offset }) => (
  <div>
    <Shapes offset={offset} />
    <Content speed={0.4} offset={offset} factor={1.5}>
      <Inner>
        <Main />
      </Inner>
    </Content>
  </div>
)

Skills.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default Skills
