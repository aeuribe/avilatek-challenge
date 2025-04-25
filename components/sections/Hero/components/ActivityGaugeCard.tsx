import React from "react";
import Image from "next/image";
import ActivityGauge from "../../../../assets/activity-gauge.svg"

const ActivityGaugeCard = () => {
  return (
    <div className="absolute top-[150px] left-[830px] w-[272px] h-[272px] bg-white p-[24px] rounded-[136px] flex items-center justify-center">
      <Image src={ActivityGauge} alt="Activity Gauge" />
    </div>
  );
};

export default ActivityGaugeCard;
