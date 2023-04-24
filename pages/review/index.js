import React, { use, useEffect, useState } from "react";
import { useSubmitFormApi } from "../../services/datasource";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getTotal, handleGoogleSignIn } from "../../utils/function";
import axios from "axios";
import Loginmodal from "../../components/Login/Loginmodal";

function Review() {
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

  const [product, setProduct] = useState([]);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cartData");
    if (localStorageCart) {
      const cartData = JSON.parse(localStorageCart);
      const productIds = cartData.productIds;
      const quantities = cartData.quantities;
      const totalPrice = cartData.totalPrice;

      if (totalPrice) {
        console.log(totalPrice, "toatal price");
        const gst = totalPrice * 0.18;
        console.log(typeof gst, "Gst type");
        const deliveryCharges = 500;
        console.log(typeof deliveryCharges, "delivery type");
        const updatePrice = totalPrice + gst + deliveryCharges;
        setCalculatedPrice(Number(updatePrice));
      }

      setProduct(
        productIds.map((product, index) => ({
          ...product,
        }))
      );
    } else {
      console.log("Cart is empty");
    }
  }, []);

  useEffect(() => {
    console.log(calculatedPrice);
    console.log(typeof calculatedPrice);
  }, [calculatedPrice]);

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
    const response = await axios.post("/api/rajorpay", {
      amount: calculatedPrice,
    });
    const { id } = response.data;
    const totalCalculatedPrice = Math.round(calculatedPrice * 100);
    const totalCalculatedString = totalCalculatedPrice.toString();
    const options = {
      key: "rzp_test_PjvHICxuulxUe6",
      amount: totalCalculatedString,
      currency: "INR",
      name: "FABRICATOLOGY",
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

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mx-auto lg:px-14 px-5 mt-10 py-5 ">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-2">
        <div className="col-span-3 flex flex-col gap-3">
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
              firstName === "" ||
              lastName === "" ||
              phoneNumber === "" ||
              email === "" ||
              address === "" ||
              city === "" ||
              zipCode === "" ||
              state === ""
                ? true
                : status === "unauthenticated"
                ? false
                : false
            }
            onClick={() => {
              if (status === "unauthenticated") {
                setShowModal(true);
              } else {
                handleSubmit();
                handleMakePayment();
                setShowModal(false);
              }
            }}
            className="bg-black disabled:bg-gray-600 text-white rounded-lg py-3"
            type="submit"
          >
            Submit
          </button>
        </div>
        {showModal && <Loginmodal setShowModal={setShowModal} />}
        <div className="col-span-2 overflow-y-auto">
          <div className="flex flex-col gap-3 px-3 py-5 rounded-md border">
            {!product ? (
              <></>
            ) : (
              product?.map((data, index) => {
                return (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="p-2 bg-gray-200 rounded-md">
                      <Image
                        src={data?.heroImage}
                        alt=""
                        width={1000}
                        height={1000}
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className="font-ssp font-semibold text-base">
                        {data?.name}
                      </p>
                      <p className="font-ssp font-semibold text-base text-gray-400">
                        Quantity: {data?.quantity}
                      </p>
                    </div>
                    <h3 className="font-lato font-semibold text-lg text-black ml-auto">
                      ₹{data?.price}
                    </h3>
                  </div>
                );
              })
            )}
          </div>
          <div className="flex flex-col gap-2 p-2">
            <div className="flex items-center">
              <p className="font-ssp font-semibold text-lg">Subtotal:</p>
              <p className="font-lato font-semibold text-base text-black ml-auto">
                ₹{amount}
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-ssp font-semibold text-lg">GST(18%):</p>
              <p className="font-lato font-semibold text-base text-black ml-auto">
                ₹{amount * 0.18}
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-ssp font-semibold text-lg">Delivery Fee:</p>
              <p className="font-lato font-semibold text-base text-black ml-auto">
                ₹500
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-ssp font-semibold text-xl">Total:</p>
              <p className="font-lato font-semibold text-lg text-black ml-auto">
                ₹{calculatedPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
