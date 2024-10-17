import React from "react";
import { card } from "../assets";

const CardSection = () => {
  return (
    <section className="flex w-full flex-col py-6 sm:py-16">
      <div className="flex w-full flex-col py-6 sm:py-16 md:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center">
          <h4 className="w-full max-w-[570px] font-poppins text-[48px] font-semibold leading-[76px] tracking-[1%] text-white">
            Find a better card deal in few easy steps.
          </h4>
          <p className="mt-[24px] w-full max-w-[500px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="custom-gradient-4 mt-[48px] h-[64px] w-[170px] rounded-[10px] font-poppins">
            Get Started
          </button>
        </div>
        <div className="felx relative flex-1">
          <div>
            <img src={card} alt="bill" />
          </div>
          <div className="absolute left-[400px] top-[50px] h-[471px] w-[405px] bg-white opacity-[60%] blur-[750px]" />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
