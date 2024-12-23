import React from "react";
import "./skills.css";

const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "NodeJs",
    "React",
    "Tailwind CSS",
    "HTML",
    "Git",
    "SQL",
    "MongoDB",
    "ExpressJs","C","Linux"
  ];
  return (
    <section className="skill-section" id="skills">
      <h2>Core Competencies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
