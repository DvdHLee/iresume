import React, { useState } from "react";

import "./MainBody.css";
import Home from "./Home";
import Profile from "./Profile";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const MainBody = props => {
  const pagenum = props.tabnum;

  if (pagenum == 1) {
    return (
      <div className="main">
        <Home></Home>
      </div>
    );
  } else if (pagenum == 2) {
    return (
      <div className="main">
        <Profile></Profile>
      </div>
    );
  } else if (pagenum == 3) {
    return (
      <div className="main">
        <Experience></Experience>
      </div>
    );
  } else if (pagenum == 4) {
    return (
      <div className="main">
        <Skills></Skills>
      </div>
    );
  } else if (pagenum == 5) {
    return (
      <div className="main">
        <Projects></Projects>
      </div>
    );
  } else {
    return (
      <div className="main">
        <Contact></Contact>
      </div>
    );
  }
};

export default MainBody;
