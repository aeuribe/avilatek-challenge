import React from "react";
import Image, { StaticImageData } from "next/image";
import ArrowRight from "../assets/arrow-right.svg"; // Ajusta la ruta según tu estructura

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  linkText?: string; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText = "View integration",
}) => {
  return (
    <div className="w-[384px] min-w-[320px] flex flex-col items-center gap-4">
      {/* Icono centrado */}
      <div className="w-16 h-16 bg-white border border-[#EAECF0] shadow-sm rounded-xl flex items-center justify-center">
        <Image src={icon} alt={`${title} Icon`} />
      </div>

      {/* Textos y enlace */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="font-inter font-semibold text-[20px] leading-[30px]">
          {title}
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px] text-[#475467]">
          {description}
        </p>
        <div className="flex items-center">
          <span className="font-inter font-semibold text-[16px] leading-[24px] text-[#6941C6]">
            {linkText}
          </span>
          <Image className="ml-2 mt-[2px]" src={ArrowRight} alt="Arrow Right Icon" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
