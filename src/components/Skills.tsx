import React from 'react';
import CircularBar from './CircularBar';
import '../scss/skills.scss';


function Skills() {
  return (
    <div className="Skills">
      <div className="SkillsTitle">
        <h1>SKILLS</h1>
      </div>
      <div className="SkillsContent">
        <CircularBar />
      </div>
     
    </div>
  );
}

export default Skills;