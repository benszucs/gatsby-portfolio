import React from "react"
import dpImg from "../../static/dp.png"
import museImg from "../../static/muse.png"
import d2Img from "../../static/d2.png"
import r2Img from "../../static/r2.png"

const data = {
  intro: {
    title: "Hello, I'm Ben",
    subtitle: "Welcome to my interactive resume",
    text:
      "I am a creative front end developer based in London, I have a passion for painting with JavaScript and creating exciting digital products.",
  },
  projects: [
    {
      title: "Deep Planet - Client Portal",
      link: "",
      image: dpImg,
      subtitle: [
        "Developed front-end of crop surveying app for client.",
        "Designed app in line with Google's Material design.",
        "Used Redux to manage asynchronous data flow from REST API.",
        "Implemented interactive Google Maps to display satellite data.",
        "Gained exposure to Jira and agile development practices.",
      ],
      pills: ["ReactJS", "Redux", "AWS", "Google Maps API", "REST"],
    },
    {
      title: "Muse - Website",
      link: "https://getmymuse.com",
      image: museImg,
      subtitle: [
        "Designed & developed JAMstack website for fin-tech startup Muse.",
        "Integrated Mailchimp API for user sign-ups to app beta testing.",
        "Performance & SEO optimized website.",
        "Tested across all major browsers.",
      ],
      pills: [
        "GatsbyJS",
        "GraphQl",
        "Contentful CMS",
        "Netlify",
        "Mailchimp API",
      ],
    },
    {
      title: "builtbyR2 - Website",
      link: "https://builtbyr2.com",
      image: r2Img,
      subtitle: [
        "Designed & developed multi-page JAMstack website with CMS integration.",
        "Built blogging system & content model with Contentful.",
        "Performance & SEO optimized website.",
        "Tested across all major browsers.",
      ],
      pills: ["GatsbyJS", "GraphQl", "Contentful CMS", "Netlify", "Animations"],
    },
    {
      title: "D2 Alternative Investments - Website",
      link: "https://www.d2alt.com",
      image: d2Img,
      subtitle: [
        "Designed & developed landing page with CMS integration.",
        "Worked closely with PM and editor to create an editor friendly website.",
        "Performance & SEO optimized website.",
        "Tested across all major browsers.",
      ],
      pills: ["GatsbyJS", "GraphQl", "Contentful CMS", "Netlify"],
    },
  ],
  strengths: [
    {
      title: "Learning and being curious",
      text: [
        "Never done learning and always seeking to improve myself. Curious about new possibilities and taking action to explore them.",
      ],
    },
    {
      title: "Planning and organising",
      text: [
        "Break down goals into measurable objectives. Making an action plan based on these objectives and arranging the resources to carry it out",
      ],
    },
    {
      title: "Delivering results",
      text: [
        "Focus on the key inputs and deliver them with high quality in a timely fashion.",
      ],
    },
  ],
  timeline: [
    {
      title: "The Graduate",
      subtitle: [
        "Graduated from the University of Reading having studied BA Accounting and Economics.",
        "Started working as a Junior Accountant at XPS Pensions Administrator, where I naturally gravitated towards financial modelling and VBA scripting.",
        "My interest in programming grew when I took my first interactive Codecademy HTML & CSS course.",
      ],
    },
    {
      title: "The Self-taught Dev",
      subtitle: [
        "Started coding as a hobby during my graduate scheme, creating simple websites for friends and family.",
        "Realized I'm passionate about working with technology and creating interactive, user facing programs.",
        "After getting to the point where I could replicate any website with plain HTML, CSS & JS I started to experiment with the front-end framework, ReactJS.",
      ],
    },
    {
      title: "The Freelance Dev",
      subtitle: [
        "I have quit my job November 2018 to fully focus on becoming a font-end developer.",
        "During this time I kept sharpening my problem solving skills, design chops and technical understanding of software development.",
        "Got my first freelance contract in January 2019 to build a JAMstack website for a FinTech start-up. One turned into three.",
      ],
    },
    {
      title: "The Full-stack Dev",
      subtitle: [
        "I am currently working with a multi-disciplinary, agile team, where I am building the front-end of a client portal for an international client.",
        "Gaining an appreciation for best practices and principles of software engineering. I am eager to keep levelling up.",
        "In my spare time I am working through the FS course to eventually become a full-stack developer.",
      ],
    },
  ],
}

export default data
