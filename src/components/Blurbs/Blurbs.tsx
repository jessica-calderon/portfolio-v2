import React from 'react';

function Blurbs() {
	return (
		<div className="flex flex-col h-full">
			<div className="px-1 flex w-full h-[25px] items-center bg-[#E4BF82] font-semibold text-[#FA6E29] ">
				Jessica's Blurbs
			</div>
			<div className="text-left flex flex-col gap-1 h-full">
				<span className="font-semibold text-[#FA6E29]">About Me:</span>
				<span className="font-normal">
					Hey, I'm Jessica. I'm a San Antonio-based Front End Web
					developer. I'm a full stack programming bootcamp certificate
					recipient. As an MBA, I'm well-rounded in the business of
					technology and dedicated to continuous learning. I'm a 3D
					printing hobbyist and enthusiast. I love to build things,
					both physically and digitally.
				</span>
        <span className="font-semibold text-[#FA6E29]">My Main Tech Stack:</span>
        <span className="font-normal">
          React, TypeScript, Tailwind, Node.js
        </span>
			</div>
		</div>
	);
}

export default Blurbs;
