import React from "react";
import SectionHeader from "@/components/SectionHeader";
import MetricItem from "./components/MetricItem";

const Metrics = () => {
  return (
    <div className="px-[80px] pt-[32px] pb-[96px] max-w-[1440px]">
      <div className="mx-[32px]">
        <div className="flex flex-col items-center mt-24 mb-16">
          <SectionHeader
            title="Unleash the full power of data"
            description="Everything you need to convert, engage, and retain more users."
          />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[1280px] bg-[#F9FAFB] rounded-[48px] py-28 px-16 mb-24">
            <div className="flex justify-between w-full">
              <MetricItem title="400+" description="Projects completed" />
              <MetricItem title="600%" description="Return on investment" />
              <MetricItem title="10k" description="Global downloads" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
