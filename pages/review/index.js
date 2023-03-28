import React, { useEffect, useState } from "react";
import { useSubmitFormApi } from "../../services/datasource";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [submitForm, { loading, error, data }] = useSubmitFormApi();

  const [googleDetails, setGoogleDetails] = useState([]);

  const handleSubmit = async (e) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      address !== "" &&
      city !== "" &&
      state !== "" &&
      zipCode !== ""
    ) {
      submitForm({
        variables: {
          firstName,
          lastName,
          phoneNumber,
          email,
          address,
          city,
          state,
          zipCode,
        },
      });
    }
  };

  const { data: session, status } = useSession();

  //Rajorpay Init

  const makePayment = async () => {
    console.log("herr ...");
    const res = await initializeRazorpay();
    if (!res) {
      alert("Rajorpay SDK failed");
      return;
    }

    const rajorPayDetails = await fetch("/api/rajorpay", {
      method: "POST",
    }).then((t) => t.json());
    console.log(rajorPayDetails, "Rajorpay rajorPayDetails");
    var options = {
      key: process.env.RAJOR_PAY_KEY,
      currency: rajorPayDetails.currency,
      amount: rajorPayDetails.amount,
      order_id: rajorPayDetails.id,
      description: "Thank you for you test donation",
      image: "/vercel.svg",
      handler: (response) => {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };
    const paymentObject = new window.Rajorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const totalAmount = localStorage.getItem("totalAmount");
  useEffect(() => {
    console.log(totalAmount);
  }, [totalAmount]);

  return (
    <div className="container mx-auto lg:px-14 px-5 mt-10 py-5 ">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
        <div className="col-span-2 flex flex-col gap-3">
          <div>
            <h1 className="text-xl text-black font-lato font-semibold">
              Full Name
            </h1>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div className="flex flex-col gap-3">
                <input
                  defaultValue={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
                <label
                  className="text-gray-400 text-base font-ssp font-semibold"
                  htmlFor="firstName"
                >
                  First Name
                </label>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
                <label
                  className="text-gray-400 text-base font-ssp font-semibold"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-black font-lato font-semibold">
              Required Information{" "}
              <span className="text-xs text-gray-400">
                (for delivery purpose and for contacting)
              </span>
            </h1>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div className="flex flex-col gap-3">
                <input
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                  type="email"
                  name="email"
                  id="email"
                />
                <label
                  className="text-gray-400 text-base font-ssp font-semibold"
                  htmlFor="firstName"
                >
                  Email
                </label>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  defaultValue={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                />
                <label
                  className="text-gray-400 text-base font-ssp font-semibold"
                  htmlFor="lastName"
                >
                  Phone Number
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="address"
                className="text-xl text-black font-lato font-semibold"
              >
                Address
              </label>
              <input
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                type="text"
                name="address"
                id="address"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="city"
                className="text-xl text-black font-lato font-semibold"
              >
                City
              </label>
              <input
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
                className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="state"
                className="text-xl text-black font-lato font-semibold"
              >
                State*
              </label>
              <input
                defaultValue={state}
                onChange={(e) => setState(e.target.value)}
                className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                type="text"
                name="state"
                id="state"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="zipCode"
                className="text-xl text-black font-lato font-semibold"
              >
                Zip Code*
              </label>
              <input
                defaultValue={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                type="text"
                name="zipCode"
                id="zipCode"
              />
            </div>
          </div>
          <button
            onClick={() => {
              handleSubmit();
              makePayment();
            }}
            className="bg-black text-white rounded-lg py-3"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          {status === "authenticated" ? (
            <>
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="">
                  <Image
                    src={session?.user?.image}
                    alt="The google Image"
                    width={1000}
                    height={1000}
                    className="border-4 border-blue-500 rounded-full w-28 h-28"
                  />
                </div>
                <h3 className="text-black font-semibold text-xl font-lato">
                  {session?.user?.name}
                </h3>
                <p className="font-ssp font-medium text-base text-gray-300">
                  {session?.user?.email}
                </p>
                <button
                  onClick={() => signOut()}
                  className="bg-black p-3 text-white rounded-md text-lg"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="bg-black p-3 text-white rounded-md text-lg"
              >
                Sign In For Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
