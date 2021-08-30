import React from "react";
import EducationCard from "./Card/EducationCard";

const Education = () => {
  const educations = [
    {
      institute: "Mahakal Institute of technology",
      course: "Bachelore of technology",
      from: "2017",
      to: "2021",
      percentage: "8.37 / 10",
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
    <section class="text-gray-600 body-font">
      {educations.map((education) => (
        <EducationCard
          title={education.course}
          institution={education.institute}
          period={`${education.from} - ${education.to}`}
          percentage={education.percentage}
        />
      ))}
    </section>
  );
};

export default Education;
