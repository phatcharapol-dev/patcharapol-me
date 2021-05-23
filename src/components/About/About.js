import React from 'react'
import profileImg from '../../images/profile_img.png';

function About() {
    return (
        <div className="bg-black md:h-screen h-full w-full flex md:flex-row flex-col items-center">
            <div className="image-wrap flex flex-1 justify-center flex-row items-end">
                <img className="w-60 h:60" src={profileImg} alt="profile_image" />
            </div>            
            <div className="text-gray-300 flex flex-1 flex-wrap flex-col justify-start items-start text-2xl md:pr-12 p-6">
                <h1 className="font-bold text-white">About <span className="text-green-400 text-2xl">Me</span></h1>
                <p className="py-2 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic harum eum veritatis molestias totam alias earum voluptate atque, eius quis dolorem odit, sit iure, praesentium vel? Enim ex nisi corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex flex-row">
                    <div className="flex-1">
                        <p className="py-2 text-base font-bold text-green-400" >Name</p>
                        <p className="py-2 text-base font-bold text-green-400" >Age</p>
                        <p className="py-2 text-base font-bold text-green-400" >Address</p>
                        <p className="py-2 text-base font-bold text-green-400" >Phone</p>
                        <p className="py-2 text-base font-bold text-green-400" >Email</p>
                    </div>
                    <div className="flex-1">
                        <p className="px-6 py-2 text-base" >:</p>
                        <p className="px-6 py-2 text-base" >:</p>
                        <p className="px-6 py-2 text-base" >:</p>
                        <p className="px-6 py-2 text-base" >:</p>
                        <p className="px-6 py-2 text-base" >:</p>
                    </div>
                    <div className="flex-1">
                        <p className="py-2 text-base" >Phatcharaphol Tridechee</p>
                        <p className="py-2 text-base" >26</p>
                        <p className="py-2 text-base" >Bangkok</p>
                        <p className="py-2 text-base" >089-407-7868</p>
                        <p className="py-2 text-base" >phatcharapol.dev@gmail.com</p>
                    </div>
                </div> 
                            
                <div className="mt-6 cursor-pointer flex justify-center items-center w-48 h-12 bg-green-500 rounded-full text-lg p-2 duration-300">
                    <p className="pr-2">Download CV</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>                    
                </div>
            </div>            
        </div>
    )
}

export default About
