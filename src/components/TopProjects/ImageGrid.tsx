import React from "react";
import ImagePlaceholder from "./Image";
import ClickableImage from "./ClickableImage";

interface Props {
    images: string[];
    labels: string[];
    onClick: (index: number) => void;
}

const placeholderImage = "https://via.placeholder.com/300x300";

const ImageGrid: React.FC<Props> = ({ images, labels, onClick }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-4'>
                <ClickableImage
                    label={"One"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ClickableImage
                    label={"Two"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ClickableImage
                    label={"Three"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ClickableImage
                    label={"Four"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>
            <div className='flex flex-row gap-4'>
                <ClickableImage
                    label={"Five"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ClickableImage
                    label={"Six"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ClickableImage
                    label={"Seven"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ClickableImage
                    label={"Eight"}
                    src={"https://via.placeholder.com/300x300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>
        </div>
    );
};

export default ImageGrid;
