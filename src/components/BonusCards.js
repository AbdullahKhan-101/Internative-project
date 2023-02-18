import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

export const BonusCards = () => {
  return (
    <div className="bg-gray-50 bg-opacity-70 overflow-x-hidden">
      <div className="px-2 md:px-4 flex">
        <div className="lg:flex-[.2]"></div>
        <div className="lg:flex-[.6] flex-[1] py-14 flex flex-wrap md:flex-nowrap justify-center md:justify-start">
          <div className="bg-white mb-5 w-full max-w-[350px] min-w-[300px] md:mr-5 rounded-md border border-gray-200 border-opacity-70 px-4">
            <p className="font-semibold mt-4 text-gray-400 text-[14px]">
              Tiers
            </p>
            <div className="flex justify-between items-center py-[15px] border-b-gray-200 border-b border-opacity-80">
              <p className="font-semibold text-[14px] tracking-tight">
                Pools Governance
              </p>
              <CheckIcon className="w-5 h-5 rounded-full text-white p-[2px] bg-green-600" />
            </div>
            <div className="flex justify-between items-center py-[15px] border-b-gray-200 border-b border-opacity-80">
              <p className="font-semibold text-[14px] tracking-tight">
                Guaranted Allocation
              </p>
              <CheckIcon className="w-5 h-5 rounded-full text-white p-[2px] bg-green-600" />
            </div>
            <div className="flex justify-between items-center py-[15px] border-b-gray-200 border-b border-opacity-80">
              <p className="font-semibold text-[14px] tracking-tight">
                250 POOLZ Equal One Ticket
              </p>
              <CheckIcon className="w-5 h-5 rounded-full text-white p-[2px] bg-green-600" />
            </div>
          </div>
          <div className="bg-white mb-5 w-full max-w-[350px] min-w-[300px] md:mr-5 rounded-md border border-gray-200 border-opacity-70 px-4">
            <p className="font-semibold mt-4 text-gray-400 text-[14px]">
              Stake Bonus
            </p>
            <div className="flex justify-between items-center py-[15px] border-b-gray-200 border-b border-opacity-80">
              <p className="font-semibold text-[14px] tracking-tight">
                250+ POOLZ
              </p>
              <p className="font-semibold text-[14px] tracking-tight">4.56%</p>
            </div>
            <div className="flex justify-between items-center py-[15px] border-b-gray-200 border-b border-opacity-80">
              <p className="font-semibold text-[14px] tracking-tight">
                1,000+ POOLZ
              </p>
              <p className="font-semibold text-[14px] tracking-tight">12.27%</p>
            </div>
            <div className="flex justify-between items-center py-[15px] border-b-gray-200 border-b border-opacity-80">
              <p className="font-semibold text-[14px] tracking-tight">
                3,000+ POOLZ
              </p>
              <p className="font-semibold text-[14px] tracking-tight">27.67%</p>
            </div>
          </div>
        </div>
        <div className="lg:flex-[.2] md:min-w-[360px]"></div>
      </div>
    </div>
  );
};
