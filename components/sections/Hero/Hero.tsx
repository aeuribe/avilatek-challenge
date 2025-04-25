import React from "react";
import HeroHeader from "./components/HeroHeader";
import ChartCard from "./components/ChartCard";
import ActivityGaugeCard from "./components/ActivityGaugeCard";
const Hero = () => {
  return (
    <div className="px-[80px] pt-[32px] pb-[96px] max-w-[1440px]">
      <div className="mx-[32px]">
        <div className="flex flex-col bg-[#53389E] max-w-[1280px] h-[674px] rounded-[48px]">
          <HeroHeader />
        </div>
        <div className="h-[396px] relative w-full">
          <ChartCard />
          <ActivityGaugeCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
