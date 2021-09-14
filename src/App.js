import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Profile from "./components/Profile";
import Footer from "./components/Resume/Footer";
import Header from "./components/Resume/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <Router>
      <Header/>
      <Profile/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
