import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects">
      <p className="projectstitle">PROJECTS</p>
      <div className="projectrow">
        <a className="projectitem" href="https://github.com/DvdHLee" title="">
          <img
            id="mcicon"
            src="/assets/Icons/mealchewser.png"
            alt="this is a linkedin icon"
          />
        </a>
        <a className="projectitem" href="https://github.com/DvdHLee" title="">
          <img
            className="projecticon"
            src="/assets/Icons/linkedin.png"
            alt="this is a linkedin icon"
          />
        </a>
      </div>
      <div className="projectrow">
        <a className="projectitem" href="https://github.com/DvdHLee" title="">
          <img
            className="projecticon"
            src="/assets/Icons/linkedin.png"
            alt="this is a linkedin icon"
          />
        </a>
        <a className="projectitem" href="https://github.com/DvdHLee" title="">
          <img
            className="projecticon"
            src="/assets/Icons/linkedin.png"
            alt="this is a linkedin icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
