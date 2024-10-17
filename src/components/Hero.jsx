import React from "react";
import { discount, robot } from "../assets";
import GetStart from "./GetStart";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col py-6 sm:py-16">
      {/* left side */}
      <div className="flex flex-col py-6 sm:py-16 md:flex-row">
        <div className="relative flex flex-1 flex-col items-start justify-center">
          {/* discount */}
          <div className="custom-gradient-1 mb-[12px] flex flex-row items-center rounded-[10px] py-[6px]">
            <img src={discount} alt="discount" className="h-[27px] w-[27px]" />
            <p className="ml-[13px] pr-2 font-poppins text-[18px] font-normal leading-[30px] text-dimWhite">
              <span className="text-white">20%</span> discount for
              <span className="text-white"> 1 mounth</span> acount
            </p>
          </div>
          {/* title */}
          <div>
            <div className="flex w-full flex-row items-center justify-between">
              {/* top side */}
              <h2 className="flex flex-1 flex-col font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
                the next <br className="hidden sm:block" />{" "}
                <span>generation</span>
              </h2>

              {/* get started */}
              <div className="mr-0 hidden ss:flex md:mr-4">
                <GetStart />
              </div>
            </div>
          </div>
          {/* h4 payment */}
          <h4 className="font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
            payment method
          </h4>
          {/* descr */}
          <p className="mt-5 max-w-[470px] font-poppins text-[18px] leading-[30px] text-white opacity-[70%]">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>

          <div className="absolute left-[-300px] top-[200px] h-[324px] w-[195px] bg-white blur-[450px]" />
        </div>
        {/* right side */}
        <div className="felx relative flex-1 items-center justify-center">
          <img src={robot} alt="ronot" />
          <div className="pink__gradient absolute top-[0] z-[0] h-[35%] w-[40%]" />
          <div className="white__gradient absolute top-[10%] z-[1] h-[80%] w-[80%] rounded-full" />
          <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
        </div>
      </div>
      <div>
        <ul className="flex flex-col justify-between md:flex-row">
          <li>
            <p className="w-full font-poppins text-[40px] font-semibold leading-[53px] text-white">
              3800+
              <span className="gradient-text ml-[26px] h-[27px] w-[122px] border-r-[1.7px] border-[#FFFFFF99] pr-[52px] font-poppins text-[20px] font-normal leading-[26px]">
                User Active
              </span>
            </p>
          </li>
          <li>
            <p className="w-full font-poppins text-[40px] font-semibold leading-[53px] text-white">
              230+
              <span className="gradient-text ml-[26px] h-[27px] w-[122px] border-r-[1.7px] border-[#FFFFFF99] pr-[52px] font-poppins text-[20px] font-normal leading-[26px]">
                TRUSTED BY COMPANY
              </span>
            </p>
          </li>
          <li>
            <p className="w-full font-poppins text-[40px] font-semibold leading-[53px] text-white">
              $230M+
              <span className="gradient-text ml-[26px] h-[27px] w-[122px] border-r-[1.7px] border-[#FFFFFF99] pr-[52px] font-poppins text-[20px] font-normal leading-[26px]">
                TRANSACTION
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
