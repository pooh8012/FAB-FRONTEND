import Image from "next/image";
import React from "react";

function AboutTop() {
  return (
    <div className="m-0 p-0">
      <div className="relative">
        <div className="bg-black absolute opacity-50 w-full h-full"></div>
        <Image
          src="https://res.cloudinary.com/dh7xchikj/image/upload/v1680862235/aboutus_th3yz0.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full lg:h-[45rem] h-full object-cover"
        />
      </div>
    </div>
  );
}

export default AboutTop;
