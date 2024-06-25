import Image from "next/image";
import React from "react";

export default function PlansSection() {
  return (
    <div className="w-full h-[170px] bg-lightCyan flex justify-center items-center px-8 lg:px-0 gap-14 lg:gap-40">
      <div className="flex items-center justify-center flex-col">
        <Image
          loading="lazy"
          width={50}
          height={48}
          src={"/assets/book_with.svg"}
          alt=""
          className="w-[45px] sm:w-[50px] h-[42px] sm:h-[48px]"
        />
        <p className="text-[16px] whitespace-nowrap font-normal leading-[16px] text-darkBlue mt-3 mb-1">
          BOOK WITH
        </p>
        <p className="uppercase whitespace-nowrap font-oswald text-[30px] font-medium leading-[30px] tracking-[0.03em] text-darkBlue">
          Only 20%
        </p>
        <div className="w-[73px] h-[5px] bg-darkBlue opacity-[12%] rounded-xl mt-3"></div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Image
          loading="lazy"
          width={50}
          height={48}
          src={"/assets/payment_plan.svg"}
          alt=""
          className="w-[45px] sm:w-[50px] h-[42px] sm:h-[48px]"
        />
        <p className="text-[14px] whitespace-nowrap sm:text-[16px] font-normal leading-[16px] text-darkBlue mt-3 mb-1">
          PAYMENT PLAN
        </p>
        <p className="uppercase whitespace-nowrap font-oswald text-[30px] font-medium leading-[30px] tracking-[0.03em] text-darkBlue">
          Easy 70/30
        </p>
        <div className="w-[73px] h-[5px] bg-darkBlue opacity-[12%] rounded-xl mt-3"></div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Image
          loading="lazy"
          width={50}
          height={48}
          src={"/assets/handover_on.svg"}
          alt=""
          className="w-[45px] sm:w-[50px] h-[42px] sm:h-[48px]"
        />
        <p className=" text-[16px] whitespace-nowrap font-normal leading-[16px] text-darkBlue mt-3 mb-1">
          HANDOVER ON
        </p>
        <p className="uppercase whitespace-nowrap font-oswald text-[30px] font-medium leading-[30px] tracking-[0.03em] text-darkBlue">
          Q2 2027
        </p>
        <div className="w-[73px] h-[5px] bg-darkBlue opacity-[12%] rounded-xl mt-3"></div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Image
          loading="lazy"
          width={50}
          height={48}
          src={"/assets/area_starts.svg"}
          alt=""
          className="w-[45px] sm:w-[50px] h-[42px] sm:h-[48px]"
        />
        <p className=" text-[16px] whitespace-nowrap font-normal leading-[16px] text-darkBlue mt-3 mb-1">
          AREA STARTS FROM
        </p>
        <p className="uppercase whitespace-nowrap font-oswald text-[30px] font-medium leading-[30px] tracking-[0.03em] text-darkBlue">
          700 sqmt
        </p>
        <div className="w-[73px] h-[5px] bg-darkBlue opacity-[12%] rounded-xl mt-3"></div>
      </div>
    </div>
  );
}
