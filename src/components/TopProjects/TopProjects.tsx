import React from "react";
import ImageGrid from "./ImageGrid";
import "./TopProjects.css";
import Title from "../../common/Title";

function TopProjects() {
    const images = [
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/300x300",
    ];

    const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7", "Label 8"];

    const handleImageClick = (index: number) => {
        console.log(`Clicked on image ${index + 1}`);
    };
    return (
        <div className='flex flex-col h-full'>
            <Title titleText={"Jessica's Portfolio"} />
            <div className='image-grid text-left ml-1 flex justify-between w-full'>
                <ImageGrid images={images} labels={labels} onClick={handleImageClick} />
            </div>
        </div>
    );
}

export default TopProjects;
