import React from "react";

interface PolaroidProps {
  image: string;
  alt?: string;
  topMargin?: string;
  leftOffset?: string;
  rotation?: string;
  shadow?: string;
  rotationDegrees?: number;
  translateY?: number;
}

const Polaroid = ({
  image,
  alt = "Polaroid photo",
  topMargin = "mt-4",
  leftOffset = "",
  rotation = "",
  shadow = "",
  rotationDegrees = 0,
  translateY = 0,
}: PolaroidProps) => {
  return (
    <div
      className={`relative ${leftOffset} ${shadow} polaroid-rotate`}
      style={{
        transform: `rotate(${rotationDegrees}deg) translateY(${translateY}px)`,
      }}
    >
      <div className="flex flex-col items-center w-48 h-64 bg-white ">
        <img
          src={image}
          alt={alt}
          className={`w-40 h-48 ${topMargin} object-cover`}
        />
      </div>
    </div>
  );
};

export default Polaroid;
