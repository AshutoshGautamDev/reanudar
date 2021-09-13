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

const skills = [
  {
    logo: java,
    title: "JAVA",
    details: "I know java very well",
  },
  {
    logo: node,
    title: "NodeJS",
    details: "I know node very well",
  },
  {
    logo: express,
    title: "Express",
    details: "I know express very well",
  },
  {
    logo: mongo,
    title: "Mongo DB",
    details: "I know mongodb very well",
  },
  {
    logo: mysql,
    title: "My SQL",
    details: "I know mysql very well",
  },
  {
    logo: react,
    title: "React JS",
    details: "I know react very well",
  },
  {
    logo: graph,
    title: "Graph QL",
    details: "I know graphql very well",
  },
  {
    logo: tailwind,
    title: "Tailwind",
    details: "I know tailwind very well",
  },
  {
    logo: storybook,
    title: "Storybook",
    details: "I know storybook very well",
  },
];
const SkillCardLeft = ({ logo, title, details }) => {
  return (
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
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
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
        <img alt={title} src={logo} />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section class="text-gray-600 body-font">
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
    </section>
  );
};

export default Skills;
