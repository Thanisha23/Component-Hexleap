import React from "react";
import { inter500, inter200 } from "../fonts";
import Image from "next/image";

interface CardComponents {
  image: string;
  teamName: string;
  totalEvents: number;
  sport: string;
}

const Card: React.FC<CardComponents> = ({
  image,
  teamName,
  totalEvents,
  sport,
}) => {
  return (
    <div
      className={`w-[238.53px] h-[511px] bg-white dark:bg-[#3B3E47] px-[10.06px] py-[10px] shadow-xl`}
    >
      
      <Image src={image} width={218.4} height={385.31} alt="player-card" />
      <div className={`mt-[14.59px] text-[17px] ${inter500.className}`}>
        {teamName}
      </div>
      <div className="mt-[7px] bg-[#F7F7F8] dark:bg-[#292B32] px-[10.06px] w-[218.4px] h-[54px] flex justify-center items-center gap-[41px]">
        <div>
          <h4
            className={`text-[#525965] dark:text-[#DFDFDF] text-[12px] ${inter200.className}`}
          >
            Total Events
          </h4>
          <h1
            className={`text-[14px] pt-[4px] ${inter500.className}`}
          >{`${totalEvents} Events`}</h1>
        </div>

        <div>
          <h4
            className={`text-[#525965] dark:text-[#DFDFDF] text-[12px] ${inter200.className}`}
          >
            Sport
          </h4>
          <h1 className={`text-[14px] pt-[4px] ${inter500.className}`}>
            {sport}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
