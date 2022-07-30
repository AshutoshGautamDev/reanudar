import React from "react";
import ExperienceCard from "./Cards/ExperienceCard";
import Heading from "./Heading";
import { Element } from "react-scroll";

const Experience = () => {
  const experience = [
{
      company: "Get My Parking",
      position: "Software Development Engineer I",
      from: "Jan-2022",
      to: "Present",
      place: "Bangalore",
      details: [
        "Worked on many white-labelled web-apps for the tenants.”,
        "Worked on building rich data-driven web applications by consuming RESTful services and APIs.”, 
	      "Worked collaboratively with backend developers, product managers, and UX designers to enhance the user interface and accessibility.", 
        "Design, code, verify, test, document, amend and refactor high- quality web applications with scalability, performance, and stability and reduced the build size by 68%.", 
        "Worked on web performances of web apps and reduced the load time of the web by 46% and increased the web performance from 67% to 81% (measured by lighthouse)",
      ],
    },
    {
      company: "Gammastack",
      position: "Solution Engineer",
      from: "Feb-2021",
      to: "Jan-2022",
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
    <Element name="to-experience">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 pt-12 mx-auto">
          <Heading head={"Experience"} subHead={"Where I worked"} />
          {experience.map((detail) => {
            return <ExperienceCard {...detail} />;
          })}
        </div>
      </section>
    </Element>
  );
};

export default Experience;
