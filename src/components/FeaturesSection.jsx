"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollImages from "./Scroll";
import CircularImages from "./CircularImages";

export default function FeaturesSection() {
  const [showImages, setShowImages] = useState("exteriors");

  const exteriors = ["/assets/img1.svg", "/assets/img6.jpeg"];
  const interiors = ["/assets/img2.svg", "/assets/img5.svg"];

  const images = showImages === "exteriors" ? exteriors : interiors;

  return (
    <div className="max-w-[1250px] m-auto h-fit flex flex-col items-center py-16 px-5 xl:px-0">
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
      <p className="max-w-[680px] text-sm md:text-base font-normal leading-[24px] text-center mb-6">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      <CircularImages />
      <div className="w-full flex justify-end my-6 md:my-4">
        <p className=" text-[12px] font-light leading-5 md:leading-[47px] tracking-[0.03em] text-[#686868]">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. <span className="underline cursor-pointer">Source 1</span> |{" "}
          <span className="underline cursor-pointer">Source 2</span>
        </p>
      </div>
      <div className="w-full flex justify-end gap-4">
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
      <div className="w-full h-[222px] md:h-[494px] my-3 md:my-5">
        <ScrollImages images={images} />
      </div>
      <div className="w-full flex gap-1 lg:gap-0 justify-normal lg:justify-between">
        <div>
          <Image
            loading="lazy"
            width={265}
            height={168}
            src={"/assets/img2.svg"}
            alt="img"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            width={265}
            height={168}
            src={"/assets/img3.svg"}
            alt="img"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            width={265}
            height={168}
            src={"/assets/img4.svg"}
            alt="img"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            width={265}
            height={168}
            src={"/assets/img5.svg"}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
