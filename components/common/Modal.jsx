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
  console.log(productData);
  return (
    <div className="fixed inset-0 z-10 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="md:w-[35rem] bg-white rounded-xl shadow-xl border">
        <div className="p-5 ">
          <div className="flex justify-center items-center">
            <h1 className="font-lato font-bold text-3xl">Product Details</h1>
            <p
              onClick={() => setShowModal(false)}
              className="ml-auto cursor-pointer font-semibold text-2xl font-lato"
            >
              X
            </p>
          </div>
          <div>
            <Slider {...settings}>
              {productData?.map((image, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={image?.images}
                      alt="Product image"
                      width={1000}
                      height={1000}
                      className="w-full h-52"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
