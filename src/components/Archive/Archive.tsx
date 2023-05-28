import React from "react";
import Title from "../../common/Title";

const archive = [
  { version: "v3.0", text: "Lorem ipsum blah blah blah", image: "https://via.placeholder.com/300x300", date: "x/x/xx" },
  { version: "v2.0", text: "Lorem ipsum blah blah blah", image: "https://via.placeholder.com/300x300", date: "x/x/xx" },
  { version: "v1.0", text: "Lorem ipsum blah blah blah", image: "https://via.placeholder.com/300x300", date: "x/x/xx" },
];

function Archive() {
  return (
    <div className='flex flex-col'>
      <Title titleText="Jessica's Archive" />
      <div className='flex flex-row font-bold'>
        <div className='text-sm ml-1 mt-1'>
          <span className='mr-1'>Displaying</span>
          <span className='text-red-700 mr-1'>3</span>
          of
          <span className='text-red-700 mx-1'>3</span>previous iterations of this site
        </div>
      </div>
      <div className='flex flex-col'>
        <table className='w-full p-1 bg-white'>
          <tbody className='p-2'>
            {archive.map((entry, index) => (
              <tr key={index} className='border-4 border-white'>
                <td className='py-2 w-[30%] text-center px-3 border-r-4 border-white bg-[#FA6E29] bg-opacity-90 text-[#07359E] text-sm font-bold'>
                  <div className='flex flex-col items-center'>
                    <span>{entry.version}</span>
                    <img
                      width='150px'
                      src={entry.image}
                      alt={`Placeholder for ${entry.version}`}
                      className='mb-4 mt-2'
                    />
                  </div>
                </td>
                <td className='py-2 px-3 text-normal text-left text-black bg-[#E4BF82]'>
                  <div className='flex flex-col items-start h-[200px]'>
                    <span className='text-normal font-bold mb-2'>{entry.date}</span>
                    <span>{entry.text}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Archive;
