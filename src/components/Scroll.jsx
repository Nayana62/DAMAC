"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const ScrollImages = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center w-full h-[222px] md:h-[494px] overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={image}
            className={`w-[300px] h-[300px] flex-shrink-0 mx-2 rounded-lg shadow-md transition-opacity duration-300 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            className="absolute w-[34px] h-[34px] top-1/2 left-4 transform -translate-y-1/2 bg-customWhite text-xl rounded-full shadow-md flex justify-center items-center"
            onClick={prevImage}
          >
            <Image
              width={10}
              height={10}
              src={"/assets/left_arrow.svg"}
              alt="left-arrow"
            />
          </button>
          <button
            className="absolute w-[34px] h-[34px] top-1/2 right-4 transform -translate-y-1/2 bg-customWhite rounded-full shadow-md flex justify-center items-center"
            onClick={nextImage}
          >
            <Image
              width={10}
              height={10}
              src={"/assets/right_arrow.svg"}
              alt="right-arrow"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default ScrollImages;
