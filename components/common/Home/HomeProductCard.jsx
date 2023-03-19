import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../redux/cart.slice";
import Modal from "../Modal";

function HomeProductCard({ productData }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  // const [showAddButton, setShowAddbutton] = useState(false);

  const handleIncrement = () => {
    dispatch(incrementQuantity(productData.id));
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(productData.id));
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productData, quantity }));
    setQuantity(1);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  });

  return (
    <div className="bg-white rounded-lg shadow-lg ">
      <Image
        className="rounded-t-lg cursor-pointer w-full h-56 rounded-md rounded-b-none"
        src={productData?.heroImage}
        alt=""
        width={1000}
        height={1000}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <Modal productData={productData?.images} setShowModal={setShowModal} />
      )}
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {productData?.name}
        </h5>
        <p className="mb-3 font-normal line-clamp-3 text-sm text-gray-700 ">
          {productData?.shortDescription}
        </p>

        <div className="border border-b-0 border-l-0 border-r-0">
          <div className="flex items-center mt-3">
            <p className="font-ssp font-semibold text-3xl">
              ₹{productData?.price}
            </p>
            <div className="flex justify-center items-center ml-auto">
              {quantity >= 1 ? (
                <>
                  <button
                    onClick={handleDecrement}
                    className="px-3 py-2 rounded-lg bg-black text-white font-ssp font-semibold text-base"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-black font-lato font-semibold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="px-3 py-2 rounded-lg bg-black text-white font-ssp font-semibold text-base"
                  >
                    +
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleAddToCart}
                    className=" px-3 py-2 rounded-lg bg-black text-white font-ssp font-semibold text-base"
                  >
                    Add to cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
