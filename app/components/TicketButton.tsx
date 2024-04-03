import React from 'react'
import { inter500 } from '../fonts'

interface ButtonComponents {
    buttonContent:string,
   
  }

const TicketButton:React.FC<ButtonComponents> = ({buttonContent}) => {
  return (
    <div className={`mx-auto w-[213px] h-[36px] text-white bg-[#1D1D1F] text-center text-[12.73px] ${inter500.className} pt-[0.5rem]`}>
        {buttonContent}
    </div>
  )
}

export default TicketButton