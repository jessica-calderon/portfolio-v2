import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TopBanner from '../../components/TopBanner/TopBanner';
import LeftCol from '../LeftCol/LeftCol';
import RightCol from '../RightCol/RightCol';

function BodyContainer() {
	return (
		<div className="flex flex-col w-full items-center justify-center">
			<div className="flex flex-col w-full items-center justify-center"></div>
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
		<div className="w-full flex flex-row items-center justify-center text-center">
		<Footer />
		</div>
		</div>
	);
}
export default BodyContainer;
