import React from "react";
import Image from "next/image";
import helpIcon from "../../assets/help-circle.svg";

const InputEmail = () => {
  return (
    <div className="relative w-[335px] h-[48px] mx-auto ">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full h-full px-[14px] py-3 pr-[40px] rounded-md border border-gray-300 bg-white text-[#475467] text-sm placeholder:font-inter placeholder:font-normal placeholder:text-[#98A2B3] placeholder:text-sm placeholder:leading-[24px] placeholder:tracking-normal"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Image src={helpIcon} alt="Help icon" width={20} height={20} />
      </div>
    </div>
  );
};

export default InputEmail;
