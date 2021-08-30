import React from "react";

const RectangularButton = ({ text, logo }) => {
  return (
    <button
      className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mx-4 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      {logo}
      {text}
    </button>
  );
};

export default RectangularButton;
