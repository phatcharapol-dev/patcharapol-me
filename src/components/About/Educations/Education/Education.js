import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

function Education(props) {
  return (
    <div className="education-box flex flex-row justify-start items-start">
      <FontAwesomeIcon
        className="md:text-2xl text-xl"
        icon={["fas", props.icons]}
      />
      <div className="pl-4">
        <p>{props.subject}</p>
        <p className="text-sm py-2">{props.place}</p>
      </div>
    </div>
  );
}

export default Education;
