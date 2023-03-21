import React, { useEffect, useState } from "react";
import { useSubmitFormApi } from "../../services/datasource";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      // console.log(object);
    }
    // setFirstName("");
  };

  return (
    <div className="container mx-auto lg:px-14 px-5 mt-10 py-5 ">
      {/* <div className="flex flex-col gap-2">
        <h1 className="text-lg text-black font-lato font-semibold">
          Full Name
        </h1>
        <input
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="outline"
          type="text"
          name="firstName"
          id="firstName"
        />
        <label
          className="text-gray-400 text-sm font-ssp font-medium"
          htmlFor="firstName"
        >
          First Name
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">LAST NAME</label>
        <input
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="outline"
          type="text"
          name="lastName"
          id="lastName"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">EMAIL</label>
        <input
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNumber">PHONE NUMBER</label>
        <input
          defaultValue={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="outline"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address">ADDRESS</label>
        <input
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
          className="outline"
          type="text"
          name="address"
          id="address"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-black text-white"
        type="submit"
      >
        Submit
      </button> */}
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
            onClick={handleSubmit}
            className="bg-black text-white rounded-lg py-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
