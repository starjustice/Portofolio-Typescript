import { COLORS } from "../styles";
import {
  DBO,
  HuddleFire,
  Insight,
  Kodefox,
  Lexicon,
} from "../../assets/images";

export let data = [
  {
    image: "",
    technology: [
      "Aws",
      "Express",
      "Node JS",
      "Arduino",
      "Raspberry Pi",
      "Python",
      "Keras",
    ],
    title: "Smart Bin Garbage Sorter",
    desc: "This is my final project in Surya University. This system is use to sort garbage based on waste material like glass, metal, and paper. For system garbage sorting process I use python with image recognition method. And For hardware to separate waste I use ardunio to control and raspberry pi to connect with server. All of this system is process in AWS EC2",
    year: "2018-2019",
    color: COLORS.indigo,
  },
  {
    image: Insight,
    title: "Insight",
    technology: ["React Native", "Graphql", "Node JS", "Typescript", "Expo"],
    desc: "This system was created to help Kodefox clients monitor prices and the progress of ongoing projects in the form of a graph or chart",
    year: "2019",
    company: "KODEFOX",
    color: COLORS.darkPurple,
  },
  {
    image: "",
    title: "Sumjoy",
    technology: ["React Native", "Firebase", "Typescript", "Expo"],
    desc: "Sumjoy is an application to help create holiday packages and help travelers to find the desired holiday package",
    year: "2019-2020",
    company: "KODEFOX",
    color: COLORS.indigo,
  },
  {
    image: HuddleFire,
    title: "HuddleFire",
    technology: ["React Native", "Graphql", "Node JS", "Typescript", "Expo"],
    desc: "Huddlefire is a reminder application to remind people in an event. In this application in an event reminder there is a chat room and can invite others to join the event",
    year: "2020",
    company: "KODEFOX",
    color: COLORS.darkPurple,
  },
  {
    image: DBO,
    title: "DBO Toko App",
    technology: [
      "React Native",
      "Graphql",
      "Node JS",
      "Nexus",
      "Prisma",
      "Aws",
      "Typescript",
      "Expo",
      "Docker",
    ],
    desc: "The DBO application is an online shop application intended for building material stores buy material product from agent. The system created consists of a mobile application for shops to buy goods and a cms website for admins to manage content in mobile applications",
    year: "2020-2022",
    company: "KODEFOX",
    color: COLORS.indigo,
    linkProject:
      "https://play.google.com/store/apps/details?id=com.dbo.newdboindonesiahd&hl=in&gl=US",
  },
  {
    image: Lexicon,
    title: "Lexicon",
    technology: [
      "React Native",
      "Graphql",
      "Node JS",
      "Ruby",
      "Aws",
      "Typescript",
      "Expo",
      "Docker",
    ],
    desc: "Lexicon is an open-source project that aims to create a mobile app template for a discussion app integrated with Discourse. (For more information about Discourse, please refer to this link: https://www.discourse.org/). In addition to the app, this project contains custom plugins for Discourse, which are used to implement push notifications and deep links for the Lexicon app. These plugins are built using Ruby.",
    year: "2023",
    company: "KODEFOX",
    color: COLORS.darkPurple,
    linkProject: "https://github.com/lexiconhq",
  },
];

export let KODEFOX_LINK = "https://www.kodefox.com/";

export let WORK_EXPERIENCE = [
  {
    company: "Kodefox",
    year: "2019 - Now",
    position: "Full Stack Developer",
    desc: "In here I work using javascript programming language. I use React Native to build mobile app and website. Also mainly use Expo to run react native code to development.\nBeside that, I use node js, express to develop backend system with mainly postgresql as DB. Beside Create Program I also work to create and maintain server for app.",
    image: Kodefox,
  },
];
