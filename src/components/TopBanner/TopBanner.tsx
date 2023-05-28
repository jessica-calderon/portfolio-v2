import React from 'react'
import Banner from '../../assets/images/banner.png'
function TopBanner() {
  return (
    <div className='bg-[#062F8D] w-full h-full p-2'>
      <span className='flex flex-row justify-center items-center w-full mt-2'>
        <img src={Banner} alt='top banner'/>
      </span>
    </div>
  )
}

export default TopBanner