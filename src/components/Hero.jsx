import React from "react";
import { discount, robot } from "../assets";
import GetStart from "./GetStart";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col py-6 sm:py-16 md:flex-row">
      {/* left side */}
      <div className="flex flex-1 flex-col items-start justify-center">
        {/* discount */}
        <div className="mb-[12px] flex flex-row items-center rounded-[10px] bg-custom-gradient py-[6px]">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          consequatur soluta eos, neque itaque error iste impedit est laudantium
          expedita dignissimos rem natus quo, illo sequi non repellendus facere
          rerum!
        </p>
      </div>
      {/* right side */}
      <div className="felx relative flex-1 items-center justify-center">
        <img src={robot} alt="ronot" />
        <div className="pink__gradient absolute top-[0] z-[0] h-[35%] w-[40%]" />
        <div className="white__gradient absolute z-[1] h-[80%] w-[80%] rounded-full" />
        <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
      </div>
    </section>
  );
};

export default Hero;
