import React from "react";
import Image from "next/image";
import GoogleIcon from "../../public/Assets/google.png";
import { handleGoogleSignIn } from "../../utils/function";

function Loginmodal({ setShowModal }) {
  return (
    <div className="fixed inset-0 z-10 bg-opacity-25 bg-black flex items-center justify-center">
      <div className="md:w-96 bg-white rounded-xl shadow-xl border">
        <div className="p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center">
              <p className="font-lato font-semibold text-black text-2xl">
                Login
              </p>
              <svg
                onClick={() => setShowModal(false)}
                className="h-6 w-6 ml-auto cursor-pointer"
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
            </div>
            <p className="font-ssp font-medium text-lg text-gray-300">
              Please login to proceed with your transaction
            </p>
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/Assets/fablogo.png"
                alt=""
                width={100}
                height={100}
              />
              <p className="font-ssp font-semibold text-xl">FABRICATOLOGY</p>

              <div
                onClick={() => {
                  handleGoogleSignIn("/g-auth", "google login");
                }}
                className="bg-white cursor-pointer rounded-full shadow-lg py-2 px-5 flex gap-2 items-center"
              >
                <Image src={GoogleIcon} alt="" width={20} height={20} />
                <p className="font-ssp font-semibold text-lg">
                  Sign in with google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginmodal;
