import React from "react";
import BlueSubtitle from "../../common/BlueSubtitle";

const interests = [
    { category: "General", text: "3D Printing, Making Things, Dogs" },
    {
        category: "Music",
        text: "Taylor Swift, The Maine, Halsey, Bishop Briggs, K Flay, The Pixies, The Cure, Mudvayne, Neutral Milk Hotel, Brian Jonestown Massacre",
    },
    { category: "Movies", text: "Evil Dead, Just Friends, Mean Girls, Bad Teacher, She's The Man, Death Proof" },
    {
        category: "TV",
        text: "Abbott Elementary, Degrassi, The Good Doctor, Buffy The Vampire Slayer, 90 Day Fiance, Love Island,  Yellow Jackets",
    },
    { category: "Games", text: "Bioshock Series, GTA V, TLOU, Uncharted Series, Spiderman Series, NFS Unbound, DOOM, The Sims" },
];

const Interests: React.FC = () => {
    return (
        <div className='border border-[#B2D0ED]'>
            <BlueSubtitle subtitleText={"Jessica's Interests"} />
            <table className='w-full p-1 bg-white'>
                <tbody className='p-2'>
                    {interests.map((interest, index) => (
                        <tr key={index} className='border-4 border-white'>
                            <td className='py-2 w-[30%] text-left px-3 border-r-4 border-white text-sm text-[#07359E] font-semibold bg-[#B2D0ED]'>
                                {interest.category}
                            </td>
                            <td className='py-2 px-3 text-sm text-left text-black bg-[#D7E6FA]'>{interest.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Interests;
