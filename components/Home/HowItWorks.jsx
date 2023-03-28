import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function HowItWorks() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart, "The cart");
  // const [cartArr, setCartArr] = useState([]);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="container mx-auto md:px-14 px-5 mt-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <p className="font-lato md:text-3xl font-semibold text-2xl md:text-start text-center underline underline-offset-2">
            How it works
          </p>
          <div className="mt-6">
            <p className="font-lato font-semmibold md:text-xl text-lg text-gray-700">
              Its Easy, <br />
              <span className="font-ssp font-medium md:text-sm text-xs text-gray-700">
                Explore our best product in all time. Select your product, add
                to the cart. Place your order. And tdatda. You have booked your
                service at your doorstep. Second Step will be that you will get
                confirmation email from us and one of our representive will
                visit at your doorstep. And check with requirement. Third Step
                will be the representive will quote you the amount. Fourth Step
                will be the payment, if you agry working with us the
                representive will give contract form to deal with our company.
                Our policies is that you have pay half money in advance. Fifth
                step will be that you pay the representive half amount, with any
                mode, online or offline depends on your requirment
              </span>
            </p>
          </div>
        </div>
        <div className="">
          {/* {cart.length === 0 ? (
            <>Your cart is empty</>
          ) : ( */}
          <>
            {cart?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col gap-2">{item?.name}</div>
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 border p-2 rounded-lg">
                      <div className="border border-gray-300 rounded-lg bg-cardbg py-2 px-3">
                        <div className="flex gap-3 truncate items-center">
                          {/* <Image
                              src={item?.heroImage}
                              alt=""
                              width={1000}
                              height={1000}
                              className="w-28 h-full rounded-md"
                            /> */}
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
                  {/* <button
                        onClick={() => setShowModal(false)}
                        className="bg-black text-lg mt-4 font-semibold font-ssp py-3 rounded-lg text-white w-full"
                      >
                        <Link href={`/review`}>Checkout</Link>
                      </button> */}
                </div>
              );
            })}
            {getTotal() || 0}
          </>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
