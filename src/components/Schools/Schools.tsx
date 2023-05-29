import React from "react";
import BlueSubtitle from "../../common/BlueSubtitle";

const schools = [
    { name: "UTSA", details: "Full Stack Web Development", graduated: "Oct. 2022" },
    { name: "TAMUSA", details: "Master of Business Administration", graduated: "May 2020" },
    { name: "TAMUSA", details: "Bachelor's - General Business", graduated: "Dec. 2018" },
    { name: "Alamo Colleges", details: "A.A.S, A.S - Business", graduated: "2015 / 2017" },
];

const Schools: React.FC = () => {
    return (
        <div className='border border-[#B2D0ED]'>
            <BlueSubtitle subtitleText={"Jessica's Schools"} />
            <table className='w-full p-1 bg-white'>
                <tbody className='p-2'>
                    {schools.map((schools, index) => (
                        <tr key={index} className='border-4 border-white'>
                            <td className='py-2 w-[70%] text-left px-3 border-r-4 border-white  bg-[#B2D0ED]'>
                                <div className='flex flex-col w-full'>
                                    <span className='text-[#07359E] font-semibold text-sm'>{schools.name}</span>
                                    <span className='text-sm text-black'>{schools.details}</span>
                                </div>
                            </td>
                            <td className='py-2 px-3 text-sm text-left text-black bg-[#D7E6FA]'>{schools.graduated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schools;
