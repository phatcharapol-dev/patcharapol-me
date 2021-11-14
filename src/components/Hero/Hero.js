import React, { useContext } from "react";
import SocialGroup from "../About/SocialGroup/SocialGroup";
import { ThemeContext } from "../Theme/ThemeContext";
// import Fade from 'react-reveal/Fade';

const bgVideoDark = `${process.env.PUBLIC_URL}/bg-video-dark.mp4`;
const bgVideoLight = `${process.env.PUBLIC_URL}/bg-video-light.mp4`;
const profileImg = `${process.env.PUBLIC_URL}/profile_img.jpg`;

const Hero = () => {
  const [isDarkMode] = useContext(ThemeContext);
  const bgVideo = isDarkMode ? bgVideoDark : bgVideoLight;
  return (
    <section className="hero ">
      <div className="h-screen w-full absolute z-10 opacity-40 bg-black"></div>
      <video
        allow="autoplay"
        autoPlay={true}
        loop
        playsInline
        // poster={bgHero}
        className="bg-video"
        key={bgVideo}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* <Fade bottom> */}
        <div className="hero-content">
          
            <div className="md:w-60 w-48 mt-20">
              <img
                src={profileImg}
                alt={"profile-img"}
                className="profile-image"
              />
            </div>
            <div className="font-bold">
              <h3 className="pt-8 text-white">Patcharaphol T</h3>
              <h4 className="pb-5 text-gray-300">Software Developer</h4>
            </div>
            <SocialGroup />
          </div>
    
      {/* </Fade> */}
    </section>
  );
};

export default Hero;
