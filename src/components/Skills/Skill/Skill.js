import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

function Skill(props) {
  let iconType = props.icons === "database" ? "fas" : "fab";

  return (
    <div className="skills-box flex flex-col justify-around  items-center md:w-1/4 w-1/3 my-6">
      <FontAwesomeIcon icon={[iconType, props.icons]} />
      <p className="font-bold pt-5">{props.name}</p>
    </div>
  );
}

export default Skill;
