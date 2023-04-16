import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Modal({ setShowModal, productData }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 z-10 bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="md:w-[50rem] bg-white rounded-xl shadow-xl border">
        <div className="p-5 ">
          <div className="flex justify-center items-center">
            <h1 className="font-lato font-bold text-3xl">Product Details</h1>

            <div
              onClick={() => setShowModal(false)}
              className=" ml-auto cursor-pointer"
            >
              <svg
                className="h-6 w-6 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {productData?.images?.map((image, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={image}
                      alt="Product image"
                      width={1000}
                      height={1000}
                      className="w-full h-96"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex items-center">
              <h3 className="font-ssp text-black font-semibold text-2xl uppercase">
                {productData?.name}
              </h3>
              <h3 className="font-ssp text-2xl ml-auto font-semibold">
                ₹{productData?.price}
              </h3>
            </div>
            <p className="font-lato text-gray-400 font-medium text-sm">
              {productData?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
