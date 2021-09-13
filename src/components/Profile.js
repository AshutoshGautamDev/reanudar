import React from "react";
import logo from "../assets/img/icons/nodejs-logo.svg";
import avatar from "../assets/img/profile.jpeg";

const Button = ({ text, icon }) => {
  return (
    <button
      className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-2 rounded outline-none focus:outline-none mx-4 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      <div className="flex">
        {icon && <span className="-ml-2">{icon}</span>}
        <span className="mt-3 mb-2"> {text}</span>
      </div>
    </button>
  );
};

const Profile = () => {
  const profile = {
    name: "Ashutosh Gautam",
    place: "Madhya Pradesh",
    country: "India",
    position: "Software Engineer",
    detail:
      "Enthusiastic Software developer eager to contribute to the team success by smart work, attention to detail and excellent organisational skills .Thorough understanding of technologies like React , Nodejs, Java. Motivated to learn ,grow and excel in industry.",
  };
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

  const projects = [
    {
      name: "Hommie",
      title: "A Home automation framework",
      detail:
        "Hommie is a home automation framework written in JAVA that allows users to manage home appliances with their phone as well as desktop.",
      techStack: "JAVA, Python, Javascript, HTML",
    },
    {
      name: "FrontCrew",
      title: "A web services framework",
      detail:
        "RESTful web services framework, written in JAVA is a production-quality framework for developing RESTful web services.",
      techStack: "JAVA",
    },
    {
      name: "Generic Socket Framework",
      title: "A TCP framework",
      detail:
        "A TCP Framework, which provides Client and Server connection for the Application without writing a single code of Socket Programming. It provides a transport layer between client and server.",
      techStack: "JAVA",
    },
    {
      name: "Sorting Visualizer",
      title: "A web application for sorting algorithms.",
      detail:
        "Sorting visualizer created with the help of react used to visualize different sorting algorithms such as bubble sort. It supports 8 sorting algorithms.",
      techStack: "React",
    },
  ];
  const common = {
    github: "https://github.com/AshutoshGautamDev",
    linkedin: "https://www.linkedin.com/in/ashutosh-gautam-0907b7148/",
    resume:
      "https://drive.google.com/file/d/1SnUcusW2b5vSu7CRYcPMxv_Hd2HlCdL0/view?usp=sharing",
  };

  const certification = [
    {
      title: "Python for Everybody (Specialization)",
      link: "https://coursera.org/share/2450a280613808eebfc09130b9243727",
    },
    {
      title: "Data Science Math Skill",
      link: "https://coursera.org/share/d13ed5b9e967cef55d0823ee55410875",
    },
  ];

  const skills = {
    frontend: "React, Javascript, HTML, CSS, SCSS, Storybook, Tailwind CSS",
    backend: "Nodejs, Express, JAVA, MongoDB, MySql",
    versionControl: "Git, GitHub, Bitbucket",
    tools: "Visual Studio code",
    os: "Ubuntu 20.4 , Windows 10",
  };

  return (
    <main className="profile-page">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative rounded-full">
                    <img
                      alt="..."
                      src={avatar}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 mr-8 -ml-24 lg:-ml-16"
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Button text={"Connect"} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                      </span>
                      <span className="text-sm text-gray-500">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        89
                      </span>
                      <span className="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {profile.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  {profile.place}, {profile.country}
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  {profile.position}
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {profile.detail}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <Button
                    text={"Resume"}
                    icon={
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 10h4l-7 8-7-8h4v-10h6v10zm3.213-8.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z" />
                      </svg>
                    }
                  />
                  <div>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
