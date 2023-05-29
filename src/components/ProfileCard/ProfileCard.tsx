import React, { useState, useEffect } from "react";
import EightBitMe from "../../assets/images/8bitme.png";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
interface ProfileCardProps {
    name: string;
    bio: string;
    pronouns: string;
    state: string;
    country: string;
    lastUpdated: string | number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio, pronouns, state, country, lastUpdated }) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    }, [isResumeModalOpen]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleOpenResumeModal = () => {
        setIsLoading(true); // set isLoading to true when opening the modal
        setIsResumeModalOpen(true);
    };

    const handleCloseResumeModal = () => {
        setIsResumeModalOpen(false);
    };

    return (
		<div className="flex-col p-2">
		<div className="flex flex-row w-full text-left">
		  <h2 className="text-lg font-bold">{name}</h2>
		</div>
  
		<div className="flex flex-row p-1 items-center justify-start">
		  <div>
			<img
			  className="md:h-[150px] w-[150px] object-cover"
			  src={EightBitMe}
			  alt="8 Bit Jessica"
			/>
			<div className="flex flex-row items-center mt-2 ml-1">
			  <span className="text-xs font-bold">Mood:</span>
			  <span className="text-xs ml-1">motivated 😈</span>
			</div>
			<div className="flex flex-row items-center mt-2 ml-1">
			  <span className="text-xs font-semibold mt-px">View My:</span>
			  <button onClick={handleOpenResumeModal}>
				<span className="text-xs font-bold mx-1 text-[#2653a7] hover:text-red-700 animate-pulse">
				  Resume
				</span>
			  </button>
			</div>
		  </div>
		  <div id="about" className="text-sm text-left h-[210px] justify-start gap-5 flex flex-col ml-4">
			<p className="text-gray-600">{bio}</p>
			<p className="text-gray-600">{pronouns}</p>
			<p className="text-gray-600">{state}</p>
			<p className="text-gray-600">{country}</p>
			<p className="text-gray-600">Last Updated: {lastUpdated}</p>
		  </div>
		</div>
		<Modal
		  isOpen={isResumeModalOpen}
		  onClose={handleCloseResumeModal}
		  description="My Professional Resume"
		>
		  <div className="iframe-container p-1 sm:w-[500px] sm:h-[300px] md:w-[700px] md:h-[500px]">
			{isLoading && (
			  <div
				className="flex items-center justify-center h-full"
				style={{ minHeight: "100%" }} // Added minHeight to make sure Loader takes up the full height
			  >
				<Loader />
			  </div>
			)}
			<iframe
			  className="w-full h-full"
			  onLoad={handleIframeLoad}
			  title="Jessica Calderon's Resume"
			  src="https://drive.google.com/file/d/1r-Bs-a9Eqh5xfufXiNp-TrtaubsCV84-/preview"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ProfileCard;
