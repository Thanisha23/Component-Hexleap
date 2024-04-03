import React from 'react'
import { inter200, inter500, poppins } from '../fonts'
import TicketButton from './TicketButton'

interface TicketComponents {
  image:string,
  teamName: string,
  dateAndTime:string;
  place:string;
  buttonText:string;

}

const Ticket:React.FC<TicketComponents> = ({image,teamName,dateAndTime,place,buttonText}) => {
  
  return (
   <div className='w-[240px] h-[600px] bg-white dark:bg-[#3B3F46] shadow-2xl py-[10px] relative'>
  <img src={image} className='w-[600px] h-[401.25px]' alt="ticket1" />
  {/*  */}
  <div className='mx-auto  w-[200px] h-[10px] border-x-transparent border-t-transparent dark:border-x-transparent dark:border-t-transparent border border-b-2 border-[#A9ACB2] dark:border-[#818A97]/50 border-dashed absolute left-0 right-0 bottom-[210px]'></div>
  {/*  */}
  <div className='bg-[#EBEBEB] dark:bg-[#1B1B28] bottom-[200px] w-[20px] h-[20px] rounded-full absolute -left-2'></div>
  {/*  */}
  <div className='bg-[#EBEBEB] dark:bg-[#1B1B28] bottom-[200px] w-[20px] h-[20px] rounded-full absolute -right-2'></div>
  <div className={`text-center ${poppins.className} pt-[3px] text-[17px] font-medium`}>{teamName}</div>
  <div className={`text-center pt-[12px] ${poppins.className} text-[14px]`}>{dateAndTime}</div>
  <div className={`pt-[18px] text-[#525965] dark:text-white text-[14px] ${inter200.className} text-center`}>{place}</div>
 <div className='pt-[15px]'>
  <TicketButton buttonContent={buttonText}/>
 </div>
 
   </div>

  )
}

export default Ticket