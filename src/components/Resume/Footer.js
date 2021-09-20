import React from "react";
import { Logo } from "../Icons";

const Footer = () => {
  const common = {
    github: "https://github.com/AshutoshGautamDev",
    linkedin: "https://www.linkedin.com/in/ashutosh-gautam-0907b7148/",
    resume:
      "https://drive.google.com/file/d/1SnUcusW2b5vSu7CRYcPMxv_Hd2HlCdL0/view?usp=sharing",
    twitter: "https://twitter.com/hypertext_troop",
  };

  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="hidden md:block ">
        <span class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Logo />
          <span class="ml-3 text-xl">Ashutosh Gautam / Software Developer</span>
        </span>
        </span>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021
          <a
            href={common.twitter}
            class="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @AshutoshGautamDev
          </a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a> */}
          <a
            href={common.twitter}
            target="_blank"
            rel="noopener noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            href={common.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
