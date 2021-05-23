import React from 'react'
import SocialIcon from './SocialIcon/SocialIcon';

const SocialGroup = () => {
    return (
        <div className="flex justify-between items-center text-white">
            <SocialIcon icon="facebook-f"/>
            <SocialIcon icon="instagram"/>
            <SocialIcon icon="linkedin-in"/>
            <SocialIcon icon="twitter"/>
        </div>
    )
}

export default SocialGroup;
