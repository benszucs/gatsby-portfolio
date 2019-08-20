/** @jsx jsx */
import { jsx } from "theme-ui"

const Inner = ({ children }) => (
  <div
    sx={{
      width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
      textAlign: `left`,
    }}
  >
    {children}
  </div>
)

export default Inner
