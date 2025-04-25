import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, badge }) => {
  return (
    <div className="mx-[80px] flex justify-center flex-col">
      <div className="flex justify-center flex-col mb-[20px]">
        {badge && (
          <span className="block w-max mx-auto bg-[#F9F5FF] text-[#6941C6] border-[#E9D7FE] border-[1px] text-base font-medium px-2.5 py-0.5 rounded-full mb-[16px]">
            {badge}
          </span>
        )}
        <p className="font-inter font-semibold text-[36px] leading-[44px] tracking-[-0.02em] text-center">
          {title}
        </p>
      </div>
      <p className="font-inter font-normal text-[20px] leading-[30px] tracking-normal text-center text-[#475467] max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
