import React from "react";
import BlueSubtitle from "../../common/BlueSubtitle";

const details = [
    { category: "Status:", text: "Learning" },
    { category: "Here for:", text: "Networking + coding" },
    { category: "Hometown:", text: "San Antonio, Texas" },
    { category: "Education:", text: "Grad / professional school" },
    { category: "Occupation:", text: "Front End Developer" },
];

const Details: React.FC = () => {
    return (
        <div className='border border-[#B2D0ED]'>
            <BlueSubtitle subtitleText={"Jessica's Details"} />
            <table className='w-full p-1 bg-white'>
                <tbody className='p-2'>
                    {details.map((details, index) => (
                        <tr key={index} className='border-4 border-white'>
                            <td className='py-2 w-[30%] text-left px-3 border-r-4 border-white text-sm text-[#07359E] font-semibold bg-[#B2D0ED]'>
                                {details.category}
                            </td>
                            <td className='py-2 px-3 text-sm text-left text-black bg-[#D7E6FA]'>{details.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Details;
