import React from 'react';
import CircularBar from './CircularBar';
import '../scss/skills.scss';


function Skills() {
  return (
    <div className="Skills">
      <div className="SkillsTitle">
        <h1>SKILLS</h1>
      </div>
      <CircularBar />
    </div>
  );
}

export default Skills;