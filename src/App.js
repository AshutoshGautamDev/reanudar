import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Profile from "./components/Profile";
import Footer from "./components/Resume/Footer";
import Header from "./components/Resume/Header";
import MainLayout from "./components/Resume/MainLayout";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <Header />
      <Profile/>
      <Skills/>
      {/* <Education/> */}
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
