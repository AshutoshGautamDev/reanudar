import React, { useState } from "react";
import { Logo, RightArrow } from "../icons";
import { Link } from "react-scroll";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const links = [
    {
      name: "Home",
      redirect: "to-home",
    },
    {
      name: "Experience",
      redirect: "to-experience",
    },
    {
      name: "Skills",
      redirect: "to-skills",
    },
    {
      name: "Education",
      redirect: "to-education",
    },
    {
      name: "Projects",
      redirect: "to-projects",
    },
    {
      name: "Contact",
      redirect: "to-contact",
    },
  ];

  return (
    <header class=" text-gray-600 body-font top-0 fixed z-10 w-full backdrop-filter backdrop-blur-lg">
      <div className="hidden md:block">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo />
            <span class="ml-3 text-xl">Ashutosh Gautam /</span>
            <span class="font-light ml-2"> Software Developer</span>
          </span>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {links.map(({ name, redirect }) => {
              return (
                <Link
                  to={redirect}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="mr-5 hover:text-gray-900 text-black cursor-pointer"
                >
                  {name}
                </Link>
              );
            })}
          </nav>
          <a
            href={
              "https://drive.google.com/file/d/1fd0FsxvmrcVMM9AV83GD4sDu9gakKmft/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="inline-flex items-center bg-blue-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="block md:hidden">
        <span class="flex title-font font-medium items-center text-gray-900 m-4">
          <Logo />
          <span class="ml-3 text-xl">Ashutosh Gautam</span>
          <span className="ml-auto" onClick={() => setShowModal(!showModal)}>
            <RightArrow />
          </span>
        </span>
        {showModal && (
          <div
            class="modal z-10 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"
            onClick={() => setShowModal(!showModal)}
          >
            <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3 ">
              <div class="border-b px-4 py-2 flex justify-between items-center">
                <h3 class="font-semibold text-lg">Select !!</h3>
                <button
                  class="text-black close-modal"
                  onClick={() => setShowModal(!showModal)}
                >
                  X
                </button>
              </div>
              <div class="px-3 py-16 backdrop-filter backdrop-blur-lg">
                <div class="flex flex-col items-left text-base justify-center">
                  {links.map(({ name, redirect }) => {
                    return (
                      <Link
                        to={redirect}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="ml-4 mr-5 mb-4 shadow-lg"
                        onClick={() => setShowModal(!showModal)}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
