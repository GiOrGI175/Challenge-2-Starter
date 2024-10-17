import React from "react";
import { quotes, people01, people02, people03 } from "../assets";

const PeopleSection = () => {
  return (
    <section className="flex flex-col py-6 sm:py-16">
      <div className="flex w-full flex-col py-6 sm:py-16">
        <div className="flex w-full flex-col py-6 sm:py-16 md:flex-row">
          <div className="flex flex-1">
            <h4 className="w-full max-w-[470px] font-poppins text-[48px] font-semibold leading-[76px] tracking-[1%] text-white">
              What people are saying about us
            </h4>
          </div>
          <div className="flex flex-1">
            <p className="mt-[24px] w-full max-w-[450px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-[20px] py-6 sm:py-16 md:flex-row">
          <div className="hover:bg-custom-gradient-3-hover transition-background flex h-[395px] w-[370px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-transparent px-[40px] py-[60px] duration-500 ease-in-out">
            <div className="felx w-full justify-start">
              <img src={quotes} alt="" />
            </div>
            <p className="mt-[40px] w-full max-w-[2900px] font-poppins text-[18px] font-normal leading-[30px] tracking-[2%] text-[#FFFFFFB2]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="mt-[29px] flex h-[48px] w-full">
              <div className="h-[48px] w-[48px]">
                <img
                  src={people01}
                  alt="people"
                  className="h-[48px] w-[48px] object-contain"
                />
              </div>
              <div className="ml-[16px]">
                <p className="font-poppins text-[20px] font-normal leading-[30px] text-white">
                  Herman Jensen
                </p>
                <span className="font-poppins text-[16px] font-normal leading-[24px] text-[#FFFFFFB2]">
                  Founder & Leader
                </span>
              </div>
            </div>
          </div>

          <div className="hover:bg-custom-gradient-3-hover transition-background flex h-[395px] w-[370px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-transparent px-[40px] py-[60px] duration-500 ease-in-out">
            <div className="felx w-full justify-start">
              <img src={quotes} alt="" />
            </div>
            <p className="mt-[40px] w-full max-w-[2900px] font-poppins text-[18px] font-normal leading-[30px] tracking-[2%] text-[#FFFFFFB2]">
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>
            <div className="mt-[29px] flex h-[48px] w-full">
              <div className="h-[48px] w-[48px]">
                <img
                  src={people01}
                  alt="people"
                  className="h-[48px] w-[48px] object-contain"
                />
              </div>
              <div className="ml-[16px]">
                <p className="font-poppins text-[20px] font-normal leading-[30px] text-white">
                  Steve Mark
                </p>
                <span className="font-poppins text-[16px] font-normal leading-[24px] text-[#FFFFFFB2]">
                  Founder & Leader
                </span>
              </div>
            </div>
          </div>

          <div className="hover:bg-custom-gradient-3-hover transition-background flex h-[395px] w-[370px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-transparent px-[40px] py-[60px] duration-500 ease-in-out">
            <div className="felx w-full justify-start">
              <img src={quotes} alt="" />
            </div>
            <p className="mt-[40px] w-full max-w-[2900px] font-poppins text-[18px] font-normal leading-[30px] tracking-[2%] text-[#FFFFFFB2]">
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>
            <div className="mt-[29px] flex h-[48px] w-full">
              <div className="h-[48px] w-[48px]">
                <img
                  src={people03}
                  alt="people"
                  className="h-[48px] w-[48px] object-contain"
                />
              </div>
              <div className="ml-[16px]">
                <p className="font-poppins text-[20px] font-normal leading-[30px] text-white">
                  Kenn Gallagher
                </p>
                <span className="font-poppins text-[16px] font-normal leading-[24px] text-[#FFFFFFB2]">
                  Founder & Leader
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
