import React from "react";

interface Props {
    src: string;
    label: string;
    onClick: () => void;
}

const ClickableImage: React.FC<Props> = ({ src, label, onClick }) => {
    return (
        <div className='flex flex-col'>
            <div className='items-center mb-0'>
                <p className='text-[#125089] text-center text-sm font-bold mt-2'>{label}</p>
            </div>
            <div className='border-2 border-[#125089] items-center cursor-pointer'>
                <img className=' w-full  object-cover' src={src} alt='' onClick={onClick} />
            </div>
        </div>
    );
};

export default ClickableImage;
