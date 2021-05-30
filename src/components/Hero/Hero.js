import React from "react";
import SocialGroup from "../About/SocialGroup/SocialGroup";
import bgHero from "../../images/bg_hero_grey.jpg";
import bgVideo from "../../images/bg-video.mp4";
import profileImg from "../../images/profile_img.png";

const Hero = () => {
  return (
    <section className="hero">
      <video
        allow="autoplay"
        autoPlay={true}
        loop
        poster={bgHero}
        className="bg-video"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <div className="text-center">
          <div className="md:w-60 w-48 m-auto">
            <img src={profileImg} className="profile-image" />
          </div>
          <div className="font-bold">
            <h3 className="pt-8">Patcharaphol T</h3>
            <h4 className="pb-5">Software Developer</h4>
          </div>
          <SocialGroup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
