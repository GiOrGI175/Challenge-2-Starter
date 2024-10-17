import React from "react";
import { star, shield, send } from "../assets";

const BusnessSection = () => {
  return (
    <section className="flex w-full flex-col py-6 sm:py-16">
      <div className="flex w-full flex-col py-6 sm:py-16 md:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center">
          <h4 className="w-full max-w-[622px] font-poppins text-[48px] font-semibold leading-[76px] tracking-[1%] text-white">
            You do the business, we’ll handle the money.
          </h4>
          <p className="mt-[24px] w-full max-w-[570px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="custom-gradient-4 mt-[48px] h-[64px] w-[170px] rounded-[10px] font-poppins">
            Get Started
          </button>
        </div>
        <div className="felx felx-1 flex-col">
          <div className="hover:bg-custom-gradient-3-hover mb-[20px] flex items-center rounded-[20px] px-[20px]">
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#09977C1A]">
              <img src={star} alt="star" />
            </div>
            <div className="ml-[20px]">
              <h6 className="font-poppins text-[18px] font-semibold leading-[23px] tracking-[1%] text-white">
                Rewards
              </h6>
              <p className="mt-[8px] w-full max-w-[366px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>

          <div className="hover:bg-custom-gradient-3-hover mb-[20px] flex cursor-pointer items-center rounded-[20px] px-[20px]">
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#09977C1A]">
              <img src={shield} alt="shield" />
            </div>
            <div className="ml-[20px]">
              <h6 className="font-poppins text-[18px] font-semibold leading-[23px] tracking-[1%] text-white">
                Rewards
              </h6>
              <p className="mt-[8px] w-full max-w-[366px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>

          <div className="hover:bg-custom-gradient-3-hover flex cursor-pointer items-center rounded-[20px] px-[20px] transition delay-150 ease-in-out">
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#09977C1A]">
              <img src={send} alt="send" />
            </div>
            <div className="ml-[20px]">
              <h6 className="font-poppins text-[18px] font-semibold leading-[23px] tracking-[1%] text-white">
                Balance Transfer
              </h6>
              <p className="mt-[8px] w-full max-w-[366px] font-poppins text-[18px] font-normal leading-[30px] tracking-[1%] text-[#FFFFFFB2]">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusnessSection;
