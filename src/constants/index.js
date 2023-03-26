import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  acm,
  appit,
  atliq,
  csuf,
  gtu,
  midjourney,
  projectManDash,
  tradingApp,
  digitalOcean,
  STEM,
  java,
  python,
  graphql,
  aws,
  threejs,
  mysql
} from "../assets";

export const navLinks = [
   {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Graphql",
    icon: graphql,
  },
  
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Masters in Computer Science",
    company_name: "California State University, Fullerton",
    icon: csuf,
    iconBg: "#ffffff",
    date: "Aug 2021 - Present",
    points: [],
    type: "education"
  },
  {
    title: "Student Web Developer",
    company_name: "ACM at CSUF",
    icon: acm,
    iconBg: "#ffffff",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Collaborated with other members of the CSUF's web dev team for the upcoming release of the acmcsuf.com website.",
      "Made pull requests to resolve open issues assigned throughout the week by the Webmaster, some of the issues were: navigation bugs, creating custom dropdowns, and more.",
      "Explored the latest technology through reading documentation about Svelte.js and SvelteKit to deep dive into details of the project.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    type: "work"
  },
  {
    title: "Web Developer",
    company_name: "Appitsimple Infotek",
    icon: appit,
    iconBg: "#ffffff",
    date: "Mar 2020 - Sep 2020",
    points: [
      " Contributed to building the cross-platform dashboard for vendors to use VoIP service using NodeJS and ReactJS and designed GraphQL NodeJS service to prevent under/over fetching data through API gateway. Improved performance by 13 percent of use cases.",
      "Primary developer for modernizing existing internal system features, including a UI redesign using modularized React components, styled-component library, and ant design, optimizing performance by 7%.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked with senior developers to identify, resolve, and correct performance issues with new applications.",
    ],
    type: "work"
  },
  {
    title: "BE in Computer Engineering",
    company_name: "Gujarat Technological University",
    icon: gtu,
    iconBg: "#ffffff",
    date: "Aug 2016 - Aug 2020",
    points: [],
    type: "education"
  },
  {
    title: "Software Developer",
    company_name: "AtliQ Technologies",
    icon: atliq,
    iconBg: "#ffffff",
    date: "Sep 2019 - Nov 2019",
    points: [
      "Collaborated with other interns to build a university learning management system using Spring and PostgreSQL.",
      "Programmed modules enable teachers to assign coursework, post exam results remotely, measure classroom attendance, and allow the school administration to track school fee payments and manage library inventory.",
      " Created API for all modules and maintained documentation to help the university IT team troubleshoot issues, decreased waiting time for resolving issues by 30%."
    ],
    type: "work"
  }
];

const testimonials = [
  {
    testimonial:
      " Contributing to Open-Source Community by reporting and solving bugs while participating in Hacktoberfest hosted by Digital Ocean.",
    name: "Digital Ocean",
    image: digitalOcean,
    date: "Oct 2018 - Present"
  },
  {
    testimonial:
      "As a STEM Mentor, supported and motivated mentees for STEM activities, and increased their interest in STEM topics.",
    name: "STEM Advantage",
    image: STEM,
    date: "Nov 2021 - Present"
  }
];

const projects = [
  {
    name: "Midjouney Clone",
    description:
      "A web-based platform that lets users enter text prompts and parameters then creates original photos using an OpenAI's ML algorithm API that has been trained on a lot of image dataa.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: midjourney,
    source_code_link: "https://github.com/rushjam/Midjourney-clone.git",
    external_link: "https://midjourney.rushikk.com/"
  },
  {
    name: "Stock Trading App",
    description:
      "Created a Stocks Trading web application using Python where users can access all the financial data about stocks. Data includes stock quotes, financial reports, news, and historical data for finance management.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: tradingApp,
    source_code_link: "https://github.com/rushjam/Full-stack-trading-app.git",
    external_link: "https://full-stack-trading-app.onrender.com"
  },
  {
    name: "Project Management App",
    description:
      "A comprehensive project management platform that allow managers to plan, organize, and manage resource tools and develop resource estimates for client project's data.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: projectManDash,
    source_code_link: "https://github.com/rushjam/Project-Management-App.git",
    external_link: "https://project-management-app-client-4fbs.onrender.com"
  },
  {
    name: "Project Management App",
    description:
      "A comprehensive project management platform that allow managers to plan, organize, and manage resource tools and develop resource estimates for client project's data.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: projectManDash,
    source_code_link: "https://github.com/rushjam/Project-Management-App.git",
    external_link: "https://project-management-app-client-4fbs.onrender.com"
  },
  
];

export { services, technologies, experiences, testimonials, projects };
