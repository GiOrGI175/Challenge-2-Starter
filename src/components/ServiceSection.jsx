import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const ServiceSection = () => {
  return (
    <section className="flex w-full flex-col py-6 sm:py-16">
      <div className="flex w-full flex-col py-6 sm:py-16">
        <div className="flex w-full flex-col items-center justify-between py-6 sm:py-16 md:flex-row">
          <div className="h-[60px] w-[192.25px]">
            <img
              src={airbnb}
              alt="airbnb"
              className="h-[60px] w-[192.25px] object-contain"
            />
          </div>
          <div className="h-[60px] w-[192.25px]">
            <img
              src={binance}
              alt="binance"
              className="h-[60px] w-[192.25px] object-contain"
            />
          </div>
          <div className="h-[60px] w-[192.25px]">
            <img
              src={coinbase}
              alt="coinbase"
              className="h-[60px] w-[192.25px] object-contain"
            />
          </div>
          <div className="h-[60px] w-[192.25px]">
            <img
              src={dropbox}
              alt="dropbox"
              className="h-[60px] w-[192.25px] object-contain"
            />
          </div>
        </div>
        <div className="custom-gradient-2 flex w-full flex-col justify-between rounded-[20px] px-[96px] py-[72px] sm:flex-row sm:py-16">
          <div>
            <h4 className="w-full max-w-[670px] font-poppins text-[48px] font-semibold leading-[67px] tracking-[1%] text-white">
              Let’s try our service now!
            </h4>
            <p className="mt-[24px] w-full max-w-[445px] font-poppins text-[18px] font-normal leading-[28px] tracking-[1%] text-[#FFFFFFB2]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <button className="custom-gradient-4 mt-[48px] h-[64px] w-[170px] rounded-[10px] font-poppins">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
