import Image from "next/image";
import React from "react";

function ProductListing() {
  return (
    <div className="container mx-auto md:px-14 px-5 lg:mt-20 mt-10">
      <div className="">
        <h1 className="font-lato font-semibold md:text-4xl text-xl text-center">
          My Products
        </h1>
        <div className="grid grid-cols-7 gap-3">
          <div
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("windows")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gray-100 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md col-span-2"
          >
            <p className="font-semibold font-ssp text-lg text-gray-500 uppercase text-end">
              Chairs
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1681240087/1-1-removebg-preview_fokyjv.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="bg-gray-100 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md col-span-3">
            <p className="font-semibold font-ssp text-lg text-gray-500 uppercase text-center">
              Cupboards
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1681240342/Pooja%20Project/1-3-removebg-preview_yi23le.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="bg-gray-100 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md col-span-2">
            <p className="font-semibold font-ssp text-lg text-black text-start">
              Chairs
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1679943217/Pooja%20Project/sofa-removebg-preview_waew3v.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
