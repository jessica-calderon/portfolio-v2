import Navbar from '../../components/Navbar/Navbar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Status from '../../components/Status/Status';
import TopBanner from '../../components/TopBanner/TopBanner';
import Contact from '../../components/Contact/Contact';
import Blurbs from '../../components/Blurbs/Blurbs';
import Interests from '../../components/Interests/Interests';

function BodyContainer() {
  return (
    <div className="flex flex-col w-[70%] h-full bg-white">
      <TopBanner />
      <Navbar />

      <div className="my-4 px-4 flex flex-col">
        <div
          id="row-1"
          className="flex flex-row justify-between gap-2 items-start w-full"
        >
          <div className=" w-[42%]">
            <ProfileCard name="Jessica E. Calderon" bio="Software Engineer" />
          </div>
          <div className="w-[58%]">
            <Status />
          </div>
        </div>

        <div
          id="row-2"
          className="flex flex-row justify-between gap-2 items-start w-full"
        >
          <div className="flex-grow-1 w-[42%] mt-2">
            <Contact />
          </div>
          <div className="flex-grow-1 w-[58%] mt-2">
            <Blurbs />
          </div>
        </div>
        <div
          id="row-3"
          className="flex flex-row justify-between gap-2 items-start w-full"
        >
          <div className="flex-grow-1 w-[42%] mt-2">
            <Interests />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BodyContainer