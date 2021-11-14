import React from "react";
// import Interests from "./Interests/Interests";
import InterestsV2 from "./InterestsV2/InterestsV2";
import Educations from "./Educations/Educations";
// import Fade from 'react-reveal/Fade';

function About() {
  return (
    <section className="section about">
      <div className="container">
        {/* <Fade bottom> */}
          <div className="grid grid-cols-1 mb-5">
            <h1>About Me</h1>
            <p className="py-2">
              Hi, My name is Patcharaphol Tridechee.I have a Bachelor of Computer
              Science degree from the King Monkut’s University of Technology North
              Bangkok (KMUTNB). Currently I'm web developer with 4+ years of experience in developing user interfaces, testing, debugging, design api ( Restful,SOAP ) and training staff within eCommerce techonologies and Web applications .I also freelance
              when I can, while my focus frontend developer because it's neccesary
              to be a great fullstack deleveloper.I am always experimenting, always learning, and never bored.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col flex-1 justify-start items-start">
              <div className="flex flex-col w-full">
                <h5>Personal Detail</h5>
                <div className="grid grid-cols-9">
                  <div className="col-span-3">
                    <p className="py-2">Age </p>
                    <p className="py-2">Birth Date </p>
                    <p className="py-2">Phone</p>
                    <p className="py-2">Email</p>                
                    <p className="py-2">Address</p>
                  </div>
                  <div className="col-span-6">
                    <p className="py-2">26</p>
                    <p className="py-2">02-02-1995</p>
                    <p className="py-2">089-407-7868</p>
                    <p className="py-2">phatcharapol.dev@gmail.com</p>                  
                    <p className="py-2">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
              <div className="btn-outline" style={{width:"14rem"}}>
                <span className="pr-2">Download Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-6 md:w-6 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-start items-start md:pt-0 pt-10">
              <div className="flex flex-col justify-start items-start w-full ">
                <Educations />
                <InterestsV2 />
              </div>
            </div>
          </div>
        {/* </Fade> */}
      </div>
    </section>
  );
}

export default About;
