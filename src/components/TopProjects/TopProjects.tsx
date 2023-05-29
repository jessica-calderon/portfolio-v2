import React from "react";
import ImageGrid from "./ImageGrid";
import "./TopProjects.css";
import Title from "../../common/Title";

function TopProjects() {
    return (
        <div className='flex flex-col h-full'>
            <Title titleText={"Jessica's Portfolio"} />
            <div className='image-grid text-left ml-1 flex justify-between w-full'>
                <ImageGrid />
            </div>
        </div>
    );
}

export default TopProjects;
