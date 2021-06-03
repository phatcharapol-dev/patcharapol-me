import React from "react";
import Portfolio from "./Portfolio/Portfolio";
const SrisereeProject = `${process.env.PUBLIC_URL}/sriseree.png`;
const AnimeProject = `${process.env.PUBLIC_URL}/anime-database.png`;
const TpmProject = `${process.env.PUBLIC_URL}/tpm.png`;

function Portfolios() {
  const projectsProp = [
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
      <Portfolio
        name={project.name}
        description={project.description}
        stack={project.stack}
        image={project.img}
        source={project.source}
        link={project.link}
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
