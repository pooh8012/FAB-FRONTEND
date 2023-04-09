import React, { useEffect, useState } from "react";
import { useSubmitFormApi } from "../../services/datasource";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getTotal, handleGoogleSignIn } from "../../utils/function";
import axios from "axios";

function index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [amount, setAmout] = useState("");

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const totalAmount = getTotal(cart);
    if (totalAmount) {
      setAmout(totalAmount);
    }
  }, [cart]);

  // OnClick function when the Razorpay api is trigger
  const handleMakePayment = async () => {
    //The function where the Razorpay script helps to load.
    const res = await initializeRazorpay();
    if (!res) {
      alert("The Network issue");
    }

    // Calling Razorpay api and Initlizing the Razorpay
    const response = await axios.post("/api/rajorpay", { amount });
    const { id } = response.data;
    const options = {
      key: "rzp_test_PjvHICxuulxUe6",
      amount: amount,
      currency: "INR",
      name: "Fabricology",
      description: "Safe Payment with us",
      order_id: id,
      callback_url: "http://localhost:3000",
      prefill: {
        email: email,
        contact: phoneNumber,
      },
      handler: (res) => {
        location.href = "http://localhost:3000";
      },
    };

    //When above code excutes then Razorpay modal opens
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const [submitForm, { loading, error, data }] = useSubmitFormApi();

  //Rajorpay script
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  //Handle Submit form when the user click on button
  const handleSubmit = async (e) => {
    firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      address !== "" &&
      city !== "" &&
      state !== "" &&
      zipCode !== "";
    {
      const formData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        city,
        state,
        zipCode,
      };
      submitForm({
        variables: {
          formData,
        },
      });

      try {
        const response = await axios.post("/api/sendConfirmationMail", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          email: formData.email,
        });
        console.log(response, "FormData");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const { data: session, status } = useSession();

  //localstorage

  // review/index.js
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cartData");
    if (localStorageCart) {
      const cart = JSON.parse(localStorageCart);
      setProduct(cart);
    }
  }, []);

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
                  required={true}
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
                  required={true}
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
                  required={true}
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
                  required={true}
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
                required={true}
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
                required={true}
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
                required
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
                required
                defaultValue={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="border focus:outline-none px-2 border-gray-600 rounded-md py-2"
                type="text"
                name="zipCode"
                id="zipCode"
              />
            </div>
          </div>
          {/* The HandleSubmit function and HandleMakePayment is applied on this button */}
          <button
            disabled={
              status !== "authenticated" ||
              firstName === "" ||
              lastName === "" ||
              phoneNumber === "" ||
              email === "" ||
              address === "" ||
              city === "" ||
              zipCode === "" ||
              state === ""
                ? true
                : false
            }
            onClick={() => {
              handleSubmit();
              handleMakePayment();
            }}
            className="bg-black disabled:bg-gray-600 text-white rounded-lg py-3"
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
                onClick={() => handleGoogleSignIn("/g-auth", "Sample")}
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
