/** @jsx jsx */
import {
  Footer as ThemeFooter,
  Styled,
  Flex,
  useColorMode,
  jsx,
} from "theme-ui"
import { FaGithubAlt } from "react-icons/fa"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }
  console.log(colorMode)
  return (
    <ThemeFooter>
      <button
        sx={{
          variant: `buttons.styled`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
          color: isDark ? `white` : `text`,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
        }}
      >
        <Styled.a
          sx={{ color: `text`, fontWeight: `semibold`, }}
          href="https://github.com/benszucs/gatsby-portfolio"
        >
          <FaGithubAlt sx={{ transform: `translateY(2px)` }}/>
          {` `}
          Source code
        </Styled.a>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer
