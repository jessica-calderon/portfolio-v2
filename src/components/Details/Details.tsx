import React from 'react';

const details = [
	{ category: 'Status:', text: 'Lorem Ipsum blah blah blah' },
	{ category: 'Here for:', text: 'Networking + coding' },
	{ category: 'Hometown:', text: 'San Antonio, Texas' },
	{ category: 'Education:', text: 'Grad / professional school' },
	{ category: 'Occupation:', text: 'Front End Developer' }
];

const Details: React.FC = () => {
	return (
		<div className="border border-[#B2D0ED]">
			<div className="flex p-2 items-center text-left h-[25px] bg-[#64A4CE] text-white font-bold">
				Jessica's Details
			</div>
			<table className="w-full p-1 bg-white">
				<tbody className="p-2">
					{details.map((details, index) => (
						<tr key={index} className="border-4 border-white">
							<td className="py-2 w-[30%] text-left px-3 border-r-4 border-white text-[#07359E] font-semibold bg-[#B2D0ED] font-medium text-gray-800">
								{details.category}
							</td>
							<td className="py-2 px-3 text-normal text-left text-black bg-[#D7E6FA]">
								{details.text}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Details;
