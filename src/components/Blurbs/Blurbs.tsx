import React from "react";
import Subtitle from "../../common/Subtitle";
import Title from '../../common/Title';
function Blurbs() {
    return (
        <div className='flex flex-col h-full'>
            <Title titleText={"Jessica's Blurbs"}/>
            <div className='text-left ml-1 flex flex-col gap-1 h-full'>
                <Subtitle subtitle={"About Me"} />
                <span className='font-normal'>
                    Hey, I'm Jessica. I'm a San Antonio-based Front End Web developer. I'm a full stack programming bootcamp certificate recipient. As
                    an MBA, I'm well-rounded in the business of technology and dedicated to continuous learning. I'm a 3D printing hobbyist and
                    enthusiast. I love to build things, both physically and digitally.
                </span>
                <Subtitle subtitle={"My Main Tech Stack"} />
                <span className='font-normal'>React, TypeScript, Tailwind, Node.js, npm, Github</span>
                <Subtitle subtitle={"Other Technology"} />
                <span className='font-normal'>
                    Markdown, Bootstrap, JavaScript, jQuery, Express, Jest, mongodb, mysql, git, GitLab, Heroku, Adobe Illustrator, Photoshop,
                    bash,Powershell, Raspberry Pi, Regex, Wordpress
                </span>
                <Subtitle subtitle={"Resume"} />
                <span className='font-normal'>Current - Front End Web Developer / Full Stack Coding Bootcamp Teacher Assistant</span>
                <span>Previous: Technical Support, IT Systems Admin, Customer Service, Supervisor</span>
            </div>
        </div>
    );
}

export default Blurbs;
