/** @jsx jsx */
import PropTypes from 'prop-types'
import { useColorMode, jsx } from "theme-ui"

const dates = [
  { date: "2016" },
  { date: "2017" },
  { date: "2018" },
  { date: "2019" },
]

const Smarties = ({ index, handleToggleIndex }) => {
    const [colorMode] = useColorMode()
    const isDark = colorMode === `dark`
  return (
    <ul
      index={index}
      sx={{
        position: "relative",
        display: "flex",
        p: 0
      }}
    >
      <div
        sx={{
          position: "absolute",
          minWidth: 100 - 100 / dates.length + "%",
          height: "1px",
          backgroundColor: "primary",
          top: "25px",
          left: 100 / dates.length / (dates.length * 0.44) + "%",
          zIndex: -999,
        }}
      />
      {dates.map((x, i) => (
        <li
          key={i}
          onMouseEnter={() => handleToggleIndex(i)}
          sx={{
            minWidth: 100 / dates.length + "%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            sx={{
              variant: `smarties`,
              color: () => {
                  if(isDark) return `text`
                  if(!isDark && index === i) return `white`
              },
              backgroundColor: index === i ? `primary` : `background`,
            }}
          >
            {x.date}
          </span>
        </li>
      ))}
    </ul>
  )
}

Smarties.propTypes = {
  index: PropTypes.number.isRequired,
  handleToggleIndex: PropTypes.func.isRequired
}

export default Smarties
