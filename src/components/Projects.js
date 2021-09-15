import React from "react";
import Heading from "./Heading";
import { Download, Github } from "./icons";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      name: "Hommie",
      title: "A Home automation framework",
      detail:
        "Hommie is a home automation framework written in JAVA that allows users to manage home appliances with their phone as well as desktop.",
      techStack: "JAVA, Python, Javascript, HTML",
      githubLink: "https://github.com/AshutoshGautamDev/Hommie",
      dlink:
        "https://github.com/AshutoshGautamDev/Hommie/archive/refs/heads/master.zip",
    },
    {
      name: "FrontCrew",
      title: "A web services framework",
      detail:
        "RESTful web services framework, written in JAVA is a production-quality framework for developing RESTful web services.",
      techStack: "JAVA",
      githubLink: "https://github.com/AshutoshGautamDev/FrontCrew",
      dlink:
        "https://github.com/AshutoshGautamDev/FrontCrew/archive/refs/heads/master.zip",
    },
    {
      name: "Generic Socket Framework",
      title: "A TCP framework",
      detail:
        "A TCP Framework, which provides Client and Server connection for the Application without writing a single code of Socket Programming. It provides a transport layer between client and server.",
      techStack: "JAVA",
      githubLink: "https://github.com/AshutoshGautamDev/GenericSocketFramework",
      dlink:
        "https://github.com/AshutoshGautamDev/GenericSocketFramework/archive/refs/heads/master.zip",
    },
    {
      name: "Sorting Visualizer",
      title: "A web application for sorting algorithms.",
      detail:
        "Sorting visualizer created with the help of react used to visualize different sorting algorithms such as bubble sort. It supports 8 sorting algorithms.",
      techStack: "React",
      githubLink: "https://github.com/AshutoshGautamDev/sorting-visualizer",
      dlink:
        "https://github.com/AshutoshGautamDev/sorting-visualizer/archive/refs/heads/master.zip",
    },
  ];

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <Element name="to-projects">
        <div class="container px-5 py-24 mx-auto">
          <Heading head={"Projects"} subHead={"My work at glance"} />
          <div class="flex flex-wrap -m-12">
            {projects.map(
              ({ techStack, title, name, detail, githubLink, dlink }) => (
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                  <span class="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
                    {techStack}
                  </span>
                  <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                    {name} - {title}
                  </h2>
                  <p class="leading-relaxed mb-8">{detail}</p>
                  <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a
                      href={githubLink}
                      rel="noopener noreferrer"
                      target="_blank"          
                      class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                    >
                      <Github />
                    </a>
                    <a
                      href={dlink}
                      class="text-gray-400 inline-flex items-center leading-none text-sm"
                    >
                      <Download />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Projects;
