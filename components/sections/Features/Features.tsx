import React from "react";
import SectionHeader from "../../SectionHeader";
import messageIcon from "../../../assets/message-chat-circle.svg"
import lightningIcon from "../../../assets/lightning.svg"
import graphIcon from "../../../assets/graph.svg"
import FeatureCard from "../../FeatureCard";

const Features = () => {
  return (
    <div className="max-w-7xl flex justify-content flex-col mx-[80px]">
      <div>
        <SectionHeader
          badge="Features"
          title="Cutting-edge features for advanced analytics"
          description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-x-8 gap-y-16  mt-16 mb-24 p-8">
        <FeatureCard
          icon={messageIcon}
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          linkText="Learn more"
        />
        <FeatureCard
          icon={lightningIcon}
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          linkText="Learn more"
        />
        <FeatureCard
          icon={graphIcon}
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          linkText="Learn more"
        />
      </div>
    </div>
  );
};

export default Features;
