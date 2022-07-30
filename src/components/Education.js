import React from "react";
import EducationCard from "./Cards/EducationCard";
import { Element } from "react-scroll";

const Education = () => {
  const educations = [
    {
      institute: "Mahakal Institute of technology",
      course: "Bachelore of technology",
      from: "2017",
      to: "2021",
      percentage: "8.15 / 10",
    },
    {
      institute: "Lok Mahavidyalaya",
      course: "Senior Secondary",
      from: "2015",
      to: "2016",
      percentage: "71.4% / 100%",
    },
    {
      institute: "Don Bosco High School",
      course: "Secondary",
      from: "2013",
      to: "2014",
      percentage: "8.4 / 10",
    },
  ];

  return (
    <Element name="to-education">
      <section class="text-gray-600 body-font m-2 md:mx-4 py-4">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900">
          Education
        </h1>
        {educations.map((education) => (
          <EducationCard
            title={education.course}
            institution={education.institute}
            period={`${education.from} - ${education.to}`}
            percentage={education.percentage}
          />
        ))}
      </section>
    </Element>
  );
};

export default Education;
