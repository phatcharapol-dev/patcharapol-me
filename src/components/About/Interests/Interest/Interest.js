import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

function Interest(props) {
  return (
    <div className="flex flex-col justify-center items-center interest-box">
      <FontAwesomeIcon icon={["fas", props.icons]} />
      <p className="pt-2 md:text-sm text-xs">{props.name}</p>
    </div>
  );
}

export default Interest;
