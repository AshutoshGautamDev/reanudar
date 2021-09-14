import React from "react";

const Heading = ({ head, subHead }) => {
  return (
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        {subHead}
      </h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        {head}
      </h1>
    </div>
  );
};

export default Heading;
