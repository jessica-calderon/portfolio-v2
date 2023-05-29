import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import Modal from "../../common/Modal";
import ContactForm from "../ContactForm/ContactForm";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenContactModal = () => {
        setIsOpen(true);
    };

    const handleCloseContactModal = () => {
        setIsOpen(false);
    };
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    }, [isResumeModalOpen]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeError = () => {
        setIsLoading(false);
    };
    const handleOpenResumeModal = () => {
        setIsLoading(true);
        setIsResumeModalOpen(true);
    };

    const handleCloseResumeModal = () => {
        setIsResumeModalOpen(false);
    };

    return (
        <nav className='flex flex-col sm:flex-row gap-2 items-center justify-center bg-[#6599CC] py-1 h-full w-full text-white'>
            <div className='flex flex-wrap justify-center px-4'>
                {" "}
                <Link to='/' className='navbar-link'>
                    Home
                </Link>
                <span className='mx-1'>|</span>
                <button className='navbar-link hover:text-red-700' onClick={handleOpenContactModal}>
                    Message
                </button>
                <span className='mx-1'>|</span>
                <a href='https://github.com/jessica-calderon' target='_blank' rel='noopener noreferrer' className='navbar-link'>
                    GitHub
                </a>
                <span className='mx-1'>|</span>
                <a href='https://www.linkedin.com/in/jessica-calderon-00' target='_blank' rel='noopener noreferrer' className='navbar-link'>
                    LinkedIn
                </a>
                <span className='mx-1'>|</span>
                <a href='mailto:calderonjessica13@yahoo.com' className='navbar-link'>
                    Email
                </a>
                <span className='mx-1'>|</span>
                <button className='navbar-link hover:text-red-700' onClick={handleOpenResumeModal}>
                    Resume
                </button>
            </div>
            <Modal onClose={handleCloseContactModal} description="Let's Connect!" isOpen={isOpen}>
                <h2 className='font-bold text-black mb-2'>Send me a message 😙</h2>
                <ContactForm onClose={handleCloseContactModal} />
            </Modal>
            <Modal isOpen={isResumeModalOpen} onClose={handleCloseResumeModal} description='My Professional Resume'>
                <div className='iframe-container p-1 sm:w-[500px] sm:h-[300px] md:w-[700px] md:h-[500px]'>
                    {isLoading && (
                        <div className='flex items-center justify-center h-full' style={{ minHeight: "100%" }}>
                            <Loader />
                        </div>
                    )}
                    <iframe
                        className='w-full h-full'
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        title="Jessica Calderon's Resume"
                        src='https://drive.google.com/file/d/1r-Bs-a9Eqh5xfufXiNp-TrtaubsCV84-/preview'
                    />
                </div>
            </Modal>
        </nav>
    );
}

export default Navbar;
