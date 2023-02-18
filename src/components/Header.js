import React, { useEffect } from "react";
import {
  ChevronDownIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-duration="1200"
      className="px-1 sticky top-0 z-10 bg-white md:px-4 overflow-x-hidden border-b-gray-200 border-b flex items-center border-opacity-80"
    >
      <div className="flex flex-[.2] items-center">
        <Squares2X2Icon className="h-8 w-8 cursor-pointer p-[7px] sm:mr-3 mr-1 border-gray-200 border-opacity-80 border rounded-[4px]" />
        <div className="flex items-center cursor-pointer">
          <GlobeAltIcon className="h-6 w-6 sm:mr-1" />
          <span className="font-[700] sm:mr-4 hidden sm:block">Poolz</span>
        </div>
      </div>
      <div className="flex lg:flex-[.6] flex-[1] items-center">
        <p className="lg:mr-16 sm:text-base text-[14px] ml-2  mr-3 text-gray-400 sm:py-7 py-4 cursor-pointer font-semibold">
          Leaderboard
        </p>
        <p className="lg:mr-16  sm:text-base text-[14px] mr-3 text-black sm:py-7 py-4 cursor-pointer border-b-black border-b font-[700]">
          Dashboard
        </p>
        <p className=" text-gray-400 sm:text-base text-[14px] sm:py-7 py-4 cursor-pointer font-semibold">
          Lock Poolz
        </p>
      </div>
      <div className="sm:flex hidden items-center flex-[.2]">
        <div className="mr-4 hidden md:min-w-[220px] md:flex border border-gray-200 rounded-md border-opacity-70 py-[9px]">
          <span className="font-bold px-4 cursor-pointer tracking-tight text-sm border-r">
            0.277 BNB
          </span>
          <span className="font-bold px-4 cursor-pointer tracking-tight text-sm">
            0x47f8...809b
          </span>
        </div>
        <div className="bg-black cursor-pointer text-white rounded-md flex items-center px-3 py-[9px]">
          <CodeBracketIcon className="w-6 p-[6px] text-white rounded-full bg-yellow-400 h-6 mr-4 rotate-90" />
          <span className="mr-4 text-[15px] font-semibold">Binance</span>
          <ChevronDownIcon className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );
};
