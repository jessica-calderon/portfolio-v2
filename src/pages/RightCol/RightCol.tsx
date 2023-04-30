import React from 'react';
import Status from '../../components/Status/Status';
import Blurbs from '../../components/Blurbs/Blurbs';
import TopProjects from '../../components/TopProjects/TopProjects';

export default function RightCol() {
	return (
		<div className="flex flex-col gap-2">
			<Status />
			<Blurbs />
			<TopProjects/>
		</div>
	);
}
