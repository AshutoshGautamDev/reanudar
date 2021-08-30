import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../icons";

// const Header = () => {
//   const header = {
//     name: "Ashutosh Gautam",
//     position: "Software Developer",
//     delimeter: "/",
//   };

//   const links = [
//     {
//       name: "About Me",
//       redirect: "/",
//     },
//     {
//       name: "Resume",
//       redirect: "/",
//     },
//     {
//       name: "Projects",
//       redirect: "/",
//     },
//     {
//       name: "Contact",
//       redirect: "/",
//     },
//   ];

//   return (
//     <div className="flex py-10 px-4">
//       <div className="h-8 w-8 bg-second mx-2" />
//       <div className="text-2xl font-black">{header.name}</div>
//       <div className="ml-2 text-2xl font-light">
//         {header.delimeter} {header.position}
//       </div>
//       <div className="ml-auto text-lg space-x-4">
//         {links.map((link) => (
//           <Link
//             className="py-2 px-3 rounded-md hover:bg-gray-100 focus:text-third focus:ring-1 focus:ring-third focus:bg-first"
//             to={link.redirect}
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="static top-0 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo />
          <span class="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
