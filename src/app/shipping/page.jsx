import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import Shipping from "../../components/Shipping";

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
      <Shipping />
    </div>
  );
};

export default ShippingPage;
