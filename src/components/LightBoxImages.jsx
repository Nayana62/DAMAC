import React, { useEffect } from "react";
import Image from "next/legacy/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const LightBoxImages = () => {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {
      AnimationDuration: 300,
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  const images = [
    { src: "/assets/img1.svg", alt: "img1" },
    { src: "/assets/img2.svg", alt: "img2" },
    { src: "/assets/img3.svg", alt: "img3" },
    { src: "/assets/img4.svg", alt: "img4" },
    { src: "/assets/img5.svg", alt: "img5" },
  ];

  return (
    <div className="w-full">
      {/* Large Image */}
      <div className="w-full h-[222px] md:h-[494px] relative my-3 md:my-5">
        <div className="absolute inset-0">
          <a data-fancybox="gallery" href={images[0].src}>
            <Image
              layout="fill"
              objectFit="cover"
              src={images[0].src}
              alt={images[0].alt}
              className="rounded-[14px]"
            />
          </a>
        </div>
        {/* Left and right arrow buttons */}
        <div>
          <div className="absolute w-[34px] h-[34px] top-1/2 left-4 pointer-events-none transform -translate-y-1/2 bg-customWhite text-xl rounded-full shadow-md flex justify-center items-center">
            <Image
              width={10}
              height={10}
              src={"/assets/left_arrow.svg"}
              alt="left-arrow"
            />
          </div>
          <div className="absolute w-[34px] h-[34px] top-1/2 right-4 pointer-events-none transform -translate-y-1/2 bg-customWhite rounded-full shadow-md flex justify-center items-center">
            <Image
              width={10}
              height={10}
              src={"/assets/right_arrow.svg"}
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
      {/* small for images */}
      <div className="w-full flex gap-1 lg:gap-0 justify-normal lg:justify-between">
        {images.slice(1).map((image) => (
          <div key={image}>
            <a data-fancybox="gallery" href={image.src}>
              <Image
                loading="lazy"
                width={300}
                height={200}
                src={image.src}
                alt={image.alt}
                className="rounded-lg"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightBoxImages;
