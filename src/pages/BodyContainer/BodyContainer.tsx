import Navbar from '../../components/Navbar/Navbar';
import Status from '../../components/Status/Status';
import TopBanner from '../../components/TopBanner/TopBanner';
import Blurbs from '../../components/Blurbs/Blurbs';
import LeftCol from '../LeftCol/LeftCol';
import RightCol from '../RightCol/RightCol';

function BodyContainer() {
	return (
		<div className="flex flex-col w-[70%] h-full bg-white">
			<TopBanner />
			<Navbar />

			<div className="my-4 px-4 flex flex-row gap-3">
				<div className="flex-grow-1 w-[40%]">
					<LeftCol />
				</div>
				<div className="flex-grow-1 w-[60%]">
					<RightCol />
				</div>
			</div>
		</div>
	);
}
export default BodyContainer;
