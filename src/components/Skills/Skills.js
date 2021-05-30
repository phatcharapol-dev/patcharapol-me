import React from "react";
import Skill from "./Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

const skillsProp = [
  {
    name: "Laravel",
    icon: "laravel",
  },
  {
    name: "Magento",
    icon: "magento",
  },
  {
    name: "ReactJS",
    icon: "react",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    name: "MySql",
    icon: "database",
  },
  {
    name: "Docker",
    icon: "docker",
  },
  {
    name: "Git",
    icon: "git-alt",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
  },
];

const skills = skillsProp.map((skill, index) => {
  return <Skill name={skill.name} icons={skill.icon} key={index} />;
});
function Skills() {
  return (
    <section className="section skills">
      <div className="container">
        <div className="flex flex-col justify-center flex-wrap items-start">
          <div className="md:text-center text-left w-full mb-10">
            <h1>Skills Set</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-start w-full items-start">
            {skills}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
