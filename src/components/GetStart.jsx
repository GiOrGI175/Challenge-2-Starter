import React from "react";
import { arrowUp, Ellipse } from "../assets";

const GetStart = () => {
  return (
    <div className="relative ml-[40px] cursor-pointer flex-col items-center justify-center">
      <div className="= h-[140px] w-[140px]">
        <img
          src={Ellipse}
          alt=""
          className="h-[140px] w-[140px] object-contain"
        />
      </div>
      <div className="absolute left-[45px] top-[50px]">
        <p className="text-gradient flex font-poppins text-[18px] font-medium leading-[23px]">
          Get
          <div>
            <img src={arrowUp} alt="arrow" />
          </div>
        </p>
        <span className="text-gradient font-poppins text-[18px] font-medium leading-[23px]">
          Started
        </span>
      </div>
    </div>
  );
};

export default GetStart;
