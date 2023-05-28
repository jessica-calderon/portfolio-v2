import React from "react";
import ContactBtn from "./ContactBtn";
import { FaEnvelope, FaGithubAlt, FaLinkedin, FaComment, FaStackOverflow, FaTwitterSquare } from "react-icons/fa";

function Contact() {
    return (
        <div className='flex flex-col h-full border border-[#64A4CE]'>
            <div className='flex p-1 items-center text-left h-[25px] bg-[#64A4CE] text-white font-bold'>Contacting Jessica</div>
            <div className='flex flex-row items-center justify-between p-1'>
                <ContactBtn title='calderonjessica13@yahoo.com' label={"Email"} icon={<FaEnvelope />} link={"mailto:calderonjessica13@yahoo.com"} />
                <ContactBtn
                    title='Github.com/jessica-calderon'
                    label={"Github"}
                    icon={<FaGithubAlt />}
                    link={"https://github.com/jessica-calderon"}
                />
            </div>
            <div className='flex flex-row items-center justify-start p-1'>
                <ContactBtn
                    title='LinkedIn.com/in/jessica-calderon'
                    label={"LinkedIn"}
                    icon={<FaLinkedin />}
                    link={"https://LinkedIn.com/in/jessica-calderon"}
                />
                {/* TODO: replace linkedin link with a contact modal */}
                <ContactBtn title='Message Me' label={"Message"} icon={<FaComment />} link={"https://LinkedIn.com/in/jessica-calderon"} />
            </div>
            <div className='flex flex-row items-center justify-start p-1'>
                <ContactBtn
                    title='Stackoverflow Profile'
                    label={"StackOverflow"}
                    icon={<FaStackOverflow />}
                    link={"https://stackoverflow.com/users/18368202/calderonjess"}
                />
                <ContactBtn title='' label={"Twitter"} icon={<FaTwitterSquare />} link={"https://twitter.com/webjessc"} />
            </div>
        </div>
    );
}

export default Contact;
