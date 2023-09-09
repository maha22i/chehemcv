import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="4" />
        <Skill title="REACT" rating="4" />
        <Skill title="NODE" rating="3" />
        <Skill title="Github" rating="4" />
        <Skill title="Wordpress" rating="4" />
        <Skill title="Angular" rating="4" />
        <Skill title="Python" rating="3" />
        <Skill title="Mongodb" rating="3" />
        <Skill title="ReactNative" rating="3" />
        <Skill title="JAVA" rating="4" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Afar" rating="5" />
        <Skill title="Anglais" rating="2" />
        <Skill title="Arabe" rating="2" />
      </div>
      <Interests />
    </>
  );
};

export default Skills;
