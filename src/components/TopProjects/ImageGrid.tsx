import React, { useState } from "react";
import BantrScreenshot from "../../assets/images/portfolio/bantr-screenshot.png";
import Bantr from "../../assets/images/portfolio/bantr.png";
import DreamNotesScreenshot from "../../assets/images/portfolio/dream-notes.png";
import DreamNotes from "../../assets/images/portfolio/dreamNotes.png";
import PollenTrackerScreenshot from "../../assets/images/portfolio/pollen-tracker-static.png";
import PollenTracker from "../../assets/images/portfolio/pollenTracker.png";
import ReadMEScreenshot from "../../assets/images/portfolio/readme-generator-static.png";
import ReadME from "../../assets/images/portfolio/Readme.png";
import TalkingTechScreenshot from "../../assets/images/portfolio/talking-tech-static.png";
import TeamProfScreenshot from "../../assets/images/portfolio/team-profile-generator.png";
import TeamProf from "../../assets/images/portfolio/teamProf.png";
import TechBlog from "../../assets/images/portfolio/techBlog.png";
import WorkDayScheduler from "../../assets/images/portfolio/WDScheduler.png";
import WorkDayScreenshot from "../../assets/images/portfolio/work-day-scheduler-static.png";
import ClickableImage from "../../common/ClickableImage";
import Modal from "../../common/Modal";
import UIButton from "../../ui-components/UIButton";
import CQ from "../../assets/images/portfolio/CQ.png";
import CodeQuizScreenshot from "../../assets/images/portfolio/code-quiz-static.png";

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
        <div className='flex flex-col w-full mx-1'>
            <div className='flex flex-row font-bold'>
                <div className='text-sm mt-1'>
                    <span className='mr-1'>Displaying</span>
                    <span className='text-red-700 mr-1'>8</span>
                    of
                    <a href='https://github.com/jessica-calderon/' rel='noreferrer' target="_blank" className='text-red-700 hover:text-[#07359E] mx-1'>a lot more</a>projects
                </div>
                </div>
            <div className='flex flex-row gap-8 justify-between w-full'>
                <ClickableImage
                    label={"Bantr"}
                    src={Bantr}
                    onClick={() =>
                        handleOpenModal(
                            "Bantr",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={BantrScreenshot} alt='Bantr' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>
                                        A full-stack web application that allows learners to connect with one another through blog posts and live
                                        chat. Users can sign up, login, view, create, and edit posts and comments, and chat with online users.
                                    </p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express.js, MySQL,
                                        Sequelize, Socket.io, Handlebars.js, Heroku, Bootstrap, and jQuery.
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/bantr'>Repository</UIButton>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"Dream Notes"}
                    src={DreamNotes}
                    onClick={() =>
                        handleOpenModal(
                            "Dream Notes",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={DreamNotesScreenshot} alt='Dream Notes' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>
                                        A MERN full-stack web application that allows users share their dreams, sign up, login, and comment on other
                                        dream posts.
                                    </p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express.js, React.js,
                                        MongoDB, NoSQL, bCrypt, Heroku
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/bantr'>Repository</UIButton>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"Talking Tech"}
                    src={TechBlog}
                    onClick={() =>
                        handleOpenModal(
                            "Talking Tech",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={TalkingTechScreenshot} alt='Talking Tech' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>
                                        A full-stack MVC, CMS style web application that allows users create tech-based blog posts. Users can sign up,
                                        login, view, create, and edit posts and comments.
                                    </p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express.js, MySQL,
                                        Sequelize,Handlebars.js, Heroku, Bootstrap, and jQuery.
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/talking-tech'>Repository</UIButton>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"Team Profile Generator"}
                    src={TeamProf}
                    onClick={() =>
                        handleOpenModal(
                            "Team Profile Generator",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={TeamProfScreenshot} alt='Team Profile Generator' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>A back-end Node.js CLI application that allows managers to generate front-end team profiles.</p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Bootstrap, jQuery
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/team-profile-generator'>Repository</UIButton>
                            </div>
                        )
                    }
                />
            </div>
            <div className='flex flex-row gap-8 justify-between w-full'>
                <ClickableImage
                    label={"Pollen Tracker"}
                    src={PollenTracker}
                    onClick={() =>
                        handleOpenModal(
                            "Pollen Tracker",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={PollenTrackerScreenshot} alt='Pollen Tracker' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>
                                        A front-end web application that utilizes web APIs to track local pollen and air quality levels based on user
                                        searched cities.
                                    </p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript, Web APIs
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/pollen-tracker'>Repository</UIButton>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"Work Day Scheduler"}
                    src={WorkDayScheduler}
                    onClick={() =>
                        handleOpenModal(
                            "Work Day Scheduler",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={WorkDayScreenshot} alt='Work Day Scheduler' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>
                                        A front-end web application that utilizes web APIs and localStorage to allow users to input and save hourly
                                        tasks.
                                    </p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/work-day-scheduler'>Repository</UIButton>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"ReadME Generator"}
                    src={ReadME}
                    onClick={() =>
                        handleOpenModal(
                            "ReadME Generator",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={ReadMEScreenshot} alt='ReadME Generator' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>A back-end Node.js CLI application that allows developers to generate Markdown ReadME files.</p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> JavaScript, Node.js, Markdown, Inquirer
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/readme-generator'>Repository</UIButton>
                            </div>
                        )
                    }
                />
                <ClickableImage
                    label={"Code Quiz"}
                    src={CQ}
                    onClick={() =>
                        handleOpenModal(
                            "Code Quiz",
                            <div className='flex flex-col gap-2 items-center max-w-[500px]'>
                                <div className='mb-2'>
                                    <img src={CodeQuizScreenshot} alt='Code Quiz' style={{ maxWidth: "100%", height: "auto" }} />
                                </div>
                                <div>
                                    <p>A timed, front-end, web-based quiz focused on JavaScript fundamentals.</p>
                                    <p>
                                        <span className='font-bold'>Technologies Used:</span> HTML, CSS, JavaScript
                                    </p>
                                </div>
                                <UIButton href='https://github.com/jessica-calderon/code-quiz'>Repository</UIButton>
                            </div>
                        )
                    }
                />
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal} description={`Project: ${modalTitle}`}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default ImageGrid;
