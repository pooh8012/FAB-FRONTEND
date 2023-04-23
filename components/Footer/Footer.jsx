import Image from "next/image";
import React from "react";
import Logo from "../../public/Assets/fablogo.png";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#212A3E] mt-7">
      <div className="container mx-auto pt-5">
        <div className="flex md:flex-row flex-col gap-6 lg:gap-0 items-center lg:px-14 px-5">
          <div className="flex lg:gap-2 items-center">
            <Image
              src={Logo}
              alt=""
              width={1000}
              height={1000}
              className="w-16 h-16"
            />
            <p className="font-ssp font-semibold text-2xl text-white ">
              FABRICATOLOGY
            </p>
          </div>
          <div className="flex gap-3 items-center lg:ml-auto">
            <Link
              href={`/`}
              className="font-ssp font-semibold hover:underline text-white text-xl"
            >
              Home
            </Link>
            <div
              onClick={() => {
                document
                  .getElementById("PRODUCTLISTING")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="font-ssp cursor-pointer font-semibold hover:underline text-white text-xl"
            >
              Product
            </div>
            <Link
              href={`/about`}
              className="font-ssp font-semibold hover:underline text-white text-xl"
            >
              About us
            </Link>
            <Link
              href={`/contact`}
              className="font-ssp font-semibold hover:underline text-white text-xl"
            >
              Contact us
            </Link>
          </div>
        </div>
        <hr className="bg-white mt-10" />
        <div className="px-2 pt-10 pb-2 flex justify-center items-center ">
          <p className="font-lato font-semibold text-white text-lg">
            &copy; {year} Fabricatology. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
