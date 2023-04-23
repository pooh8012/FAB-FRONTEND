import React from "react";
import HomeProductCard from "../common/Home/HomeProductCard";

function HomeProductGates({ productData }) {
  return (
    <div id="GATES" className="container mx-auto md:px-14 px-5 mt-10">
      <h1 className="font-lato font-semibold md:text-3xl text-lg md:text-start text-center">
        Gates
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {productData?.map((product, index) => {
          if (product?.type === "GATES")
            return <HomeProductCard key={index} productData={product} />;
        })}
      </div>
    </div>
  );
}

export default HomeProductGates;
