import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    text: tailwind.colors.gray[8],
    heading: tailwind.colors.gray[9],
    primary: "#b58900",
    secondary: "#d8a300",
    textMuted: tailwind.colors.gray[5],
    background: `#eee8d5`,
    divider: `#fdf6e3`,
    icon_red: "#D33682",
    icon_green: "#2AA198",
    icon_blue: "#268BD2",
    icon_yellow: "#FFD700",
    modes: {
      dark: {
        text: tailwind.colors.gray[2],
        heading: tailwind.colors.white,
        primary: "#196E6C",
        secondary: "#00212B",
        background: "#002B36",
        divider: "#00212B",
        textMuted: tailwind.colors.gray[6],
        icon_red: "#D33682",
        icon_green: "#2AA198",
        icon_blue: "#268BD2",
        icon_yellow: "#FFD700",
      },
    },
  },
  breakpoints: [
    `400px`,
    `700px`,
    `900px`,
    `1200px`,
    `1600px`,
    "1700px",
    "1800px",
  ],
  sizes: {
    ...tailwind.sizes,
    "1/2": `50%`,
    "1/3": `33.333333%`,
    "2/3": `66.666667%`,
    "1/4": `25%`,
    "2/4": `50%`,
    "3/4": `75%`,
    "1/5": `20%`,
    "2/5": `40%`,
    "3/5": `60%`,
    "4/5": `80%`,
    "1/6": `16.666667%`,
    "2/6": `33.333333%`,
    "3/6": `50%`,
    "4/6": `66.666667%`,
    "5/6": `83.333333%`,
    "1/12": `8.333333%`,
    "2/12": `16.666667%`,
    "3/12": `25%`,
    "4/12": `33.333333%`,
    "5/12": `41.666667%`,
    "6/12": `50%`,
    "7/12": `58.333333%`,
    "8/12": `66.666667%`,
    "9/12": `75%`,
    "10/12": `83.333333%`,
    "11/12": `91.666667%`,
    full: `100%`,
    screen: `100vw`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      height: "100vh",
      color: `text`,
      backgroundColor: `background`,
      a: {
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    Footer: {
      textAlign: `center`,
      display: `block`,
      position: `absolute`,
      bottom: 0,
      color: `textMuted`,
      px: [2, 3],
      py: [3, 4],
    },
    Container: {
      maxWidth: `5xl`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 4,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [4, 5, 6],
      mt: 2,
      color: `heading`,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
    styled: {
      backgroundColor: `background`,
      color: `white`,
      borderWidth: `2px`,
      borderStyle: `solid`,
      borderRadius: `lg`,
      borderColor: `primary`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 1,
      transition: "all ease-in-out 0.3s",
      "&:hover": {
        backgroundColor: `primary`,
        color: `white`,
      },
      ":focus": {
        outline: `none`,
      },
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
  pills: {
    p: 1,
    mr: 1,
    mb: 1,
    color: "textMuted",
    cursor: "arrow",
    fontSize: "80%",
  },
  smarties: {
    width: "50px",
    height: "50px",
    borderWidth: `3px`,
    borderStyle: `solid`,
    borderColor: `primary`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "50px",
    transition: "all ease-in-out 0.3s",
    cursor: "pointer",
    fontSize: "80%",
    fontWeight: "medium",
    boxShadow: "lg",
  },
}
