import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import LeftCol from '../LeftCol/LeftCol';
import RightCol from '../RightCol/RightCol';

function BodyContainer() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center"></div>
            <div className="flex flex-col w-[100%] md:w-[70%] h-full bg-white">
                <TopBanner />
                <Navbar />

                <div className="my-4 px-4 flex flex-col md:flex-row gap-3">
                    <div className="flex-grow-1 w-full md:w-[40%]">
                        <LeftCol />
                    </div>
                    <div className="flex-grow-1 w-full md:w-[60%]">
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
