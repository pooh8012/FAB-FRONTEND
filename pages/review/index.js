import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { SUBMIT_FORM_DATA } from "../../services/BookingForm/Mutation";
import { client } from "../../graphql/apollo.config";

function index() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [submitForm, { loading, error, data }] = useMutation(SUBMIT_FORM_DATA, {
    client,
  });

  //   console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNumber, address } = formData;
    try {
      const response = await submitForm({
        variables: {
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
        },
      });
      console.log(response.data.submitForm);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mt-28">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            value={formData.firstName}
            onChange={handleInputChange}
            className="outline"
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            value={formData.lastName}
            onChange={handleInputChange}
            className="outline"
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">EMAIL</label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            className="outline"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
          <input
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="outline"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">ADDRESS</label>
          <input
            value={formData.address}
            onChange={handleInputChange}
            className="outline"
            type="text"
            name="address"
            id="address"
          />
        </div>
        <button className="bg-black text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default index;
