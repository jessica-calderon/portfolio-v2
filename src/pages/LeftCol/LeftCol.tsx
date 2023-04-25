import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Contact from '../../components/Contact/Contact';
import Interests from '../../components/Interests/Interests';

function LeftCol() {
	return (
		<div className="flex flex-col gap-2">
			<ProfileCard name="Jessica E. Calderon" bio="Software Engineer" />
			<Contact />
			<Interests />
		</div>
	);
}

export default LeftCol;
