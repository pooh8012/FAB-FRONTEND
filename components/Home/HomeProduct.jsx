import React from "react";
import HomeProductCard from "../common/Home/HomeProductCard";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

function HomeProduct({ productData }) {
  return (
    <div id="windows" className="container mx-auto md:px-14 px-5 ">
      <h1 className="font-lato font-semibold md:text-3xl text-lg md:text-start text-center">
        Windows
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {productData?.map((product, index) => {
          if (product?.type === "WINDOW")
            return <HomeProductCard key={index} productData={product} />;
        })}
      </div>
    </div>
  );
}

export default HomeProduct;
