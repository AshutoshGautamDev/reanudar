import React from "react";
import Contact from "../Contact";
import Education from "../Education";
import Experience from "../Experience";
import Profile from "../Profile";
import Projects from "../Projects";
import Skills from "../Skills";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="relative h-screen">
      <Header />
      <Profile />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
