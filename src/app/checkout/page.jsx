import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const CheckoutPage = () => {
  return (
    <div className="h-screen px-4 md:px-20 w-full">
      <div className="flex items-center text-base md:text-lg justify-center md:gap-1 p-4">
        <span>Cart</span>
        <AiOutlineRight />
        <span className="font-black">Information</span>
        <AiOutlineRight />
        <span>Shipping</span>
        <AiOutlineRight />
        <span>Payment</span>
      </div>
      <div>
        <h1 className="font-bold">Contact</h1>
        <input className="input w-full" placeholder="Email or mobile number" />
        <h1 className="font-bold">Shipping Address</h1>
        <input className="input w-full" placeholder="First Name" />
      </div>
    </div>
  );
};

export default CheckoutPage;
