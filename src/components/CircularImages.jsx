"use client";

import Image from "next/legacy/image";
import React, { useEffect } from "react";

export default function CircularImages() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;

      ScrollReveal().reveal(".animate", {
        duration: 1000,
        origin: "top",
        distance: "20px",
        delay: 200,
        interval: 200,
        reset: false,
      });
    }
  }, []);

  return (
    <div className="w-full flex justify-between">
      <div className="w-[227px] h-[271px] relative  hover:scale-105 flex justify-center animate">
        <div className="w-[206px] h-[206px] bg-[#D9D9D98A] flex items-center justify-center rounded-full">
          <Image
            loading="lazy"
            width={193}
            height={193}
            src={"/assets/floating_pools.svg"}
            alt=""
            className="z-20"
          />
        </div>
        <div className="absolute bottom-0 w-[227px] h-[157px] transition-all rounded-[20px] shadow-custom bg-customWhite text-darkBlue py-5 flex items-end justify-center">
          <p className=" w-[58px] text-sm font-bold text-center">
            Floating Pools
          </p>
        </div>
      </div>
      <div className="w-[227px] h-[271px] relative flex justify-center hover:scale-105 transition-all animate">
        <div className="w-[206px] h-[206px] bg-[#D9D9D98A] flex items-center justify-center rounded-full">
          <Image
            loading="lazy"
            width={193}
            height={193}
            src={"/assets/cabins.svg"}
            alt=""
            className="z-20"
          />
        </div>
        <div className="absolute bottom-0 w-[227px] h-[157px] rounded-[20px] shadow-custom bg-customWhite text-darkBlue py-5 flex items-end justify-center">
          <p className=" w-[123px] text-sm font-bold text-center">
            Spacious Cabins Like Rooms
          </p>
        </div>
      </div>
      <div className="w-[227px] h-[271px] relative flex justify-center hover:scale-105 transition-all animate">
        <div className="w-[206px] h-[206px] bg-[#D9D9D98A] flex items-center justify-center rounded-full">
          <Image
            loading="lazy"
            width={193}
            height={193}
            src={"/assets/pools.svg"}
            alt=""
            className="z-20"
          />
        </div>
        <div className="absolute bottom-0 w-[227px] h-[157px] rounded-[20px] shadow-custom bg-customWhite text-darkBlue py-5 flex items-end justify-center">
          <p className=" w-[120px] text-sm font-bold text-center">
            Sea Facing Swimming Pools
          </p>
        </div>
      </div>
      <div className="w-[227px] h-[271px] relative flex justify-center hover:scale-105 transition-all animate">
        <div className="w-[206px] h-[206px] bg-[#D9D9D98A] flex items-center justify-center rounded-full">
          <Image
            loading="lazy"
            width={193}
            height={193}
            src={"/assets/gym.svg"}
            alt=""
            className="z-20"
          />
        </div>
        <div className="absolute bottom-0 w-[227px] h-[157px] rounded-[20px] shadow-custom bg-customWhite text-darkBlue py-5 flex items-end justify-center">
          <p className=" w-[89px] text-sm font-bold text-center">
            Gymnasium & FItness
          </p>
        </div>
      </div>
    </div>
  );
}
