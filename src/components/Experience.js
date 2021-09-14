import React from "react";
import ExperienceCard from "./Card/ExperienceCard";
import Heading from "./Heading";

const Experience = () => {
  const experience = [
    {
      company: "Gammastack",
      position: "Solution Engineer",
      from: "Feb-2021",
      to: "Present",
      place: "Indore",
      details: [
        "Identified web-based use interaction and developed highly-responsive user interface components via React.",
        "Translated designs and wireframes into high-quality code and wrote application interface code via Javascript following React.js workflows.",
      ],
    },
    {
      company: "Crypto Asset Rating",
      position: "Full Stack Developer",
      from: "Nov-2021",
      to: "Feb-2021",
      place: "remote",
      details: [
        "Worked on different products Tokenization Asset Platform and Real State Tokenization Asset Platform.",
        "Integrated API of Fund America to handle the investments.",
        "Determined the structure and design of web pages based on user requirement and balanced functional and aesthetic designs while managing brand’s design consistency",
      ],
    },
  ];

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 pt-12 mx-auto">
        <Heading head={"Experience"} subHead={"Where I worked"} />
        {experience.map((detail) => {
          return <ExperienceCard {...detail} />;
        })}
      </div>
    </section>
  );
};

export default Experience;