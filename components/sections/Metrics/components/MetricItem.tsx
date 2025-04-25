import React from "react";

interface MetricItemProps {
  title: string;
  description: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-60">
      <p className="font-inter font-semibold text-[60px] leading-[72px] tracking-[-0.02em] text-center text-[#7F56D9]">
        {title}
      </p>
      <p className="font-inter font-semibold text-[18px] leading-[28px] tracking-normal text-center text-[#101828]">
        {description}
      </p>
    </div>
  );
};

export default MetricItem;
