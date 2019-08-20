/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteTitle: `Ben Szucs`,
    siteTitleAlt: `Ben Szucs - Creative Front-end Developer`,
    siteHeadline: `Ben Szucs - Portfolio`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@benszucs`,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
}
