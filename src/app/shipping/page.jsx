import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

// start: "100px",
//       xs: "350px",
//       xxs: "450px",
//       sm: "540px",
//       xsm: "640px",
//       md: "830px",
//       lg: "1024px",
//       xl: "1430px",
//       xxl: "1536px",

const ShippingPage = () => {
  return (
    <div className="h-screen px-4 flex flex-col gap-2 ">
      <div className="flex items-center text-base md:text-lg justify-center md:gap-1 pt-5 pb-3">
        <span>Cart</span>
        <AiOutlineRight />
        <span>Information</span>
        <AiOutlineRight />
        <span className="font-bold">Shipping</span>
        <AiOutlineRight />
        <span>Payment</span>
      </div>
      <div className="card md:px-30 lg:px-40 sm:px-10 xl:px-86 xxl:px-96 flex flex-col">
        <div className="top-section p-4 rounded-t-lg w-full border-2  border-gray-400 border-solid">
          <div className="flex items-center justify-between">
            <span>Contact</span>
            <button className="underline text-gray-500">Change</button>
          </div>
          <br />
          <div>
            <p className="text-gray-500">Name</p>
            <p className="text-gray-500">Email</p>
          </div>
        </div>
        <div className="top-section p-4 rounded-b-lg w-full border-2 border-t-0  border-gray-400 border-solid">
          <div className="flex items-center justify-between">
            <span>Contact</span>
            <button className="underline text-gray-500">Change</button>
          </div>
          <br />
          <div>
            <p className="text-gray-500">Address</p>
            <p className="text-gray-500">Mobile Number</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Shipping Method</p>

          <div className="flex items-center mt-2 mb-4 justify-between w-full border-2 p-3 rounded-lg  border-gray-400 border-solid">
            <p>Shipping type</p>
            <p>FREE</p>
          </div>
          <Link href="/shipping" className="w-full mt-2">
            <button className="bg-green-800 font-black hover:bg-green-600 rounded-md text-white md:px-8 px-6 md:py-4  sm:w-fit w-full py-4">
              Continue To Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
