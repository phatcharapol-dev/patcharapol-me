import React from 'react'
import profileImg from '../../images/profile_img.png';

function About() {
    return (
        <div className="md:p-20 px-6 py-16 md:text-base text-sm bg-black md:h-screen h-full w-full flex md:flex-row flex-col items-center font-mono">
            <div className="image-wrap flex flex-1 justify-center">
                <img className="w-60 h:60" src={profileImg} alt="profile_image" />
            </div>            
            <div className="text-gray-300 flex flex-1 flex-col justify-center items-start md:pt-0 pt-10" >
                <p className="font-bold text-white md:text-3xl text-xl">About <span className="text-green-400">Me</span></p>
                <p className="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic harum eum veritatis molestias totam alias earum voluptate atque, eius quis dolorem odit, sit iure, praesentium vel? Enim ex nisi corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex flex-row">
                    <div className="flex-1">
                        <p className="py-2 font-bold text-green-400" >Name</p>
                        <p className="py-2 font-bold text-green-400" >Age</p>
                        <p className="py-2 font-bold text-green-400" >Address</p>
                        <p className="py-2 font-bold text-green-400" >Phone</p>
                        <p className="py-2 font-bold text-green-400" >Email</p>
                    </div>
                    <div className="flex-1">
                        <p className="px-6 py-2" >:</p>
                        <p className="px-6 py-2" >:</p>
                        <p className="px-6 py-2" >:</p>
                        <p className="px-6 py-2" >:</p>
                        <p className="px-6 py-2" >:</p>
                    </div>
                    <div className="flex-1">
                        <p className="py-2" >Phatcharaphol Tridechee</p>
                        <p className="py-2" >26</p>
                        <p className="py-2" >Bangkok, Thailand</p>
                        <p className="py-2" >089-407-7868</p>
                        <p className="py-2" >phatcharapol.dev@gmail.com</p>
                    </div>
                </div> 
                            
                <div className="mt-6 cursor-pointer flex justify-center items-center md:w-48 md:h-12 w-40 h-10 bg-green-500 rounded-full md:text-xl text-base p-2 duration-300">
                    <p className="pr-2">Download CV</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce md:h-6 md:w-6 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>                    
                </div>
            </div>            
        </div>
    )
}

export default About
