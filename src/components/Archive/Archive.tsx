import React, { useState } from "react";
import Title from "../../common/Title";
import Modal from "../../common/Modal";
import v1 from "../../assets/images/archive/v1.png";
import v2 from "../../assets/images/archive/v2.png";
import v3 from "../../assets/images/archive/v3.png";
import v1Screenshot from "../../assets/images/archive/v1-screenshot.png";
import v2Screenshot from "../../assets/images/archive/v2-screenshot.png";
import v3Screenshot from "../../assets/images/archive/v3-screenshot.png";

const archive = [
    {
        version: "v3.0",
        text: "I wanted something more eye-catching, so I tore my portfolio apart and transformed it with Bootstrap and custom templates. I kept the homepage much less bloated -- only leaving an About Me section, and transferring my Portfolio Gallery, Resume, and Contact to dedicated pages. I also added this Site Archive section to keep a visual record of my previous iterations of this site. My own Wayback Machine, if you will. ",
        image: v3,
        date: "July 2022",
        screenshot: v3Screenshot,
    },
    {
        version: "v2.0",
        text: "By this time I'd discovered the amazing world of CSS frameworks. Having just found Bulma, I took the opportunity to revamp my portfolio into a sleek and mobile-first UI.",
        image: v2,
        date: "June 2022",
        screenshot: v2Screenshot,
    },
    {
        version: "v1.0",
        text: "Unfortunately, I don't have any screenshots or previews of my first portfolio style -- but it was basically a replica of my first front-end Bootcamp homework assignment, pictured above. I was still rusty with my styling skills, so I took the code from my homework and tweaked it and turned it into my portfolio! Not the prettiest, but it got the job done. ",
        image: v1,
        date: "May 2022",
        screenshot: v1Screenshot,
    },
];

function Archive() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<undefined | (typeof archive)[number]>(undefined); // Updated initial state

    const handleOpenModal = (content: (typeof archive)[number]) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div className='flex flex-col'>
            <Title titleText="Jessica's Archive" />
            <div className='flex flex-row font-bold'>
                <div className='text-sm ml-1 mt-1'>
                    <span className='mr-1'>Displaying</span>
                    <span className='text-red-700 mr-1'>3</span>
                    of
                    <span className='text-red-700 mx-1'>3</span>previous iterations of this site
                </div>
            </div>
            <div className='flex flex-col'>
                <table className='w-full p-1 bg-white'>
                    <tbody className='p-2'>
                        {archive.map((entry, index) => (
                            <tr key={index} className='border-4 border-white'>
                                <td className='py-2 w-[30%] text-center px-3 border-r-4 border-white bg-[#FA6E29] bg-opacity-90 text-[#07359E] text-sm font-bold'>
                                    <div className='flex flex-col items-center'>
                                        <span>{entry.version}</span>
                                        <img
                                            onClick={() => handleOpenModal(entry)}
                                            width='150px'
                                            src={entry.image}
                                            alt={`Placeholder for ${entry.version}`}
                                            className='hover:opacity-90 mb-4 mt-2 cursor-pointer border border-2 border-[#125089]'
                                        />
                                    </div>
                                </td>
                                <td className='py-2 px-3 text-sm text-left text-black bg-[#E4BF82]'>
                                    <div className='flex flex-col items-start h-[200px]'>
                                        <span className='text-normal font-bold mb-2'>{entry.date}</span>
                                        <span>{entry.text}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isOpen && modalContent && (
                <Modal isOpen={isOpen} onClose={handleCloseModal} description={modalContent.version}>
                    <img className='md:w-[800px]' alt='modalContent.version' src={modalContent.screenshot} />
                </Modal>
            )}
        </div>
    );
}
export default Archive;
