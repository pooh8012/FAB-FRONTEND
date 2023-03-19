import Image from "next/image";
import React from "react";
import Home from "../../public/Assets/hometop.jpg";

function HomeTop() {
  return (
    <div className="m-0 p-0">
      <div className="flex justify-center relative items-center text-center">
        <div className=" bg-black opacity-50 w-full h-full absolute"></div>
        <Image
          src="https://res.cloudinary.com/dh7xchikj/image/upload/v1674894184/Pooja%20Project/ahsanization-mJi2I9KJPQ8-unsplash_pot5bc.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[30rem] object-cover"
        />
        <div className="absolute">
          <p className="text-white font-lato font-semibold text-6xl">
            At Your Services always
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
