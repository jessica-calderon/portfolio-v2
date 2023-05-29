import React from "react";

interface Props {
    src: string;
    label: string;
    onClick: () => void;
}

const ClickableImage: React.FC<Props> = ({ src, label, onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <div className='flex flex-col'>
            <div className='items-center mb-0'>
                <p className='text-[#125089] hover:text-red-700 text-center text-xs font-bold my-2 cursor-pointer' onClick={handleClick}>
                    {label}
                </p>
            </div>
            <div className='border-2 border-[#125089] items-center cursor-pointer'>
                <img className='hover:opacity-90 object-cover' src={src} alt='' onClick={handleClick} />
            </div>
        </div>
    );
};

export default ClickableImage;
