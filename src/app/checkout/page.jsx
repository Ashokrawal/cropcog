"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !firstName ||
      !lastName ||
      !city ||
      !state ||
      !phone ||
      !postalCode ||
      !address ||
      !apartment
    ) {
      alert("Please fill all the required fields");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/shippingDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          state,
          address,
          apartment,
          city,
          postalCode,
          phone,
        }),
      });

      if (res.ok) {
        router.push("/shipping");
      } else {
        console.log("Failed to get shipping information");
      }
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

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
        onSubmit={handleSubmit}
        className="md:px-40 lg:px-64 sm:px-10 xl:px-86 xxl:px-96 sm:gap-3 gap-2 flex flex-col"
      >
        <p className="font-extrabold">Contact</p>
        <input
          className="input w-full"
          // type="email"
          name="email"
          id="email"
          value={email}
          required={true}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h1 className="font-medium">Shipping Address</h1>
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            id="firstName"
            className="input w-full sm:w-1/2"
            type="text"
            required
            value={firstName}
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            required
            value={lastName}
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          name="address"
          className="input w-full"
          type="text"
          value={address}
          id="address"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="input w-full"
          type="text"
          value={apartment}
          id="apartment"
          name="apartment"
          placeholder="Apartment, suite, etc"
          onChange={(e) => setApartment(e.target.value)}
        />
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            className="input w-full  sm:w-1/2"
            type="text"
            required
            id="city"
            value={city}
            name="city"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            id="state"
            required
            name="state"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="input w-full sm:w-1/2"
            type="number"
            id="postalCode"
            required
            name="postalCode"
            value={postalCode}
            placeholder="Postal Code"
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <input
          required
          className="input w-full"
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-800 font-black hover:bg-green-600 rounded-md text-white md:px-8 px-6 md:py-4  sm:w-fit w-full py-4"
        >
          Proceed To Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
