import React, { useState } from "react";
import ClickableImage from "../../common/ClickableImage";
import Modal from "../../common/Modal";
import Bantr from "../../assets/images/portfolio/bantr.png";
import TeamProf from "../../assets/images/portfolio/teamProf.png";
import TechBlog from "../../assets/images/portfolio/techBlog.png";
import DreamNotes from "../../assets/images/portfolio/dreamNotes.png";
import BantrScreenshot from "../../assets/images/portfolio/bantr-screenshot.png";

const placeholderImage = "https://via.placeholder.com/300x300";

const ImageGrid: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

    const handleOpenModal = (title: string, content: JSX.Element) => {
        setModalTitle(title);
        setModalContent(content);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex flex-col w-full mx-2'>
            <div className='flex flex-row gap-8 justify-between w-full'>
            <ClickableImage
                    label={"Bantr"}
                    src={Bantr}
                    onClick={() =>
                        handleOpenModal(
                            "Bantr",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={BantrScreenshot} alt='Bantr' style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                                <div>
                                <p>
                                    A full-stack web application that allows learners to connect with one another through blog posts and live chat.
                                    Users can sign up, login, view, create, and edit posts and comments, and chat with online users.
                                </p>
                                <p>
                                    <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express.js, MySQL,
                                    Sequelize, Socket.io, Handlebars.js, Heroku, Bootstrap, and jQuery.
                                </p>
                                </div>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"Dream Notes"}
                    src={DreamNotes}
                    onClick={() => handleOpenModal("Dream Notes", <p>This is the Dream Notes modal content.</p>)}
                />
                <ClickableImage
                    label={"Talking Tech"}
                    src={TechBlog}
                    onClick={() => handleOpenModal("Talking Tech", <p>This is the Talking Tech modal content.</p>)}
                />
                <ClickableImage
                    label={"Team Profile Generator"}
                    src={TeamProf}
                    onClick={() => handleOpenModal("Team Profile Generator", <p>This is the Team Profile Generator modal content.</p>)}
                />
            </div>
            <div className='flex flex-row gap-8 justify-between w-full'>
                <ClickableImage
                    label={"Five"}
                    src={placeholderImage}
                    onClick={() => handleOpenModal("Five", <p>This is the modal content for Five.</p>)}
                />
                <ClickableImage
                    label={"Six"}
                    src={placeholderImage}
                    onClick={() => handleOpenModal("Six", <p>This is the modal content for Six.</p>)}
                />
                <ClickableImage
                    label={"Seven"}
                    src={placeholderImage}
                    onClick={() => handleOpenModal("Seven", <p>This is the modal content for Seven.</p>)}
                />
                <ClickableImage
                    label={"Eight"}
                    src={placeholderImage}
                    onClick={() => handleOpenModal("Eight", <p>This is the modal content for Eight.</p>)}
                />
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal} description={`Project: ${modalTitle}`}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default ImageGrid;
