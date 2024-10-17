import React from "react";
import { bill, apple, google } from "../assets";

const PaySection = () => {
  return (
    <section className="flex w-full flex-col py-6 sm:py-16">
      <div className="flex w-full flex-col py-6 sm:py-16 md:flex-row">
        <div className="felx relative flex-1">
          <div>
            <img src={bill} alt="bill" />
          </div>
          <div className="absolute left-[-200px] top-[100px] h-[471px] w-[405px] bg-white opacity-[60%] blur-[750px]" />
        </div>
        <div className="flex flex-1 flex-col items-end justify-center">
          <h4 className="w-full max-w-[470px] font-poppins text-[48px] font-semibold leading-[76px] tracking-[1%] text-white">
            Easily control your billing & invoicing.
          </h4>
          <p className="mt-[24px] w-full max-w-[470px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="mt-[56px] flex w-full max-w-[470px] justify-start">
            <button>
              <img src={apple} alt="download with app store" />
            </button>
            <button className="ml-[32px]">
              <img src={google} alt="download with google paly store" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaySection;
