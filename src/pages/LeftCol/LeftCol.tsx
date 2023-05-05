import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Contact from '../../components/Contact/Contact';
import Interests from '../../components/Interests/Interests';
import Details from '../../components/Details/Details';
import Schools from '../../components/Schools/Schools';

function LeftCol() {
	return (
		<div className="flex flex-col gap-2">
			<ProfileCard name="Jessica E. Calderon" bio="Software Engineer" pronouns={'She/Her'} location={'Texas'} />
			<Contact />
			<Interests />
			<Details />
			<Schools />
		</div>
	);
}

export default LeftCol;
