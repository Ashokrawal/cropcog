"use client";
import React from "react";
import "tailwindcss/tailwind.css";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoGmail,
} from "react-icons/bi";

const Notifications = () => {
  return (
    <div className="h-12 text-sm font-sans bg-slate-200 w-full flex flex-wrap justify-center xs:text-12 items-center  md:text-lg">
      <span>Free Delivery on orders above Rs.499!</span>
    </div>
  );
};

export default Notifications;
