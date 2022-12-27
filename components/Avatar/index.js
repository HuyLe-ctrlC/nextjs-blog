import Image from "next/image";
import React from "react";

export default function Avatar({ imgSrc }) {
  return (
    <div>
      <Image
        src={imgSrc} // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  );
}
