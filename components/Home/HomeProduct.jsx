import React from "react";
import HomeProductCard from "../common/Home/HomeProductCard";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

function HomeProduct({ productData }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(productData);
  return (
    <div className="container mx-auto md:px-14 px-5 ">
      <h1 className="font-lato font-semibold md:text-3xl text-lg md:text-start text-center">
        Windows
      </h1>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {productData?.map((product, index) => {
          if (product.name === "Window")
            return <HomeProductCard key={index} productData={product} />;
        })}
      </div>
      {/* <div className="grid grid-cols-4 gap-3">
        {cart.length === 0 ? (
          <>You cart is empty</>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              {cart.map((item, index) => {
                return <HomeProductCard key={index} productData={item} />;
              })}
            </div>
          </>
        )}
      </div> */}
    </div>
  );
}

export default HomeProduct;