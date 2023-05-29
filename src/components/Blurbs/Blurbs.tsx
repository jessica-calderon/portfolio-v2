import Title from "../../common/Title";
import About from "../About/About";
import ResumeBlurb from "../ResumeBlurb/ResumeBlurb";
import TechStack from "../TechStack/TechStack";
import Subtitle from "../../common/Subtitle";
function Blurbs() {
    return (
        <div className='flex flex-col h-full'>
            <Title titleText={"Jessica's Blurbs"} />
            <div id='about' className='text-left ml-1 flex flex-col gap-1 h-full'>
                <About />
                <TechStack />
                <ResumeBlurb />
                <Subtitle subtitle={"Built With"} />
                <span className='font-normal'>
                    This website was built with <strong>React, Typescript, CSS, and Tailwind</strong>
                </span>
                <div className='flex flex-row'>
                    <div className='mt-2 text-[32px] animate-bounce mr-2'>👇</div>
                    <div className='flex flex-col'>
                        <span className='font-normal'>
                            Check out some of my previous projects below. <br />
                            <em className='text-sm'>Pssst...Click the images for a closer look!</em>{" "}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blurbs;
