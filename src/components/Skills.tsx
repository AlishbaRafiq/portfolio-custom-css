import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading" >Technologies I work with</h2>
          <p className="skills-text">
           With a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
           I have experience with frameworks like React and Next.js for creating dynamic, user-friendly applications.
           I am at an advanced beginner level in Tailwind CSS, which I use for efficient styling and design. Additionally, 
           I have a background in graphic design, including logo creation, branding, and designing social media graphics, and
           I hold a graphic design certificate from BanoQabil 2.0. My passion for learning keeps me updated on the latest technologies,
           enhancing my skills to contribute effectively to projects.
          </p>
        </div>

        <div className="skills-right">
          <div className="skills-icons-right">
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Graphic Design</h2> 
              <h2 data-aos="zoom-in-up">Web Design</h2>
            </div>
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">Logo Creation</h2>
              <h2 data-aos="zoom-in-up">UI & UX Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;