"use client";

import Image from "next/legacy/image";
import React, { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen h-[122vh] sm:h-screen bg-no-repeat bg-home-bg-sm sm:bg-home-bg bg-cover bg-center">
      <nav className="xl:max-w-[1250px] px-10 xl:px-0 m-auto h-24 sm:h-36 flex justify-between items-center relative">
        <div className="flex items-center">
          <Image
            width={165}
            height={20}
            src="/assets/logo.svg"
            alt="logo"
            className="w-[111px] h-[14px] sm:w-[165px] sm:h-[20px]"
          />
        </div>
        <button
          type="button"
          className={`block sm:hidden tham tham-e-squeeze text-customWhite tham-w-6 ${
            isMenuOpen ? "tham-active" : ""
          }`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <div className="tham-box">
            <div className="tham-inner" />
          </div>
        </button>
        <div className="hidden sm:block sm:w-auto">
          <button className="relative overflow-hidden border-2 border-blue py-2 px-6 sm:py-3 sm:px-11 rounded-[5px] text-blue font-bold text-sm uppercase transition-all before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-blue before:duration-500 after:absolute after:right-1/2 after:top-0 after:h-full after:w-0 after:bg-blue after:duration-500 hover:text-customWhite hover:before:w-1/2 hover:after:w-1/2">
            <span className="relative z-10">Enquire now</span>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="w-full sm:hidden absolute bottom-[-50px] right-0 backdrop-blur-lg py-4 px-2 bg-opacity-60 border border-gray-600 rounded-lg bg-gray-700"
            id="navbar-default"
          >
            <ul className="flex flex-col items-start">
              <li>
                <button className="relative overflow-hidden py-2 px-6 sm:py-3 sm:px-11 rounded-[5px] text-blue font-bold text-base uppercase">
                  <span className="relative z-10">Enquire now</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="max-w-[1250px] px-10 xl:px-0 m-auto h-[calc(100vh-9rem)] flex flex-col sm:flex-row items-start justify-between py-5 sm:py-20">
        <div className="max-w-[400px] sm:max-w-[470px]">
          <h1 className="text-4xl sm:text-5xl font-oswald font-medium text-customWhite uppercase mb-2 sm:mb-4">
            Harbour Lights <br /> de{" "}
            <span className="text-blue">GRESOGONO</span>
          </h1>
          <h3 className="text-customWhite text-[18px] sm:text-[25px] font-bold leading-[25px] sm:leading-[33px]">
            1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
          </h3>
          <div className="w-[280px] sm:w-[300px] h-[40px] text-lightGray bg-[#00000042] px-3 flex items-center mt-5 sm:mt-14 border-l-[3px] border-blue">
            <p className=" text-[14px] font-normal leading-[15px]">
              Rental Returns of{" "}
              <span className="text-[16px] font-semibold">UPTO 11%**</span>
            </p>
          </div>
          <div className="w-[280px] sm:w-[300px] h-[40px] text-lightGray bg-[#00000042] px-3 flex items-center mt-4 border-l-[3px] border-blue">
            <p className=" text-[14px] font-normal leading-[15px]">
              Capital Appreciation of{" "}
              <span className="text-[16px] font-semibold">UPTO 32%**</span>
            </p>
          </div>
        </div>
        <div className="w-[280px] sm:w-[300px] h-[320px] backdrop-blur-md rounded-lg mt-8 sm:mt-0 flex flex-col bg-[#5790BE1F] text-customWhite">
          <div className="px-10 pt-10 sm:pt-12 flex-grow">
            <p className="font-normal text-[13px] leading-[19.5px] tracking-[0.15em]">
              PRICING STARTS FROM
            </p>
            <p className="font-medium font-oswald text-5xl my-2 whitespace-nowrap">
              $ 425,000
            </p>
            <p className="text-[24px] font-oswald font-normal leading-[35.57px] text-left">
              AED 1.3 Million
            </p>
            <button className="bg-blue py-4  w-full mt-3 mb-3 sm:mb-0 sm:mt-5 rounded-[5px] text-customWhite font-bold text-sm uppercase">
              GET A PRESENTATION
            </button>
          </div>
          <div className="w-full h-[60px] px-4 sm:px-6 rounded-b-lg bg-[#5790BE1F] border-t border-[#0000004D] flex items-center justify-center text-[12px] sm:text-[13px] font-normal  leading-[17px] text-lightBlue">
            Get an Expert’s Presentation of Real Estate in Dubai for Life and
            investment
          </div>
        </div>
      </div>
    </div>
  );
}
