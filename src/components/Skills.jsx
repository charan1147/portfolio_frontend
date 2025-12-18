import React from "react";

const Skills = () => {
  const skills = [
    "Html5",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Rest Api",
    "MongoDB",
    "Git & Git Hub",
    "Postman",
    "Bootstrap",
  ];
  return (
    <section
      id="skills"
      className="skills-section animate__animated animate__fadeInUp"
    >
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li
            key={skill}
            className="animate__animated animate__zoomIn"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
