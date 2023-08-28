"use client";
import { useState } from "react";
import Link from "next/link";

import { FiShoppingCart, FiSearch } from "react-icons/fi";
import "../styles/styles.css";

import { useDispatch, useSelector } from "react-redux";

import { allCartItems } from "../store/reducers/cartSlice";

// start: "100px",
//       xs: "450px",
//       xsm: "540px",
//       sm: "640px",
//       md: "760px",
//       lg: "1100px",
//       xl: "1280px",
//       xxl: "1536px",

const links = [
  { id: 1, title: "Home", url: "/", target: "" },
  { id: 2, title: "Products", url: "/products", target: "" },
  { id: 3, title: "Blogs", url: "https://aasblogs.in/", target: "_blank" },
  {
    id: 4,
    title: "Our Services",
    url: "https://ananthagriservices.in/",
    target: "_blank",
  },
  {
    id: 5,
    title: "About Us",
    url: "/aboutus",
    target: "",
  },
];

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 right-0 h-screen w-screen bg-white transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col md:px-10 m-4  ">
        <Link
          className="font-semibold md:text-4xl text-2xl body-font"
          href="/"
          onClick={() => setOpen(!open)}
        >
          CropCog
        </Link>
        <menu className="flex flex-col justify-start items-start mt-20">
          <Link
            className="text-2xl md:text-4xl font-semibold my-6 focus:text-red-500 hover:text-red-500"
            href="/products"
            onClick={() => setOpen(!open)}
          >
            Products
          </Link>
          <div className="flex flex-col">
            <Link
              className="text-lg font-semibold my-2 hover:text-red-500"
              href="/cart"
              onClick={() => setOpen(!open)}
            >
              Wishlist
            </Link>
            <Link
              className="text-lg  font-semibold mb-2 my-2 hover:text-red-500"
              href="/cart"
              onClick={() => setOpen(!open)}
            >
              Cart
            </Link>
          </div>
          <div className="flex flex-col mt-10">
            <Link
              className="text-md my-2 text-gray-600 hover:text-red-500"
              href="/aboutus"
              onClick={() => setOpen(!open)}
            >
              About Us
            </Link>
            <Link
              className="text-md  text-gray-600 my-2 hover:text-red-500"
              href="https://aasblogs.in/"
              onClick={() => setOpen(!open)}
            >
              Blogs
            </Link>
            <Link
              className="text-md  text-gray-600 my-2 hover:text-red-500"
              href="/contactUs"
              onClick={() => setOpen(!open)}
            >
              Contact Us
            </Link>
            <Link
              className="text-md  text-gray-600 my-2 hover:text-red-500"
              href="/contactUs"
              onClick={() => setOpen(!open)}
            >
              FAQS
            </Link>
          </div>
        </menu>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cartList = useSelector(allCartItems);

  return (
    <>
      {/* Mobile version  */}
      <mobile className="flex shadow-md lg:hidden relative z-10 items-center w-full md:px-10 px-6 py-4 justify-between  sm:px-8">
        <MobileNav className="bg-white" open={open} setOpen={setOpen} />

        <Link href="/" key="home" className="site-logo text-semibold">
          CropCog
        </Link>
        <div className="flex bg-white items-center gap-6">
          {/* implementing cart in the mobile verion */}

          {!open && (
            <Link
              href="/cart"
              key="cart-icon"
              className="flex items-center relative z-0"
            >
              <div>
                <FiShoppingCart size={20} />
                <span className=" bg-blue-500 text-sm text-white absolute top-0  -translate-y-1/2 left-2 sm:left-2 md:left-2 right-0 rounded-full h-4 w-4 flex items-center justify-center">
                  {cartList.length}
                </span>
              </div>
            </Link>
          )}
          <div className="w-10/11  flex justify-end items-center">
            <div
              className="group z-50 relative w-5 h-5 cursor-pointer flex-col justify-between items-center flex"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`w-6 h-0.5 bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-1 bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-5"
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </mobile>

      {/* Desktop Version  */}
      <desktop className="hidden shadow-md lg:flex relative h-20 items-center flex justify-between md:px-6">
        <Link key="home" className="text-2xl font-extrabold" href="/">
          CropCog
        </Link>
        <div className="text-bold flex items-center justify-center">
          {links.map((each) => (
            <>
              <Link
                key={each.id}
                target={each.target}
                className="mr-10 font-normal text-lg"
                href={each.url}
              >
                <span className="nav-link">{each.title}</span>
              </Link>
            </>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            key="cart-icon"
            className="flex items-center mr-6 relative"
          >
            <FiShoppingCart size={26} />
            <span className=" bg-blue-500 text-sm text-white absolute lg:left-3 left-4 top-0  -translate-y-1/2 right-0 rounded-full h-5 w-5 flex items-center justify-center">
              {cartList.length}
            </span>
          </Link>
        </div>
      </desktop>
    </>
  );
}
