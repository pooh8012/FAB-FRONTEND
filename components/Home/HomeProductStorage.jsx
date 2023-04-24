import React from "react";
import HomeProductCard from "../common/Home/HomeProductCard";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

function HomeProductStorage({ productData }) {
  return (
    <div id="STORAGE" className="container mx-auto md:px-14 px-5 mt-10">
      <h1 className="font-lato font-semibold md:text-3xl text-lg md:text-start text-center">
        Storage
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-5">
        {productData?.map((product, index) => {
          if (product?.type === "STORAGES")
            return <HomeProductCard key={index} productData={product} />;
        })}
      </div>
    </div>
  );
}

export default HomeProductStorage;
