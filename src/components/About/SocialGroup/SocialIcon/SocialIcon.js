import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const SocialIcon = (props) => {
  return (
    <>
      <a className="social-icon" href={props.link}>
        <FontAwesomeIcon icon={["fab", props.icon]} />
      </a>
    </>
  );
};

export default SocialIcon;
