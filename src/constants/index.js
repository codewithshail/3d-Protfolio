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
  meta,
  starbucks,
  tesla,
  threejs,
} from "../assets";

import messenger from "../assets/messenger.jpg";
import discord from "../assets/discord.jpg";
import comrecy from "../assets/comercy.jpg";
import avatar from "../assets/avatar.png"
import devatar from "../assets/devatar.png"
import cevtar from "../assets/cevtar.png"


export const navLinks = [
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "WebApp Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "CodeWithShail",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Started in March 2021 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "CodeWithShail",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Started in Jan 2022 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CodeWithShail",
    icon: tesla,
    iconBg: "#383E56",
    date: "Started in August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CodeWithShail",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Started in Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shail proved me wrong.",
    name: "Arya Jaiswal",
    designation: "Owner",
    company: "Wedding Shoot",
    image: avatar,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shail does.",
    name: "Shashank",
    designation: "Owner",
    company: "Shashank Enterprises",
    image: devatar,
  },
  {
    testimonial:
      "After SHail optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Navneet",
    designation: "Owner",
    company: "Intellect Hub",
    image: cevtar,
  },
];

const projects = [
  {
    name: "Messenger Clone",
    description:
      "This Webapp includes Real-time messaging using pusher, Message notification and alert, Full responsive for all devices, Google and Github authetication, Online/Offline user status, file and image upload using cloudinary. ",
    tags: [
      {
        name: "nextjs",
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
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://ajmessaging.vercel.app/",
  },
  {
    name: "E-Commerce App",
    description:
      "In this Webapp We included various varieties of commercial things, you can purchase things from our web app, we also included lots of payment options is available like paypal, etc and also included dark and light mode.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: comrecy,
    source_code_link: "https://github.com/",
  },
  {
    name: "Discord Clone",
    description:
      "In this app we includes real-time messaging using socket.io, send attachments, create text audio and video call channel, 1:1 conversaton with members, full responsive and mobile UI, light and dark mode also available.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
