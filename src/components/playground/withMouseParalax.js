/** @jsx jsx */
import { useState } from "react"
import { useSpring } from "react-spring"
import { jsx } from "theme-ui"

export default function Hoc(HocComponent) {
  return function(props) {
    const [spring, set] = useSpring(() => ({
      xy: [0, 0],
      config: { mass: 10, tension: 550, friction: 140 },
    }))
    const [width] = useState(window.innerWidth)
    const [height] = useState(window.innerHeight)

    const calc = (x, y) => [x - width / 2, y - height / 2]
    const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 15}px,0)`
    return (
      <div
        sx={{ position: "relative", mt: 4 }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <HocComponent transform={spring.xy.interpolate(trans1)} {...props} />
      </div>
    )
  }
}
