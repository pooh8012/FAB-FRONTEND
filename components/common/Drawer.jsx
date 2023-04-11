import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../utils/function";
import Link from "next/link";
import { useRouter } from "next/router";
import Delete from "../../public/Assets/delete.png";
import { removeItem } from "../../redux/cart.slice";

const CartDrawer = ({ open, onClose }) => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  const handleCheckout = () => {
    if (cart?.length === 0) {
    } else {
      router.push("/review");
      localStorage.setItem(
        "cartData",
        JSON.stringify({
          cart: cart,
          totalPrice: getTotal(cart),
          quantity: cart?.quantity,
        })
      );
    }
  };

  const dispatch = useDispatch();

  return (
    <div
      className={`fixed inset-0 z-10 bg-opacity-25 backdrop-grayscale ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        style={{ zIndex: "1" }}
        className="absolute top-0 right-0 pt-2 pr-4  w-96 px-5 py-10 h-full border border-solid shadow-lg bg-white"
      >
        <div className="flex items-center border border-black py-2 border-t-0 border-l-0 border-r-0 border-b">
          <h1 className="font-ssp font-medium text-lg text-black">
            Shopping cart
          </h1>
          <button onClick={() => onClose(false)} className="ml-auto">
            <svg
              className="h-6 w-6 "
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="h-80 overflow-y-auto">
          {cart?.length === 0 ? (
            <div className="grid place-items-center">
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col w-full gap-2 mt-10">
                {cart?.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <div className="bg-blue-200 rounded-md p-3">
                        <Image
                          src={item?.heroImage}
                          alt=""
                          width={1000}
                          height={1000}
                          className="w-9 h-9"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-1">
                        <div className="flex items-center">
                          <h1 className="font-semibold text-black text-lg">
                            {item?.name}
                          </h1>
                          <div
                            onClick={() => dispatch(removeItem(item?._id))}
                            className="ml-auto cursor-pointer"
                          >
                            <Image
                              src={Delete}
                              alt=""
                              width={15}
                              height={15}
                              className=""
                            />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-gray-400 font-lato text-sm">
                            {item?.quantity} x ₹{item?.price}
                          </p>
                          <p className="font-lato ml-auto font-semibold text-gray-400 text-lg">
                            ₹{item?.quantity * item?.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div className="flex  justify-between mb-auto border py-2 border-black border-t border-b border-l-0 border-r-0">
          <div className="flex w-full items-center">
            <p className="font-lato font-semibold text-black text-lg">
              Subtotal
            </p>
            <p className="font-lato font-semibold text-black text-lg ml-auto">
              ₹{getTotal(cart || 0)}
            </p>
          </div>
        </div>
        <div
          onClick={() => onClose(false)}
          className="w-full flex justify-center mt-3"
        >
          <button
            disabled={cart?.length === 0 ? true : false}
            onClick={() => {
              onClose(false);
              handleCheckout();
            }}
            href="/review"
            className="bg-yellow-300 disabled:bg-gray-400 font-ssp font-semibold text-lg px-10 rounded-md py-1"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
