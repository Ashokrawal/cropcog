import React from "react";
import Link from "next/link";

const AnathAgriPage = () => {
  return (
    <div>
      <section className="hidden sm:flex">
        <div
          href="https://ananthagriservices.in/"
          target="_blank"
          className="plantation"
        >
          <h1 className="flex justify-center text-white font-black drop-shadow-2xl text-5xl sm:pt-44 sm:text-2xl md:text-4xl xsm:text-xl">
            Buy, Sell & Rent farm machinery tools
          </h1>
          <p className="flex justify-center drop-shadow-2xl text-white font-black text-2xl pt-2 ">
            "Heart of Farming Practices"
          </p>
          <div className="flex justify-center mt-10 items-center">
            <Link href="https://ananthagriservices.in/" target="_blank">
              <button className="bg-green-800 hover:bg-green-600 text-white px-4 p-3 rounded-md">
                Vist Now!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnathAgriPage;