import React, { useState } from "react";
import ClickableImage from "./ClickableImage";
import Modal from "../../common/Modal";

interface Props {
    images: string[];
    labels: string[];
    onClick: (index: number) => void;
}

const placeholderImage = "https://via.placeholder.com/300x300";

const ImageGrid: React.FC<Props> = ({ images, labels, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div className='flex flex-col w-full mx-2'>
            <div className='flex flex-row gap-8 justify-between w-full'>
                <ClickableImage label={"One"} src={placeholderImage} onClick={handleOpenModal} />
                <ClickableImage label={"Two"} src={placeholderImage} onClick={handleOpenModal} />
                <ClickableImage label={"Three"} src={placeholderImage} onClick={handleOpenModal} />
                <ClickableImage label={"Four"} src={placeholderImage} onClick={handleOpenModal} />
            </div>
            <div className='flex flex-row gap-8 justify-between w-full'>
                <ClickableImage label={"Five"} src={placeholderImage} onClick={handleOpenModal} />
                <ClickableImage label={"Six"} src={placeholderImage} onClick={handleOpenModal} />
                <ClickableImage label={"Seven"} src={placeholderImage} onClick={handleOpenModal} />
                <ClickableImage label={"Eight"} src={placeholderImage} onClick={handleOpenModal} />
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal} description={"Project #xxx"}>
                <p>This is the modal content.</p>
            </Modal>
        </div>
    );
};

export default ImageGrid;
