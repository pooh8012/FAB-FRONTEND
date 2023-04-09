import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BalconyHomeCard from "../common/Home/BalconyHomeCard";

function HomeBalconyProduct({ productData }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
    <div className="container mx-auto md:px-14 px-5 mt-10">
      <h1 className="font-lato font-semibold md:text-3xl text-lg md:text-start text-center">
        Balcony
      </h1>
      <Slider arrows={false} {...settings} className="mt-5">
        {productData?.map((product, index) => {
          return (
            <div key={index}>
              <BalconyHomeCard productData={product} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeBalconyProduct;
