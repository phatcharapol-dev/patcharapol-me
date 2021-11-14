import React from "react";
import Portfolio from "./Portfolio/Portfolio";
// import Fade from 'react-reveal/Fade';

const SrisereeProject = `${process.env.PUBLIC_URL}/sriseree.png`;
const AnimeProject = `${process.env.PUBLIC_URL}/anime-database.png`;
const TpmProject = `${process.env.PUBLIC_URL}/tpm.png`;
const JamsaiProject = `${process.env.PUBLIC_URL}/jamsai-store.png`;

function Portfolios() {
  const projectsProp = [
    {
      name: "Jamsai Store",
      description: "E-Commerce Website",
      stack: "HTML5, CSS3, JS, Magento, jQuery, AJAX, Bootstrap",
      img: JamsaiProject,
      link: "https://store.jamsai.com/"
    },    
    {
      name: "Sriseree",
      description: "Back Office Transport System",
      stack: "HTML5, CSS3, JS, Magento, jQuery, AJAX, Bootstrap",
      img: SrisereeProject,
    },
    {
      name: "Thongpratheep Machinery Part., Ltd.",
      description: "Company Website Responsive",
      stack: "HTML5, CSS3, JS,jQuery, AJAX, Bootstrap",
      img: TpmProject,
      source: "https://github.com/phatcharapol-dev/tpm-website",
      link: "https://www.tpm-machinery.com/",
    },
    {
      name: "The Anime Databae",
      description: "Mini Project",
      stack: "ReactJS, Material UI",
      img: AnimeProject,
      source: "https://github.com/phatcharapol-dev",
      link: "https://www.tpm-machinery.com/",
    },
  ];

  const projects = projectsProp.map((project, index) => {
    return (
      // <Fade bottom>
        <Portfolio
          name={project.name}
          description={project.description}
          stack={project.stack}
          image={project.img}
          source={project.source}
          link={project.link}
          key={index}
        />
      // </Fade>
    );
  });
  return (
    <section className="section portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="grid grid-cols-1">{projects}</div>
      </div>
    </section>
  );
}

export default Portfolios;
