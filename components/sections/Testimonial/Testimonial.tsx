import React from "react";
import Image from "next/image";
import WomanImage from "../../../assets/women-image.jpg";
import StarIcon from "../../../assets/start-icon.svg";

const Testimonials = () => {
  return (
    <div className="px-[80px] pt-[32px] pb-[96px] max-w-[1440px]">
      <div className="mx-[32px]">
        <div className="flex max-w-[1216px] overflow-hidden h-[448px] rounded-[32px]">
          {/* Imagen izquierda */}
          <div className="flex-shrink-0">
            <Image
              src={WomanImage}
              alt="Testimonial"
              className="object-cover h-full w-[400px] rounded-l-[32px]"
            />
          </div>

          {/* Contenido derecho */}
          <div className="flex flex-col justify-between p-16 flex-1 bg-[#53389E] text-white rounded-r-[32px]">
            {/* Estrellas */}
            <div className="flex gap-1 mb-6 w-[20px] h-[20px]">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  src={StarIcon}
                  alt="Star"
                  className="w-6 h-6"
                />
              ))}
            </div>

            {/* Texto del testimonio */}
            <p className="font-inter font-medium text-[36px] leading-[44px] tracking-[-0.02em] mb-8">
              Love the simplicity of the service and the prompt customer
              support. We can’t imagine working without it.
            </p>

            {/* Nombre y cargo */}
            <div>
              <p className="font-inter font-semibold text-[18px] leading-[28px] tracking-[0em]">
                — Renee Wells
              </p>
              <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0em] text-[#E9D7FE]">
                Product Designer, Quotient
              </p>
            </div>

            {/* Paginación */}
            <div className="flex gap-4 mt-12">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`w-[10px] h-[10px] rounded-full ${
                    i === 0 ? "bg-white" : "bg-[#9E8DDC]"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
