import Navbar from '../../components/Navbar/Navbar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Status from '../../components/Status/Status';
import TopBanner from '../../components/TopBanner/TopBanner';
import Contact from '../../components/Contact/Contact';

function BodyContainer() {
	return (
		<div className="flex flex-col w-[70%] h-screen bg-white">
			<TopBanner />
			<Navbar />

			<div className="my-4 px-4 flex flex-col">
				<div className="flex flex-row justify-between items-start w-full">
					<div className=" w-[42%]">
						<ProfileCard
							name="Jessica E. Calderon"
							bio="Software Engineer"
						/>
					</div>
					<div className=" w-[58%]">
						<Status />
					</div>
				</div>
				<div className="flex-grow-1 w-[42%] mt-2">
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default BodyContainer;
