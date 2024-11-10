import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "../styles/projects.css";

const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/project_01.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Branding",
    desc: "A cohesive graphic branding design created using Illustrator and Photoshop, blending modern aesthetics with professional appeal.",
    img: "/project_02.png",
    tags: ["Illustrator", "Photoshop", "Canva"],
  },
  {
    id: 2,
    title: " Apple website Clone",
    desc: "A visually accurate Apple website clone made with HTML and CSS, capturing the brand's minimalist and elegant style..",
    img: "/project_03.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "Company Logo",
    desc: "Designed a company logo using Illustrator and Photoshop, combining vector precision with creative effects for a polished, professional look.",
    img: "/project_04.png",
    tags: ["Illustrator", "Photoshop", "Canva"],
  },
  {
    id: 4,
    title: "Facebook website clone",
    desc: "A Facebook website clone crafted using only HTML and CSS, recreating the platform's familiar layout and user interface styling.",
    img: "/project_05.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Netflix website clone",
    desc: "A Netflix website clone built with HTML and CSS, replicating the platform's sleek, dark-themed interface and content grid layout.",
    img: "/project_06.png",
    tags: ["HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;