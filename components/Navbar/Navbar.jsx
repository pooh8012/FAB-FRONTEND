import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/Assets/fablogo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Cart from "../../public/Assets/shopping-cart.png";
import { useSelector } from "react-redux";
import CartDrawer from "../common/Drawer";
import User from "../../public/Assets/user.png";
import { useSession } from "next-auth/react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [showModl, setShowModal] = useState(false);
  const router = useRouter();

  const cart = useSelector((state) => state.cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModl ? "hidden" : "auto";
  });

  const { data: session, status } = useSession();

  return (
    <div className="sticky top-0 inset-x-0 z-10 bg-white justify-center shadow-md">
      <div className="container mx-auto lg:px-14 w-full lg:flex block py-2">
        <div className="flex justify-center items-center">
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

          <Link className="mx-auto flex items-center" href="/">
            <Image src={Logo} alt="" width={40} height={40} />
            <p className="font-ssp font-semibold text-lg">FABRICATOLOGY</p>
          </Link>
          <div className="lg:hidden flex gap-2 mx-2">
            <div
              onClick={() => {
                setShowModal(true);
              }}
              className="cursor-pointer"
            >
              <div className="relative">
                <Image src={Cart} alt="" width={20} height={20} />
                {totalItems === 0 ? (
                  <></>
                ) : (
                  <div className="absolute -top-3 -right-3 px-1 bg-blue-500 opacity-60 rounded-full text-center">
                    {totalItems}
                  </div>
                )}
              </div>
            </div>
            {status === "unauthenticated" ? (
              <div className="border-2 p-0.5 rounded-full border-black">
                <Link href={`/login`} className="">
                  <Image src={User} alt="" width={15} height={15} />
                </Link>
              </div>
            ) : (
              <div className="rounded-full">
                <Link href={`/profile`}>
                  <Image
                    src={session.user.image}
                    alt=""
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </Link>
              </div>
            )}

            <CartDrawer open={showModl} onClose={setShowModal} />
          </div>
        </div>
        <div
          className={`flex lg:justify-center items-center lg:block w-full ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex justify-center lg:flex-row flex-col gap-3 lg:items-center">
            <li
              className={`${
                router.pathname === "/"
                  ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                  : "font-semibold"
              } text-lg font-bold font-ssp px-3 text-black lg:hover:underline decoration-black decoration-[7px] underline-offset-[17px]`}
            >
              <Link
                href="/"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                HOME
              </Link>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("PRODUCTLISTING")
                  .scrollIntoView({ behavior: "smooth" });
                setNavbar(!navbar);
              }}
              className={` text-lg font-semibold cursor-pointer font-ssp uppercase text-black px-3 lg:hover:underline decoration-black decoration-[7px] underline-offset-[17px]`}
            >
              Product
            </li>
            <li
              className={`${
                router.pathname === "/about"
                  ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                  : "font-semibold"
              } text-lg font-bold font-ssp uppercase px-3 text-black lg:hover:underline decoration-black decoration-[7px] underline-offset-[17px]`}
            >
              <Link
                href="/about"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                ABOUT US
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/contact"
                  ? "lg:underline lg:decoration-ht-100 lg:underline-offset-[17px]  lg:decoration-[7px] "
                  : "font-semibold"
              } text-lg font-bold font-ssp uppercase px-3 text-black lg:hover:underline decoration-black decoration-[7px] underline-offset-[17px]`}
            >
              <Link
                href="/contact"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                CONTACT US
              </Link>
            </li>
            <li className="hidden lg:block border border-black border-l-0 border-t-0 border-b-0 border-r-2 px-1 ">
              <div
                onClick={() => {
                  setShowModal(true);
                  setNavbar(!navbar);
                }}
                className="cursor-pointer ml-auto"
              >
                <div className="relative">
                  <Image src={Cart} alt="" width={20} height={20} />
                  {totalItems === 0 ? (
                    <></>
                  ) : (
                    <div className="absolute -top-3 -right-3 px-1 bg-blue-500 opacity-60 rounded-full text-center">
                      {totalItems}
                    </div>
                  )}
                </div>
              </div>

              <CartDrawer open={showModl} onClose={setShowModal} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
