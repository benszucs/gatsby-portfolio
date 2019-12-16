/** @jsx jsx */
import { Footer as ThemeFooter, Styled, useColorMode, jsx } from "theme-ui"
import PropTypes from "prop-types"

import { FaCaretRight } from "react-icons/fa"
import AnimCard from "../../elements/ui/animateCard"

const Content = ({ data, index, handleToggleIndex }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: ["column", "column", "column", "row"],
        minHeight: "650px",
      }}
    >
      <div sx={{ width: ["100%", "100%", "100%", "35%"], mb: [4, 4, 4, 0] }}>
        {data.projects.map((project, idx) => (
          <div
            sx={{ marginBottom: "1rem", cursor: "pointer" }}
            onClick={() => handleToggleIndex(idx)}
          >
            <div
              key={idx}
              sx={{
                backgroundColor: "background",
                p: 3,
                borderRadius: "lg",
                boxShadow: "lg",
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                  transform: `translateY(-5px)`,
                  boxShadow: `xl`,
                },
                width: ["100%"],
                boxSizing: "border-box",
              }}
            >
              <div
                sx={{
                  textTransform: `uppercase`,
                  letterSpacing: `wide`,
                  fontWeight: `medium`,
                  lineHeight: 1,
                  pb: 2,
                  fontSize: ["90%", "90%", "90%", "120%"],
                }}
              >
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div sx={{ width: ["100%", "100%", "100%", "65%"], pl: [0, 0, 0, 4] }}>
        {data.projects.map((project, idx) => {
          if (index === idx) {
            return (
              <AnimCard index={idx} direction="next" speed="20">
                <div>
                  <Styled.h4
                    sx={{
                      color: "heading",
                    }}
                  >
                    {project.title}
                  </Styled.h4>
                  <Styled.h6
                    sx={{
                      color: "textMuted",
                    }}
                  >
                    {project.subtitle}
                  </Styled.h6>
                  {!!project.link && (
                    <a
                      sx={{ textDecoration: "none", color: "inherit" }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        sx={{
                          variant: `buttons.styled`,
                          fontWeight: `semibold`,
                          display: `block`,
                          my: 2,
                          color: isDark ? `white` : `text`,
                        }}
                        type="button"
                        aria-label="Link"
                      >
                        Link
                      </button>
                    </a>
                  )}
                  <div
                    sx={{
                      letterSpacing: `normal`,
                      fontWeight: `small`,
                      lineHeight: 1.5,
                      mb: 2,
                      fontSize: ["90%", "90%", "90%", "100%"],
                    }}
                  >
                    {project.description}
                  </div>
                  <div
                    sx={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "primary",
                      my: 3,
                    }}
                  />
                  <div
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      mb: 1,
                    }}
                  >
                    <div sx={{ fontWeight: "bold", mr: "2" }}>Stack: </div>
                    {project.pills.map((pill, i) => {
                      return (
                        <div
                          key={i}
                          sx={{
                            variant: `pills`,
                            fontWeight: `semibold`,
                            display: `block`,
                            fontSize: ["90%"],
                          }}
                        >
                          {pill}
                        </div>
                      )
                    })}
                  </div>
                  <div sx={{ fontWeight: "bold" }}>Role: </div>
                  {project.bullets.map((text, i) => (
                    <div
                      key={i}
                      sx={{
                        letterSpacing: `normal`,
                        fontWeight: `small`,
                        lineHeight: 1.5,
                        mb: 1,
                        fontSize: ["90%", "90%", "90%", "100%"],
                      }}
                    >
                      <FaCaretRight sx={{ fill: `primary` }} />
                      {text}
                    </div>
                  ))}
                </div>
              </AnimCard>
            )
          }
        })}
      </div>
    </div>
  )
}

Content.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleToggleIndex: PropTypes.func.isRequired,
}

export default Content
