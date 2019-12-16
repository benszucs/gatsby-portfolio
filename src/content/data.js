const data = {
  intro: {
    title: "Hello, I'm Ben",
    subtitle: "Welcome to my interactive resume",
    text:
      "I am a creative front end developer based in London, I have a passion for painting with JavaScript and creating exciting digital products.",
  },
  projects: [
    {
      title: "Deep Planet",
      link: "",
      subtitle: "Webapp",
      description:
        "Collaborating with a senior back-end developer we built two products for Deep Planet in the pilot stage of the application. An advanced grape farm monitoring platform that uses satellite data, ground data, human expertise and machine learning algorithm to predict grape yield, and a field map platform which identifies fields that are vineyards anywhere in the world.",
      bullets: [
        "Built client portal UI using ReactJS and Google's material design library.",
        "Implemented Redux state management with asynchronous data flow from REST API.",
        "Set up serverless authentication back-end service using AWS Cognito",
        "Integrated Google Maps API for use of interactive maps.",
        "Gained exposure to Jira and agile software development practices.",
        "Conducted technical research and cost analysis to meet product scope requirements.",
        "Produced technical documentation detailing the scope of the application.",
      ],
      pills: ["ReactJS", "Redux", "AWS", "Google Maps API", "REST"],
    },
    {
      title: "Muse",
      link: "https://getmymuse.com",
      subtitle: "Website",
      description:
        "Fintech startup, Muse is building a mobile application aimed at small business owners to bridge short term cash-flow gaps and minimize administrative headaches. I was contracted to transform their old static HTML & CSS based website to a modern JavaScript powered website with a content management system to make editing copy a breeze.",
      bullets: [
        "Worked with senior designer to build pixel perfect, responsive design from mock-ups.",
        "Integrated Mailchimp API for sign-ups to application beta testing & mailing list.",
        "Emphasized writing clean, modular and reusable code using Styled Components.",
        "Optimized website performance as well as SEO & Google analytics.",
        "Tested the website across all major browsers.",
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
      title: "builtbyR2",
      link: "https://builtbyr2.com",
      subtitle: "Website",
      description:
        "Technology agency builtbyR2 partners with businesses to solve their technological needs, offering end-to-end project completion and consultation. I designed and developed this multi-page JAMstack website with CMS integration.",
      bullets: [
        "Built blogging system & content model with Contentful.",
        "Performance & SEO optimized website.",
        "Tested across all major browsers.",
        "Used React Spring animation library and custom CSS3 animations.",
      ],
      pills: ["GatsbyJS", "GraphQl", "Contentful CMS", "Netlify", "Animations"],
    },
    {
      title: "D2 Alternative Investments",
      link: "https://www.d2alt.com",
      subtitle: "Website",
      description:
        "D2 are specialists in alternative investments, principled life settlements, institutional execution and M&A consultancy. I designed and developed this landing page powered by Contentful CMS.",
      bullets: [
        "Worked closely with PM & copywriter to create an editor friendly website.",
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
        "Currently working with a multi-disciplinary, agile team, where I am building the front-end of a client portal for an international client.",
        "I'm looking to contribute to the tackling of big problems ideally working on software reaching a global audience and to specialize in client-side development, creating low-latency and high performance software solutions.",
      ],
    },
  ],
}

export default data
