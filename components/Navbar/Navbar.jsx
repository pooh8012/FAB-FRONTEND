import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cart from "../../public/Assets/shopping-cart.png";
import { useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/cart.slice";
import ReviewModal from "../common/ReviewModal";

function Navbar() {
  // states
  const [navbar, setNavbar] = useState(false);
  const [showModl, setShowModal] = useState(false);
  const router = useRouter();

  const cart = useSelector((state) => state.cart);
  // const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  // console.log(totalItems);
  // let i = 1;
  // useEffect(() => console.log(i++));

  return (
    <>
      <nav className="sticky top-0 inset-x-0 z-10 bg-white justify-center shadow-md">
        <div className="container lg:px-11 mx-auto block justify-between w-full lg:items-center lg:flex">
          <div className="flex items-center justify-center px-3 py-2 md:py-4 lg:block">
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none mt-3"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                  >
                    <path
                      d="M1 12H9C9.55 12 10 11.55 10 11C10 10.45 9.55 10 9 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
                      fill="#323232"
                    />
                  </svg>
                )}
              </button>
            </div>
            <Link className="mx-auto" href="/">
              <p className="text-3xl text-black font-semibold">fabricology</p>
            </Link>
          </div>
          <div>
            <div
              className={`flex justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex  flex-col lg:p-4 mt-4 rounded-lg lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 lg:mt-0 lg:text-sm lg:font-medium lg:bg-transparent ">
                <li
                  className={`${
                    router.pathname === "/"
                      ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                      : "font-semibold"
                  } text-lg font-bold font-mulish px-3 text-black lg:hover:underline decoration-black decoration-[7px] underline-offset-[17px]`}
                >
                  <Link
                    href="/"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/about"
                      ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                      : "font-semibold"
                  } text-lg font-bold font-mulish text-black px-3 lg:hover:underline decoration-black decoration-[7px] underline-offset-[17px]`}
                >
                  <Link
                    className=""
                    href="/about"
                    onClick={() => {
                      setNavbar(!navbar);
                      webEngageEventTracker("menu_click", "hostels");
                    }}
                  >
                    About
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/workations"
                      ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                      : "font-semibold"
                  } text-lg font-bold font-mulish px-3 lg:hover:underline decoration-black text-black decoration-[7px] underline-offset-[17px]`}
                >
                  <Link
                    href="/workations"
                    onClick={() => {
                      setNavbar(!navbar);
                      webEngageEventTracker("menu_click", "workations");
                    }}
                    className="font-mulish"
                  >
                    My Bookings
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/investandpartner"
                      ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                      : "font-semibold"
                  } text-lg font-bold font-mulish px-3 lg:hover:underline decoration-black text-black decoration-[7px] underline-offset-[17px]`}
                >
                  <Link
                    href="/investandpartner"
                    onClick={() => {
                      setNavbar(!navbar);
                      webEngageEventTracker("menu_click", "investandpartner");
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/blogs"
                      ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                      : "font-semibold"
                  } text-lg font-bold font-mulish px-3 lg:hover:underline decoration-black text-black decoration-[7px] underline-offset-[17px]`}
                >
                  <Link
                    target="_blank"
                    href="https://blog.thehosteller.com/"
                    onClick={() => {
                      setNavbar(!navbar);
                      webEngageEventTracker("menu_click", "blogs");
                    }}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <div
                    className="cursor-pointer relative "
                    onClick={() => setShowModal(true)}
                  >
                    {/* {totalItems > 0 ? (
                      <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                        {totalItems}
                      </span>
                    ) : (
                      <></>
                    )} */}

                    <Image src={Cart} alt="" width={20} height={20} />
                  </div>
                </li>
                {showModl && <ReviewModal setShowModal={setShowModal} />}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
