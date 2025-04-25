import React from "react";
import SectionHeader from "../../SectionHeader";
import NotionIcon from "../../../assets/notion-icon.svg";
import SlackIcon from "../../../assets/slack.svg"
import GDriveICon from "../../../assets/g-drive.svg"
import IntercomIcon from "../../../assets/intercom.svg"
import JiraIcon from "../../../assets/jira.svg"
import DropboxIxon from "../../../assets/dropbox.svg"
import FeatureCard from "../../FeatureCard";

const Integrations = () => {
  return (
    <div className="max-w-7xl flex justify-content flex-col mx-[80px]">
      <div>
        <SectionHeader
          badge="Integrations"
          title="Get more values from your tools"
          description="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away."
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-16  mt-16 mb-24 p-8">
        <FeatureCard
          icon={NotionIcon}
          title="Notion integration"
          description="Work faster and smarter by integrating directly with Notion, right in the app."
        />
        <FeatureCard
          icon={SlackIcon}
          title="Slack integration"
          description="Work faster and smarter by integrating directly with Slack, right in the app."
        />
        <FeatureCard
          icon={GDriveICon}
          title="Google Drive integration"
          description="Work faster and smarter by integrating directly with Google Drive, right in the app."
        />
        <FeatureCard
          icon={IntercomIcon}
          title="Intercom integration"
          description="Work faster and smarter by integrating directly with Intercom, right in the app."
        />
        <FeatureCard
          icon={JiraIcon}
          title="Notion integration"
          description="Work faster and smarter by integrating directly with Jira, right in the app."
        />
        <FeatureCard
          icon={DropboxIxon}
          title="Notion integration"
          description="Work faster and smarter by integrating directly with Dropbox, right in the app."
        />
      </div>
    </div>
  );
};

export default Integrations;
