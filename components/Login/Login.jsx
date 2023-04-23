import Image from "next/image";
import React from "react";
import Logo from "../../public/Assets/fablogo.png";
import GoogleIcon from "../../public/Assets/google.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { handleGoogleSignIn } from "../../utils/function";

function Login() {
  return (
    <div className="container mx-auto md:px-32 px-5 md:py-10">
      <div className="rounded-md shadow-2xl border flex items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-white">
          <div>
            <Image
              src="https://res.cloudinary.com/dh7xchikj/image/upload/v1680952530/loginpageimage_vutrc4.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col gap-2 jys">
              <Image
                src={Logo}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-32 h-32"
              />
            </div>
            <p className="font-lato font-semibold text-2xl">WELCOME</p>
            <p className="font-ssp text-gray-400 font-medium text-lg">
              Please login to process with your checkout.
            </p>
            <div className="px-3 py-2 bg-white rounded-full shadow-md border">
              <div
                onClick={() => handleGoogleSignIn("/g-auth", "Google login")}
                className="flex gap-2 items-center cursor-pointer"
              >
                <Image src={GoogleIcon} alt="" width={20} height={20} />
                <p className="font-ssp font-semibold text-lg">
                  Sign up from Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
