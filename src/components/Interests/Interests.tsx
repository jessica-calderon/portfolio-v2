import React from 'react';

const interests = [
	{ category: 'General', text: '3D Printing, Making Things, Dogs' },
	{ category: 'Music', text: 'Lorem Ipsum blah blah blah' },
	{ category: 'Movies', text: 'Lorem Ipsum blah blah blah' },
	{ category: 'TV', text: 'Lorem Ipsum blah blah blah' },
	{ category: 'Books', text: 'Lorem Ipsum blah blah blah' }
];

const Interests: React.FC = () => {
	return (
		<div className="border border-[#B2D0ED]">
			<div className="flex p-2 items-center text-left h-[25px] bg-[#64A4CE] text-white font-bold">
				Jessica's Interests
			</div>
			<table className="w-full p-1 bg-white">
				<tbody className="p-2">
					{interests.map((interest, index) => (
						<tr key={index} className="border-4 border-white">
							<td className="py-2 w-[30%] text-left px-3 border-r-4 border-white text-[#07359E] font-semibold bg-[#B2D0ED] font-medium text-gray-800">
								{interest.category}
							</td>
							<td className="py-2 px-3 text-normal text-left text-black bg-[#D7E6FA]">
								{interest.text}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Interests;
