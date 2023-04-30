import React from 'react'
import ImageGrid from './ImageGrid'
import './TopProjects.css'

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
    <div className="flex flex-col h-full">
    <div className="px-1 flex w-full h-[25px] items-center bg-[#E4BF82] font-semibold text-[#FA6E29] ">
      <span className='ml-px'>Jessica's Portfolio</span>
    </div>
    <div className="image-grid text-left ml-1 flex ">
      <ImageGrid images={images} labels={labels} onClick={handleImageClick}/>
 
    </div>
  </div>
  )
}

export default TopProjects