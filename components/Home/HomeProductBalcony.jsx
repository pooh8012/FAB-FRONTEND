import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BalconyHomeCard from "../common/Home/BalconyHomeCard";

function HomeProductBalcony({ productData }) {
  return (
    <div id="BALCONY" className="container mx-auto md:px-14 px-5 mt-10">
      <h1 className="font-lato font-semibold md:text-3xl text-lg md:text-start text-center">
        Balcony
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {productData?.map((product, index) => {
          if (product?.type === "BALCONY")
            return <HomeProductCard key={index} productData={product} />;
        })}
      </div>
    </div>
  );
}

export default HomeProductBalcony;
