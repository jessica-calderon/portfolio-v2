import Title from "../../common/Title";
import About from "../About/About";
import ResumeBlurb from "../ResumeBlurb/ResumeBlurb";
import TechStack from "../TechStack/TechStack";
function Blurbs() {
    return (
        <div className='flex flex-col h-full'>
            <Title titleText={"Jessica's Blurbs"} />
            <div className='text-left ml-1 flex flex-col gap-1 h-full'>
                <About />
                <TechStack />
                <ResumeBlurb />
            </div>
        </div>
    );
}

export default Blurbs;
