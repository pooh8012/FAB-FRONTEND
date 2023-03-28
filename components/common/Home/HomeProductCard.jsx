import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import Bag from "../../../public/Assets/bag.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";

function HomeProductCard({ productData }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  });

  return (
    <div className="bg-[#f8f8f8] rounded-lg shadow-lg ">
      <div className="p-5">
        <Image
          className="rounded-t-lg  cursor-pointer w-full h-56 rounded-md rounded-b-none"
          src={productData?.heroImage}
          alt=""
          width={1000}
          height={1000}
          onClick={() => setShowModal(true)}
        />
        {showModal && (
          <Modal
            productData={productData?.images}
            setShowModal={setShowModal}
          />
        )}
        <div className="">
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
                <button
                  onClick={() => dispatch(addToCart(productData))}
                  className="p-3 hover:scale-90 transform transition duration-75 bg-blue-600 rounded-full"
                >
                  <Image src={Bag} alt="" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
