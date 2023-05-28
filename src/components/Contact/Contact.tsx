import { useState } from "react";
import { FaComment, FaEnvelope, FaGithubAlt, FaLinkedin, FaStackOverflow, FaTwitterSquare } from "react-icons/fa";
import BlueSubtitle from "../../common/BlueSubtitle";
import ContactBtn from "./ContactBtn";
import ContactForm from "./ContactForm";

function Contact() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleOpenContactModal = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseContactModal = () => {
        setIsContactModalOpen(false);
    };
    return (
        <div className='flex flex-col h-full border border-[#64A4CE]'>
            <BlueSubtitle subtitleText={"Contacting Jessica"} />
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
                {/* TODO: make contact form functional */}
                <ContactBtn title='Message Me' label={"Message"} link={""} icon={<FaComment />} onClick={handleOpenContactModal} />
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
            {/* Contact Form Modal */}
            {isContactModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
                    <div className='bg-white rounded p-8'>
                        <h2 className='text-2xl font-bold mb-2'>Let's Connect!</h2>
                        <h3 className='font-bold mb-2'>Send me a message 😙</h3>
                        <ContactForm onClose={handleCloseContactModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
