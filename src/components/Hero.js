import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex px-2 md:px-4">
        <div className="lg:flex-[.2]"></div>
        <div className="lg:flex-[.6] flex-[1] py-10 md:py-10 relative">
          {/* headings */}
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="flex flex-wrap items-center justify-between lg:max-w-[510px] overflow-hidden"
          >
            <h1 className="font-[600] text-[18px] mr-3 md:text-[22px]">
              Overview
            </h1>
            <h1 className="font-[600] text-[18px] mr-3 md:text-[22px] text-gray-400">
              My Tokens
            </h1>
            <h1 className="font-[600] text-[18px] mr-3 md:text-[22px] text-gray-400">
              Whitelist
            </h1>
            <h1 className="font-[600] text-[18px] md:text-[22px] text-gray-400">
              Account <span className="font-bold text-red-400">.</span>
            </h1>
          </div>
          {/* count */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex justify-center my-12 overflow-hidden md:my-20 md:justify-start"
          >
            <div className="flex">
              <GlobeAltIcon className="md:h-10 h-9 md:w-10 w-9 md:p-2 p-[7px] mr-2 sm:mr-4 bg-blue-600 rounded-full text-white" />
              <h1 className="text-6xl font-bold text-transparent md:-mt-4 lg:text-8xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-400">
                14,291.29
              </h1>
            </div>
          </div>
          {/* buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="flex flex-wrap mb-10 lg:mb-2 md:justify-start justify-evenly max-w-[400px] mx-auto md:mx-0"
          >
            <button className="bg-black mr-3 py-[10px] px-[18px] outline-none border-none text-sm font-semibold text-white rounded-md">
              Buy on Uniswap
            </button>
            <button className="bg-white  py-[10px] items-center flex px-[18px] outline-none text-sm font-semibold text-black rounded-md border border-gray-200 border-opacity-70">
              Buy POOLZ
              <ChevronDownIcon className="w-3 h-3 ml-4" />
            </button>
          </div>
          {/* card */}
          <div
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="flex justify-center overflow-hidden card_container"
          >
            <div className="bg-slate-900 text-white p-5 max-w-[301px] rounded-md">
              <h1 className="text-[28px] font-semibold opacity-95">Stake</h1>
              <p className="text-gray-300 opacity-90 mt-2 text-[14px]">
                Stake POOLZ to participate in whitelists for upcoming IDOs.
              </p>
              <p className="text-gray-300 opacity-90 text-[14px] font-semibold mb-1 mt-4">
                Amount
              </p>
              <div className="flex items-center p-2 rounded-sm bg-slate-800 bg-opacity-80">
                <input
                  type="text"
                  value="0.00"
                  className="bg-transparent outline-none border-none font-semibold w-[80%] mr-2"
                />
                <span className="text-[14px] font-semibold mr-2">Max</span>
                <GlobeAltIcon className="w-6 h-6 text-pink-500" />
              </div>
              <p className="text-gray-300 opacity-90 text-[14px] font-semibold mb-1 mt-4">
                Number of Days
              </p>
              <div className="flex items-center p-2 rounded-sm bg-slate-800 bg-opacity-80">
                <input
                  type="text"
                  value="30"
                  className="bg-transparent outline-none border-none font-semibold w-[80%] mr-2"
                />
                <span className="text-[14px] font-semibold mr-2">Days</span>
              </div>
              {/* card buttons */}
              <div className="flex items-center justify-between my-4">
                <button className="p-2 px-4 text-sm text-gray-300 border rounded-md opacity-90 border-slate-800">
                  7 Days
                </button>
                <button className="p-2 px-4 text-sm text-gray-300 border rounded-md opacity-90 border-slate-800">
                  30 Days
                </button>
                <button className="p-2 px-4 text-sm text-gray-300 border rounded-md opacity-90 border-slate-800">
                  60 Days
                </button>
              </div>
              <button className="w-full p-2 px-4 font-semibold bg-pink-400 border rounded-md border-slate-800">
                Stake & Lock
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="lg:flex-[.2] md:min-w-[360px]"></div>
      </div>
      <hr
        // data-aos="fade-left"
        // data-aos-delay="600"
        // data-aos-duration="1000"
        className="border-b border-b-gray-200 border-opacity-60"
      />
    </>
  );
};
