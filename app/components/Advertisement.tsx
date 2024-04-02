import React from 'react'
import { inter500,inter200 } from '../fonts'

interface AdComponents {
  adImage:string,
  adTitle:string,
  adContent:string,
}

const Advertisement :React.FC<AdComponents>= ({adImage,adTitle,adContent}) => {

  
  return (
    <div className={`w-[238.53px] h-[511px] bg-white px-[10.06px] py-[10px] shadow-xl`}>
      <div className='border-[0.1px] border-[#006555]/30 h-[491px]'>
      <img className='w-[218.4px] h-[218px]' src={adImage} alt="player1" />
      <div className="mt-[28px] px-[15.6px]">
        <h1 className={`text-[20px] ${inter500.className}`}>{adTitle}</h1>
        <div className={`mt-[8px] w-[188.34px] h-[171px] text-[#525965] text-[12px] ${inter200.className}`}>{adContent}</div>
      </div>
      </div>
    </div> 
  )
}

export default Advertisement

// w-238.53
//h-511

//14.59

// 10.06
// 41.26
// 