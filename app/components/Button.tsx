import React from "react";
import { inter500 } from "../fonts";
const Button: React.FC = () => {
  return (
    <div
      className={`mx-auto w-[124.8px] h-[46px] bg-[#2C9CF0] text-white text-center py-3 ${inter500.className} rounded-[3px] text-[14px] shadow-md`}
    >
      See More
    </div>
  );
};

export default Button;
