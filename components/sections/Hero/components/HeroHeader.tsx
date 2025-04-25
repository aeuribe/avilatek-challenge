import React from "react";
import InputEmail from "@/components/ui/InputEmail";
import CustomButton from "@/components/ui/Button";

const HeroHeader = () => {
  return (
    <div className="w-[768px] mx-[224px] mt-[96px]">
      <h1 className="font-inter font-semibold text-[72px] leading-[90px] tracking-[-0.02em] text-center text-white">
        Grow your users.
      </h1>
      <p className="font-inter font-semibold text-[72px] leading-[90px] tracking-[-0.02em] text-center text-[#E9D7FE]">
        Smarter.
      </p>
      <p className="font-inter font-normal text-[20px] leading-[30px] tracking-normal text-center text-[#E9D7FE] mt-[24px]">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="flex items-start space-x-4 mt-[48px] mx-[144px]">
        <div className="flex flex-col items-start space-y-2">
          <InputEmail />
          <p className="text-sm text-left w-full text-[#E9D7FE] font-normal">
            We care about your data in our{" "}
            <span className="underline cursor-pointer">privacy policy</span>
          </p>
        </div>
        <CustomButton height="48px">Get Started</CustomButton>
      </div>
    </div>
  );
};

export default HeroHeader;
