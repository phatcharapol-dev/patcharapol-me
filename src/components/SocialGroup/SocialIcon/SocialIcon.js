import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const SocialIcon = (props) => {
    return (
        <div className="rounded-full cursor-pointer hover:bg-green-400 hover:border-green-400 border-2 border-white md:text-2xl text-xl md:h-11 md:w-11 h-10 w-10 flex items-center justify-center duration-300">
            <FontAwesomeIcon icon={['fab', props.icon]} />
        </div>
    )
}

export default SocialIcon;
