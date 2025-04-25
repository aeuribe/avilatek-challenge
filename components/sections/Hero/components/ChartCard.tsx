import React from "react";
import Image from "next/image";
import Chart from "../../../../assets/chart.svg"

const ChartCard = () => {
  return (
    <div className="absolute top-[-96px] left-[209px] w-[800px] h-[492px] bg-white flex items-center justify-center rounded-xl border border-[#EAECF0] p-[32px] shadow-[0px_24px_48px_-12px_#1018282E]">
      <div className="flex flex-col">
        <p className="font-inter text-black font-semibold text-[18px] leading-[28px] tracking-normal">
          Users over time
        </p>
        <Image src={Chart} alt="Dropdown Icon" />
      </div>
    </div>
  );
};

export default ChartCard;
