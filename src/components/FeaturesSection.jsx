"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import CircularImages from "./CircularImages";
import LightBoxImages from "./LightBoxImages";

export default function FeaturesSection() {
  const [showImages, setShowImages] = useState("exteriors");

  return (
    <div className="max-w-[1250px] m-auto h-fit flex flex-col items-center py-16 px-1 xl:px-0">
      <Image
        loading="lazy"
        width={180}
        height={80}
        src={"/assets/harbour_lights.svg"}
        alt="harbour-lights"
      />
      <h2 className="text-3xl font-oswald font-medium leading-[47px] text-darkBlue uppercase mt-5 mb-2">
        Features & Amenities
      </h2>
      <p className="max-w-[680px] text-sm md:text-base font-normal leading-[24px] text-center mb-6 px-5 md:px-0">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      {/* Circular Image cards */}
      <CircularImages />
      <div className="w-full flex justify-center px-6 md:px-0 md:justify-end mb-10 md:mb-0 my-4">
        <p className="text-[10px] md:text-[12px] font-light leading-5 md:leading-[47px] tracking-[0.03em] text-[#686868] text-center">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. <span className="underline cursor-pointer">Source 1</span> |{" "}
          <span className="underline cursor-pointer">Source 2</span>
        </p>
      </div>
      {/* Buttons */}
      <div className="w-full flex justify-center md:justify-end gap-4">
        <button
          onClick={() => setShowImages("exteriors")}
          className={`text-[13px] font-bold leading-[19.5px] tracking-[0.03em] border-2 border-darkBlue rounded-[4px] ${
            showImages === "exteriors"
              ? "bg-darkBlue text-customWhite"
              : "text-darkBlue"
          } px-8 md:px-10 py-3 uppercase`}
        >
          Exteriors
        </button>
        <button
          onClick={() => setShowImages("interiors")}
          className={`text-[13px] font-bold leading-[19.5px] tracking-[0.03em] border-2 border-darkBlue rounded-[4px] ${
            showImages === "interiors"
              ? "bg-darkBlue text-customWhite"
              : "text-darkBlue"
          } px-8 md:px-10 py-3 uppercase`}
        >
          Interiors
        </button>
      </div>
      {/* Light Box Images section */}
      <LightBoxImages />
    </div>
  );
}
