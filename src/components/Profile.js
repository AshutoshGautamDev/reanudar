import React from "react";
import { Link } from "react-scroll";
import avatar from "../assets/img/profile.jpeg";
import { Element } from "react-scroll";
import { Download, Github, Linkedin, Polygon } from "./Icons";
import banner from "../assets/img/banner.jpg";

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
    place: "Bangalore, KA",
    country: "India",
    position: "Software Developer",
    detail:
      "Enthusiastic Software developer eager to contribute to the team success by smart work, attention to detail and excellent organisational skills .Thorough understanding of technologies like React , Nodejs, Java. Motivated to learn ,grow and excel in industry.",
  };

  const common = {
    github: "https://github.com/AshutoshGautamDev",
    linkedin: "https://www.linkedin.com/in/ashutosh-gautam-0907b7148/",
    resume:
      "https://drive.google.com/file/d/1nfGW8QqctPiWpSO2Xxgsvx1lWhCbpEoz/view?usp=sharing",
    twitter: "https://twitter.com/hypertext_troop",
  };

  return (
    <main className="profile-page">
      <Element name="to-home">
        <section className="relative block" style={{ height: "500px" }}>
          <img
            className="absolute top-0 w-full h-full bg-center bg-cover"
            src={banner}
            alt=""
          ></img>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <Polygon />
          </div>
        </section>
        <section className="relative py-16 bg-blue-100">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative rounded-full">
                      <img
                        alt="..."
                        src={avatar}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 mr-8 -ml-24 lg:-ml-24"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link
                        to={"to-contact"}
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Button text={"Connect"} />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
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
                    <a
                      href={common.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </a>
                    <a
                      href={common.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button text={"Resume"} icon={<Download />} />
                    </a>
                    <a
                      href={common.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </main>
  );
};

export default Profile;
