import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../common/Modal";
import ContactForm from "../ContactForm/ContactForm";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <nav className='flex flex-row gap-2 items-center justify-center bg-[#6599CC] py-1 h-[40px] w-full text-white'>
            <Link to='/' className='navbar-link'>
                Home |
            </Link>
            <Link to='/about' className='navbar-link'>
                About |
            </Link>
            <button className='navbar-link hover:text-red-700' onClick={handleOpenModal}>
                Message |
            </button>
            <a href='https://github.com/jessica-calderon' target='_blank' rel='noopener noreferrer' className='navbar-link'>
                GitHub |
            </a>
            <a href='https://www.linkedin.com/in/jessica-calderon-00' target='_blank' rel='noopener noreferrer' className='navbar-link'>
                LinkedIn |
            </a>
            <a href='mailto:calderonjessica13@yahoo.com' className='navbar-link'>
                Email
            </a>
            <Modal onClose={handleCloseModal} description="Let's Connect!" isOpen={isOpen}>
                <h2 className='font-bold text-black mb-2'>Send me a message 😙</h2>
                <ContactForm onClose={handleCloseModal} />
            </Modal>
        </nav>
    );
}

export default Navbar;
