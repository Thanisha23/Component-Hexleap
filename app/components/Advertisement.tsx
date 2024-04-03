import React from "react";
import { inter500, inter200, inter600 } from "../fonts";
import Image from "next/image";

interface AdComponents {
  adImage: string;
  adTitle: string;
  adContent: string;
}

const Advertisement: React.FC<AdComponents> = ({
  adImage,
  adTitle,
  adContent,
}) => {
  return (
    <div
      className={`w-[238.53px] h-[511px] bg-white dark:bg-[#3B3E47] px-[10.06px] py-[10px] shadow-xl relative`}
    >
      <div
        className={`absolute w-[47.78px] h-[25px] bg-black text-white text-center text-[12.8px] ${inter600.className} pt-1 right-[0.6rem]`}
      >
        Ad
      </div>
      <div className="border-[0.1px] border-[#006555]/30 h-[491px]">
        <Image src={adImage} width={218.4} height={218} alt="Advertisemnet" />
        <div className="mt-[28px] px-[15.6px]">
          <h1
            className={`text-[20px] text-black dark:text-white ${inter500.className}`}
          >
            {adTitle}
          </h1>
          <div
            className={`mt-[8px] w-[188.34px] h-[171px] text-[#525965] dark:text-[#DFDFDF] text-[12px] ${inter200.className}`}
          >
            {adContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
