import React from "react";
import CustomButton from "@/components/ui/Button";
import Image from "next/image";
import CTAImage from "../../../assets/cta-image.png";

const PrimaryCTA = () => {
  return (
    <div className="h-[688px] bg-[#F9FAFB] flex items-center">
      <div className="mx-20 my-24 max-w-7xl flex items-center justify-between w-full">
        {/* Contenido de texto y botones */}
        <div className="ml-8 max-w-xl">
          <p className="font-inter font-semibold text-[48px] leading-[60px] tracking-[-2%] text-[#101828] mb-6">
            No long-terms contracts. <br />
            No catches.
          </p>
          <p className="font-inter font-normal text-[20px] leading-[30px] tracking-[-0%] text-[#475467] mb-6">
            Start your 30-day free trial today.
          </p>
          <div className="flex flex-wrap gap-3">
            <CustomButton variant="secondary">Learn more</CustomButton>
            <CustomButton variant="primary">Get started</CustomButton>
          </div>
        </div>

        {/* Imagen CTA */}
        <div className="flex-shrink-0">
          <Image src={CTAImage} alt="CTA Image" className="w-[576px] h-[496px]" />
        </div>
      </div>
    </div>
  );
};

export default PrimaryCTA;
