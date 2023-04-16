import Image from "next/image";
import React from "react";

function ProductListing() {
  return (
    <div
      id="PRODUCTLISTING"
      className="container mx-auto md:px-14 px-5 lg:mt-20 mt-10"
    >
      <div className="">
        <h1 className="font-lato font-semibold md:text-4xl text-xl text-center">
          My Products
        </h1>
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-3">
          <div
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("CHAIRS")
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
          <div
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("BEDS")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gray-100 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md col-span-3"
          >
            <p className="font-semibold font-ssp text-lg text-gray-500 uppercase text-center">
              Beds
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1681638814/Pooja%20Project/Pooja/bed_yhbof9.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="bg-gray-100 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md col-span-2">
            <p className="font-semibold font-ssp text-lg text-black text-start">
              Storage
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1681638814/Pooja%20Project/Pooja/2_-1-removebg-preview_xuhfyo.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
          <div className="bg-gray-100 md:h-96 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md ">
            <p className="font-semibold font-ssp text-lg text-black text-start">
              Gates
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1681638814/Pooja%20Project/Pooja/8-1-removebg-preview_aa1jwu.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="bg-gray-100 md:h-96 hover:bg-gray-400 transform transition duration-150 ease-in-out cursor-pointer flex flex-col gap-2 p-10  rounded-md">
            <p className="font-semibold font-ssp text-lg text-black text-start">
              Storage
            </p>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1681638814/Pooja%20Project/Pooja/2_-1-removebg-preview_xuhfyo.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
