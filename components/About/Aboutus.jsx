import Image from "next/image";
import React from "react";

function Aboutus() {
  return (
    <div className="m-0 p-0">
      <div className="relative">
        <div className=" bg-black opacity-50 w-full h-full absolute"></div>

        <Image
          src={`https://res.cloudinary.com/dh7xchikj/image/upload/v1674894181/Pooja%20Project/christopher-burns-8KfCR12oeUM-unsplash_syx6n6.jpg`}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-3">
          <h3 className="font-ssp font-bold text-8xl text-white uppercase">
            Welcome to
          </h3>
          <h5 className="font-ssp font-bold text-3xl text-white">
            FABRICATOLOGY
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
