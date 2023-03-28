import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../../utils/function";

function ReviewModal({ setShowModal }) {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="fixed inset-0 z-10 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="md:w-[50rem] bg-white rounded-xl shadow-xl border">
        <div className="p-5">
          <div className="flex justify-center items-center">
            <h1 className="font-lato font-bold text-3xl">Review you cart</h1>
            <p
              onClick={() => setShowModal(false)}
              className="ml-auto cursor-pointer font-semibold text-2xl font-lato"
            >
              X
            </p>
          </div>
          <div className="">
            {cart.length === 0 ? (
              <>Your cart is empty</>
            ) : (
              <>
                {cart?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-col gap-2">{item?.name}</div>
                      <div className="grid grid-cols-3">
                        <div className="col-span-2 border p-2 rounded-lg">
                          <div className="border border-gray-300 rounded-lg bg-cardbg py-2 px-3">
                            <div className="flex gap-3 truncate items-center">
                              <Image
                                src={item?.heroImage}
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-28 h-full rounded-md"
                              />
                              <div className="flex flex-col gap-2">
                                <h3 className="font-lato text-gray-300 font-semibold text-lg">
                                  {item?.name}
                                </h3>
                                <p className="font-ssp truncate text-gray-500 font-medium ">
                                  {item?.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 border p-2 rounded-lg">
                          <div className="flex justify-start items-center">
                            <p className="font-lato font-semibold text-base text-gray-500">
                              {item?.quantity} x ₹{item?.price}
                            </p>
                            <p className="font-lato ml-auto font-semibold text-gray-500 text-xl">
                              ₹{item?.quantity * item?.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <button
              className="flex col-span-2 justify-center items-center"
              onClick={() => setShowModal(false)}
            >
              <Link
                className="bg-black text-lg mt-4 font-semibold font-ssp py-3 rounded-lg text-white px-3 w-full"
                href={`/review`}
              >
                Checkout
              </Link>
            </button>
            <div className="flex">
              <p className="">Payable Amount: </p>
              <p className="">{getTotal(cart) || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
