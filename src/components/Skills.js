import React from "react";
import mongo from "../assets/img/icons/mongodb-logo.svg";
import java from "../assets/img/icons/java-logo.svg";
import node from "../assets/img/icons/nodejs-logo.svg";
import react from "../assets/img/icons/react-logo.svg";
import mysql from "../assets/img/icons/mysql-logo.svg";
import tailwind from "../assets/img/icons/tailwindcss-logo.svg";
import storybook from "../assets/img/icons/storybook-logo.svg";
import express from "../assets/img/icons/expressjs-logo.svg";
import graph from "../assets/img/icons/graphql-logo.svg";
import { Element } from "react-scroll";

const skills = [
  {
    logo: java,
    title: "JAVA",
    details:
      "I am well experienced in JAVA/J2EE technologies to develop web applications. Also, have the experience to create the Desktop application with interactive UI and understands the Socket programming very well. I have also rendered solid technical expertise in Software Development Life Cycle and core JAVA technologies to develop applications based on specific client requirements.",
  },
  {
    logo: node,
    title: "NodeJS",
    details:
      "Well skilled in Nodejs, experience with relational and no SQL database integration such as MySql and MongoDB. I can write highly scalable and clean code. Thorough understanding of Event-driven architecture and worker threads.",
  },
  {
    logo: express,
    title: "Express",
    details:
      "I have hands-on experience with express js integrated with the API for front-end data handlings..",
  },
  {
    logo: mongo,
    title: "Mongo DB",
    details:
      "Complete understanding of NoSql database and collections. Able to with different database schema.",
  },
  {
    logo: mysql,
    title: "My SQL",
    details:
      "Have knowledge of Mysql and have also done integration with Nodejs and JAVA.",
  },
  {
    logo: react,
    title: "React JS",
    details:
      "I am very well experienced and knowledgeable in React and component based architecture and also Highly skilled to create interactive UI as well as Figma design integration. I have also experienced creating highly scalable and memoized components.",
  },
  {
    logo: graph,
    title: "Graph QL",
    details:
      "Well experienced and have experience in integration with react js.",
  },
  {
    logo: tailwind,
    title: "Tailwind",
    details: "Used this library with many of my project.",
  },
  {
    logo: storybook,
    title: "Storybook",
    details:
      "Used this library with one of projects to integrate the React components in the isolated version of the from the running server to test those components separately with dummy data. ",
  },
];
const SkillCardLeft = ({ logo, title, details }) => {
  return (
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-bblue text-blue-500 flex-shrink-0">
        <img alt={title} src={logo} />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p class="leading-relaxed text-base">{details}</p>
      </div>
    </div>
  );
};

const SkillCardRight = ({ logo, title, details }) => {
  return (
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p class="leading-relaxed text-base">{details}</p>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-bblue text-blue-500 flex-shrink-0">
        <img alt={title} src={logo} />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section class="text-gray-600 body-font">
      <Element name="to-skills">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              What I know
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Skills
            </h1>
          </div>
          {skills.map((data, index) => {
            return index % 2 === 0 ? (
              <SkillCardLeft {...data} />
            ) : (
              <SkillCardRight {...data} />
            );
          })}
        </div>
      </Element>
    </section>
  );
};

export default Skills;
