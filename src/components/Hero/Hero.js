import React from 'react'
import SocialGroup from '../SocialGroup/SocialGroup'
import bgHero from '../../images/bg_hero_grey.jpg';
import ProfileImage from '../../images/profile_img.png';

const Hero = () => {
    return (        
            <div className="flex justify-center items-center h-screen flex-row bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bgHero})`}}>
                <div className="text-center">
                    <div className="md:w-60 w-48 m-auto">
                        <img src={ProfileImage} className="w-full rounded-full border-8 border-green-400 box-shadow-profile" />
                    </div>                                                     
                    <div className="font-bold font-mono">
                        <h1 className="md:text-3xl text-xl pt-8 text-white ">Phatcharapol T</h1>                        
                        <h2 className="md:text-xl text-base pb-5 text-gray-300">Software Developer</h2>
                    </div>
                    <SocialGroup/>
                </div>
            </div>
    )
}

export default Hero
