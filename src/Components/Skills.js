import React from "react";

import "./Skills.css";
import Ability from "./Ability";

const Skills = (props) => {
  return (
    <div className="skills">
      <p className="skillstitle">SKILLS</p>

      {/* Coding Skills section */}
      <div className="skillcategory">
        <p className="categoryname">Coding</p>
        <div className="categorycontent">
          <div className="column">
            <Ability name="Ability1" starnum="5"></Ability>
            <Ability name="Ability2" starnum="4"></Ability>
            <Ability name="Ability3" starnum="3"></Ability>
            <Ability name="Ability4" starnum="2"></Ability>
            <Ability name="Ability5" starnum="1"></Ability>
          </div>
          <div className="midline"></div>
          <div className="column2">
            <Ability name="Ability6" starnum="5"></Ability>
            <Ability name="Ability7" starnum="4"></Ability>
            <Ability name="Ability8" starnum="3"></Ability>
            <Ability name="Ability9" starnum="2"></Ability>
            <Ability name="Ability0" starnum="1"></Ability>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Engineering Skills section */}
      <div className="skillcategory">
        <p className="categoryname">Engineering</p>
        <div className="categorycontent">
          <div className="column">
            <Ability name="Ability1" starnum="5"></Ability>
            <Ability name="Ability2" starnum="4"></Ability>
            <Ability name="Ability3" starnum="3"></Ability>
            <Ability name="Ability4" starnum="2"></Ability>
            <Ability name="Ability5" starnum="1"></Ability>
          </div>
          <div className="midline"></div>
          <div className="column2">
            <Ability name="Ability6" starnum="5"></Ability>
            <Ability name="Ability7" starnum="4"></Ability>
            <Ability name="Ability8" starnum="3"></Ability>
            <Ability name="Ability9" starnum="2"></Ability>
            <Ability name="Ability0" starnum="1"></Ability>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Other Skills section */}
      <div className="skillcategory">
        <p className="categoryname">Other</p>
        <div className="categorycontent">
          <div className="column">
            <Ability name="Ability1" starnum="5"></Ability>
            <Ability name="Ability2" starnum="4"></Ability>
            <Ability name="Ability3" starnum="3"></Ability>
            <Ability name="Ability4" starnum="2"></Ability>
            <Ability name="Ability5" starnum="1"></Ability>
          </div>
          <div className="midline"></div>
          <div className="column2">
            <Ability name="Ability6" starnum="5"></Ability>
            <Ability name="Ability7" starnum="4"></Ability>
            <Ability name="Ability8" starnum="3"></Ability>
            <Ability name="Ability9" starnum="2"></Ability>
            <Ability name="Ability0" starnum="1"></Ability>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Skills;
