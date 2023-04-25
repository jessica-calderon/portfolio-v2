import React from 'react';
import ProfilePic from '../../assets/ProfilePic.png';

interface ProfileCardProps {
	name: string;
	bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio }) => {
	return (
		<div className="flex-col p-4">
			<div className="flex flex-row w-full">
				<h2 className="text-lg font-bold">{name}</h2>
			</div>

			<div className="flex flex-row gap-2 p-1">
				<img
					className="h-16 w-16 object-cover"
					src="https://myspace.com/common/images/user.png"
					alt="No profile pic"
				/>
				<div className="text-left ">
					<p className="text-gray-600">{bio}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
