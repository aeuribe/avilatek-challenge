import React from "react";
import Image from "next/image";
import WomanImage from "../../../assets/secondary-cta.jpg";
import CustomButton from "@/components/ui/Button";

const SecondaryCTA = () => {
  return (
    <div className="px-[80px] pt-[32px] pb-[96px] max-w-[1440px]">
      <div className="mx-[32px]">
        <div className="flex max-w-[1216px] overflow-hidden h-[448px] rounded-[32px] my-[41px]">
          {/* Contenido izquierdo */}
          <div className="flex flex-col justify-between p-16 flex-1 bg-[#53389E] text-white rounded-l-[32px]">
            {/* Contenedor del texto */}
            <div className="mt-[64px] mb-[48px]">
              <p className="font-inter font-semibold text-[36px] leading-[44px] tracking-[-0.02em] mb-[20px] font-inter">
                Give us a shot
              </p>
              <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0em] text-[#E9D7FE]">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>

            {/* Contenedor de botones */}
            <div className="flex flex-wrap gap-3 mb-[64px]">
              <CustomButton variant="secondary">Learn more</CustomButton>
              <CustomButton variant="primary">Get started</CustomButton>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="flex-shrink-0">
            <Image
              src={WomanImage}
              alt="Testimonial"
              className="object-cover h-full w-[400px] rounded-r-[32px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCTA;
