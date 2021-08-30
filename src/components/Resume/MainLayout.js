import React from "react";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout relative h-screen">
      <div className="absolute top-1/4 left-1/4 h-3/4 w-96 bg-firstl shadow-2xl">
        <div className="relative left-16 rounded-full bg-third m-6 w-52 h-52"></div>
        <div className="text-center h-2/5 mb-6">
          <span className="text-3xl font-bold">
            Ashutosh
            <br />
            Gautam
          </span>
          <div class="bg-second h-0.5 w-16 my-4 mx-auto"></div>
          <br />
          <span className="text-2xl font-thin"> SOFTWARE DEVELOPER</span>
        </div>
        <div className="bg-white h-16"></div>
      </div>
    </div>
  );
};

export default MainLayout;
