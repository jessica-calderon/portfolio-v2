import React from 'react';
import ProfilePic from '../../assets/ProfilePic.png';

interface ProfileCardProps {
	name: string;
	bio: string;
	pronouns: string;
	location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio, pronouns, location }) => {
	return (
		<div className="flex-col p-2">
			<div className="flex flex-row w-full text-left">
				<h2 className="text-lg font-bold">{name}</h2>
			</div>

			<div className="flex flex-row p-1 items-left justify-start">
				<img
					className="h-16 w-16 object-cover"
					src="https://myspace.com/common/images/user.png"
					alt="No profile pic"
				/>
				<div className="text-left flex flex-col ml-4">
					<p className="text-gray-600">{bio}</p>
					<p className="text-gray-600">{pronouns}</p>
					<p className="text-gray-600">{location}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
