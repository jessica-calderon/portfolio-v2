import React from "react";

function Blurbs() {
    return (
        <div className='flex flex-col h-full'>
            <div className='px-1 flex w-full h-[25px] items-center bg-[#E4BF82] font-semibold text-[#FA6E29] '>
                <span className='ml-px'>Jessica's Blurbs</span>
            </div>
            <div className='text-left ml-1 flex flex-col gap-1 h-full'>
                <span className='font-semibold text-[#FA6E29]'>About Me:</span>
                <span className='font-normal'>
                    Hey, I'm Jessica. I'm a San Antonio-based Front End Web developer. I'm a full stack programming bootcamp certificate recipient. As
                    an MBA, I'm well-rounded in the business of technology and dedicated to continuous learning. I'm a 3D printing hobbyist and
                    enthusiast. I love to build things, both physically and digitally.
                </span>
                <span className='font-semibold text-[#FA6E29]'>My Main Tech Stack:</span>
                <span className='font-normal'>React, TypeScript, Tailwind, Node.js, npm, Github</span>
                <span className='font-semibold text-[#FA6E29]'>Other Technology:</span>
                <span className='font-normal'>
                    Markdown, Bootstrap, JavaScript, jQuery, Express, Jest, mongodb, mysql, git, GitLab, Heroku, Adobe Illustrator, Photoshop,
                    bash,Powershell, Raspberry Pi, Regex, Wordpress
                </span>
                <span className='font-semibold text-[#FA6E29]'>Resume:</span>
                <span className='font-normal'>Current - Front End Web Developer / Full Stack Coding Bootcamp Teacher Assistant</span>
                <span>Previous: Technical Support, IT Systems Admin, Customer Service, Supervisor</span>
            </div>
        </div>
    );
}

export default Blurbs;
