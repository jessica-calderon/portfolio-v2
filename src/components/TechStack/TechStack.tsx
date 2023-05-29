import React, { useState, useEffect } from "react";
import Subtitle from "../../common/Subtitle";
const TechStack: React.FC = () => {
    const [position, setPosition] = useState(0);
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const contentWidth = contentRef.current?.offsetWidth || 0;
        const marqueeWidth = contentRef.current?.parentElement?.offsetWidth || 0;

        if (contentWidth > marqueeWidth) {
            const interval = setInterval(() => {
                setPosition((prevPosition) => prevPosition - 1);
            }, 30);

            return () => {
                clearInterval(interval);
            };
        }
    }, []);

    return (
        <>
            <Subtitle subtitle={"My Main Tech Stack"} />
            <span className='font-semibold animate-pulse'>React, TypeScript, Tailwind, Node.js, npm, Github</span>
            <Subtitle subtitle={"Other Technology"} />
            <div className=''>
                <span className=''>
                    Markdown, Bootstrap, JavaScript, jQuery, Express, Jest, mongodb, mysql, git, GitLab, Heroku, Adobe Illustrator & Photoshop, bash,
                    Powershell, Raspberry Pi, Regex, Wordpress
                </span>
            </div>
        </>
    );
};

export default TechStack;
