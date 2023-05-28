import React from "react";
import { FaHourglassStart } from "react-icons/fa";

function Loader() {
    return (
        <div className='flex items-center justify-center'>
            <FaHourglassStart className='animate-spin text-4xl text-gray-500' />
        </div>
    );
}

export default Loader;
