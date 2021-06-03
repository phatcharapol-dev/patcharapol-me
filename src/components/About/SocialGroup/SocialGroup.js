import React from "react";
import SocialIcon from "./SocialIcon/SocialIcon";

const SocialGroup = () => {
  return (
    <div className="social-group">
      <SocialIcon
        icon="facebook-f"
        link="https://www.facebook.com/phatcharapol.nut"
      />
      <SocialIcon
        icon="github-alt"
        link="https://github.com/phatcharapol-dev"
      />
      <SocialIcon
        icon="linkedin-in"
        link="https://www.linkedin.com/in/phatcharapol-tridechee-1239551a1/"
      />
      <SocialIcon
        icon="instagram"
        link="https://www.instagram.com/nnnnut.pt/"
      />
    </div>
  );
};

export default SocialGroup;
