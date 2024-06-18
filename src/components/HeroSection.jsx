import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div
      className="w-screen h-screen  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/home.jpg')" }}
    >
      <nav className="max-w-[1250px] m-auto h-36 flex justify-between items-center">
        <Image width={165} height={20} src={"/assets/logo.svg"} alt="logo" />
        <button className="relative overflow-hidden border-2 border-blue py-3  px-11 rounded-[5px] text-blue font-bold text-sm uppercase transition-all before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-blue before:duration-500 after:absolute after:right-1/2 after:top-0 after:h-full after:w-0 after:bg-blue after:duration-500 hover:text-customWhite  hover:before:w-1/2 hover:after:w-1/2">
          <span className="relative z-10">Equire now</span>
        </button>
      </nav>
      <div className="max-w-[1250px] m-auto h-[calc(100vh-9rem)] flex items-start justify-between py-20">
        <div className="w-[470px]">
          <h1 className="text-5xl font-oswald font-medium text-customWhite uppercase mb-4 ">
            Harbour Lights <br /> de{" "}
            <span className="text-blue">GRESOGONO</span>
          </h1>
          <h3 className=" text-customWhite text-[25px] font-bold leading-[33px]">
            1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
          </h3>
          <div className="w-[300px] h-[40px] text-lightGray bg-[#00000042] px-3 flex items-center mt-14 border-l-[3px] border-blue">
            <p className=" text-[14px] font-normal leading-[15px]">
              Rental Returns of{" "}
              <span className="text-[16px] font-semibold">UPTO 11%**</span>
            </p>
          </div>
          <div className="w-[300px] h-[40px] text-lightGray bg-[#00000042] px-3 flex items-center mt-4 border-l-[3px] border-blue">
            <p className=" text-[14px] font-normal leading-[15px]">
              Capital Appreciation of{" "}
              <span className="text-[16px] font-semibold">UPTO 32%**</span>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[320px] backdrop-blur-md rounded-lg flex flex-col bg-[#5790BE1F] text-customWhite">
          <div className="px-10 pt-12 flex-grow">
            <p className="font-normal  text-[13px] leading-[19.5px] tracking-[0.15em]">
              PRICING STARTS FROM
            </p>
            <p className="font-medium font-oswald text-5xl my-2">$ 425,000</p>
            <p className="text-[24px] font-oswald font-normal leading-[35.57px] text-left">
              AED 1.3 Million
            </p>
            <button className="bg-blue py-4  w-full mt-5 rounded-[5px] text-customWhite font-bold text-sm uppercase">
              GET A PRESENTATION
            </button>
          </div>
          <div className="w-full h-[60px]  px-6 rounded-b-lg bg-[#5790BE1F] border-t border-[#0000004D] flex items-center justify-center text-[13px] font-normal  leading-[17px] text-lightBlue">
            Get an Expert’s Presentation of Real Estate in Dubai for Life and
            investment
          </div>
        </div>
      </div>
    </div>
  );
}
