"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";

const CheckoutPage = () => {
  const [userData, setUserData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // start: "100px",
  //       xs: "350px",
  //       xxs: "450px",
  //       sm: "540px",
  //       xsm: "640px",
  //       md: "830px",
  //       lg: "1024px",
  //       xl: "1430px",
  //       xxl: "1536px",

  return (
    <div className="h-auto px-4 xl:px-20 w-full mb-10">
      <div className="flex items-center text-base md:text-lg justify-center md:gap-1 py-6">
        <span className="text-gray-600">Cart</span>
        <AiOutlineRight />
        <span className="font-extrabold">Information</span>
        <AiOutlineRight />
        <span className="text-gray-600">Shipping</span>
        <AiOutlineRight />
        <span className="text-gray-600">Payment</span>
      </div>
      <form
        className="md:px-40 lg:px-64 sm:px-10 xl:px-86 xxl:px-96 sm:gap-3 gap-2 flex flex-col"
        onSubmit={handleSubmit}
      >
        <p className="font-extrabold">Contact</p>
        <input
          className="input w-full"
          type="text"
          required
          placeholder="Email or mobile number"
        />
        <h1 className="font-medium">Shipping Address</h1>
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            className="input w-full sm:w-1/2"
            type="text"
            required
            placeholder="First Name"
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            required
            placeholder="Last Name"
          />
        </div>

        <input className="input w-full" placeholder="Address" />
        <input
          className="input w-full"
          type="text"
          placeholder="Apartment, suite, etc (optional)"
        />
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            className="input w-full  sm:w-1/2"
            type="text"
            required
            placeholder="City"
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            required
            placeholder="State"
          />
          <input
            className="input w-full sm:w-1/2"
            type="number"
            required
            placeholder="Postal Code"
          />
        </div>
        <input
          required
          className="input w-full"
          type="number"
          placeholder="Phone"
        />
        <Link href="/shipping" className="w-full mt-2">
          <button className="bg-green-800 font-black hover:bg-green-600 rounded-md text-white md:px-8 px-6 md:py-4  sm:w-fit w-full py-4">
            Proceed To Pay
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CheckoutPage;
