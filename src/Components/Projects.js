import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects">
      <p className="projectstitle">PROJECTS</p>
      <div className="projectrow">
        <a className="projectitem" href="https://mealchewser.com" title="">
          <img
            id="mcicon"
            src="/assets/Icons/mealchewser.png"
            alt="this is a mealchewser icon"
          />
        </a>
        <a className="projectitem" href="https://github.com/DvdHLee/iresume" title="">
          <img
            id="iresumeicon"
            src="/assets/Icons/iresume.svg"
            alt="this is a iresume icon"
          />
        </a>
      </div>
      <div className="projectrow">
        <a className="projectitem" href="https://drive.google.com/file/d/16ws097UPsKGsoiWp0mY3CRUhREOfvSxP/view?usp=sharing" title="">
          <img
            id="africairicon"
            src="/assets/Icons/africair.png"
            alt="this is a a4a icon"
          />
        </a>
        <a className="projectitem" href="comingsoon" title="">
        <img
            id="comingsoon"
            src="/assets/Icons/comingsoon.svg"
            alt="this is a coming soon icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
