"use client";

import Link from "next/link";
import React from "react";
import "../styles/styles.css";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";

const policyLink = "https://policies.google.com/privacy";

const terms_serviceLink = "https://policies.google.com/terms";

const cookiesLink = "https://policies.google.com/technologies";

// start: "100px",
//       xs: "350",
//       xxs: "450px",
//       sm: "540px",
//       xsm: "640px",
//       md: "730px",
//       lg: "1064px",
//       xl: "1430px",
//       xxl: "1536px",

const Footer = () => {
  return (
    <>
      {/* <hr className="mt-10" /> */}
      <main className="md:w-1/4 w-screen">
        <hr />
        <footermobile className="flex justify-center gap-2 py-10 items-center md:hidden flex-col w-screen">
          <Link
            className="font-bold text-xl flex flex-col items-center"
            href="/"
            key={"home"}
          >
            Organic Agenda
          </Link>

          <div className="px-2 flex mt-10 flex-wrap gap-2 items-center gap-1 justify-center grow flex-col">
            <p className="text-lg font-medium">Contact</p>
            <div className="flex items-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ananthagriservices@gmail.com"
                target="_blank"
              >
                ananthagriservices@gmail.com
              </a>
            </div>
            <p className="text-lg font-medium">Toll Free</p>
            <a href="tel://+919704218219">+91 9704218219</a>
            <sectionIcons className="flex items-center gap-2 mt-4 px-2">
              <BiLogoFacebook
                color="white"
                size={30}
                className="bg-gray-400 rounded-full hover:bg-blue-700 p-1"
              />
              <BiLogoTwitter
                color="white"
                size={30}
                className="bg-gray-400 rounded-full hover:bg-sky-500 p-1"
              />
              <BiLogoYoutube
                color="white"
                size={30}
                className="bg-gray-400 rounded-full hover:bg-red-500 p-1"
              />
              <BiLogoInstagram
                color="white"
                size={30}
                className="bg-gray-400 rounded-full hover:bg-pink-700 p-1"
              />
            </sectionIcons>
          </div>
          <div className="px-2 mb-10 flex flex-wrap items-center gap-4 mb-6 justify-center grow mt-10 flex-col">
            <p className="text-lg font-medium">Information</p>
            <Link key={"aboutUs"} href="/aboutus">
              About Us
            </Link>
            <Link key={"refund policy"} href="/refund_policies">
              Refund Policy
            </Link>
            <Link key={"terms"} href="terms_conditions">
              Terms & conditions
            </Link>
            <Link key={"privacy"} href="privacy_policies">
              Privacy Policy
            </Link>
            <Link key={"vision"} href="/vision">
              Vision For Future
            </Link>
          </div>
        </footermobile>
        <footerdesktop className="py-10 border-gray grow footer  hidden xl:gap-40 md:flex w-screen gap-20 lg:px-10 px-30 flex flex-wrap items-center  justify-center">
          <div className="flex flex-col flex-wrap relative">
            <Link
              key={"home"}
              className="font-bold text-xl flex flex-col mb-16"
              href="/"
            >
              CropCog
            </Link>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">CONTACT</p>
              <div className="flex items-center">
                <AiOutlineMail size={20} className="mr-3" color="green" />

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ananthagriservices@gmail.com"
                  target="_blank"
                  key={"email"}
                >
                  ananthagriservices@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <AiOutlinePhone color="green" size={20} className="mr-2" />
                <a href="tel://+919704218219" target="_blank">
                  +91 9704218219
                </a>
              </div>
              <sectionIcons className="flex items-center gap-2 mt-4">
                <Link
                  key={"main-site"}
                  target="_blank"
                  href="https://www.facebook.com/ananth.agri.3"
                >
                  <BiLogoFacebook
                    color="white"
                    size={30}
                    className="bg-gray-400 rounded-full  hover:bg-green-700 p-1"
                  />
                </Link>
                <Link
                  target="_blank"
                  key={"twitter"}
                  href="https://twitter.com/AgriAnanth?s=08"
                >
                  <BiLogoTwitter
                    color="white"
                    size={30}
                    className="bg-gray-400 rounded-full  hover:bg-green-700 p-1"
                  />
                </Link>
                <Link
                  target="_blank"
                  key={"youtube"}
                  href="https://www.youtube.com/channel/UCafIj8NwmnqCuJx3NPmXlEQ"
                >
                  <BiLogoYoutube
                    color="white"
                    size={30}
                    className="bg-gray-400 rounded-full  hover:bg-green-700 p-1"
                  />
                </Link>
                <Link
                  target="_blank"
                  key={"instagram"}
                  href="https://www.instagram.com/cropcog/"
                >
                  <BiLogoInstagram
                    color="white"
                    size={30}
                    className="bg-gray-400 rounded-full  hover:bg-green-700 p-1"
                  />
                </Link>
              </sectionIcons>
            </div>
          </div>
          <div className="px-2 flex flex-wrap items-start gap-4 flex-col">
            <p className="text-lg font-semibold">INFORMATION</p>
            <Link key={"aboutus"} href="/aboutus">
              <span className="nav-link">About Us</span>
            </Link>
            <Link key={"refund"} href="/refund_policies">
              <span className="nav-link">Refund Policy</span>
            </Link>
            <Link key={"terms"} href={terms_serviceLink} target="_blank">
              <span className="nav-link">Terms & Conditions</span>
            </Link>
            <Link key={"cookies"} href={cookiesLink} target="_blank">
              <span className="nav-link">Cookies Policy</span>
            </Link>
            <Link key={"privacy"} href={policyLink} target="_blank">
              <span className="nav-link">Privacy Policy</span>
            </Link>
          </div>
          <footerform className="gap-2 flex flex-col flex-start mt-10 hidden lg:flex ">
            <h1 className="mb-2 font-medium text-lg">
              Signup for our newsletter
            </h1>
            <div
              className="shadow-xl"
              style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.3" }}
            >
              <input
                placeholder="Email"
                className="border-gray-800 shadow-xs p-2 px-4"
              />
              <button className="bg-green-800 text-white hover:bg-green-600 rounded-xs p-3">
                Subscribe
              </button>
            </div>
            <Image
              src="/icons/payment icons images.png"
              height={300}
              width={300}
              alt="Payment"
            />
          </footerform>
        </footerdesktop>
      </main>
      <hr />
      <div className="flex items-center justify-center bg-slate-200 p-4">
        <span className="text-sm font-mono">
          Copyright ©2023. All rights reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
