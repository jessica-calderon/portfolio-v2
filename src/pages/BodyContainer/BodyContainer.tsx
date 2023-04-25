import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import TopBanner from '../../components/TopBanner/TopBanner';

function BodyContainer() {
	return (
		<div className="flex flex-col w-[75%] h-screen bg-white">
			<TopBanner />
			<Navbar />

			<div className="my-4 px-4">
				{' '}
				<div className="flex flex-row justify-start items-start">
					<ProfileCard
						name="Jessica E. Calderon"
						bio="Software Engineer - Front End Developer"
					/>
				</div>
			</div>
		</div>
	);
}

export default BodyContainer;
