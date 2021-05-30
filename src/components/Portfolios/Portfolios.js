import React from "react";
import Portfolio from "./Portfolio/Portfolio";
import SrisereeProject from "../../images/portfolio/sriseree.png";
import AnimeProject from "../../images/portfolio/anime-database.png";
import TpmProject from "../../images/portfolio/tpm.png";

function Portfolios() {
  let projectName = `Sriseree Co., Ltd`;

  const projectsProp = [
    {
      name: "Sriseree",
      description: "Back Office Transport System",
      stack: "HTML5, CSS3, JS, Magento, jQuery, AJAX, Bootstrap",
      img: SrisereeProject,
      source: "https://www.github.com/phatcharapol.dev",
    },
    {
      name: "Thongpratheep Machinery Part., Ltd.",
      description: "Company Website Responsive",
      stack: "HTML5, CSS3, JS,jQuery, AJAX, Bootstrap",
      img: TpmProject,
      source: "https://www.github.com/phatcharapol.dev",
    },
    {
      name: "The Anime Databae",
      description: "Mini Project",
      stack: "ReactJS, Material UI",
      img: AnimeProject,
      source: "https://www.github.com/phatcharapol.dev",
    },
  ];

  const projects = projectsProp.map((project, index) => {
    return (
      <Portfolio
        name={project.name}
        description={project.description}
        stack={project.stack}
        image={project.img}
        source={project.source}
        key={index}
      />
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
