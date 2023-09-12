import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const AnathAgriPage = () => {
  return (
    <div cls>
      <section className="hidden xs:flex flex flex-col justify-center items-start">
        <div
          href="https://ananthagriservices.in/"
          target="_blank"
          className="plantation flex items-center justify-center"
        >
          <div>
            <Fade cascade triggerOnce="true" direction="up" duration={2000}>
              <h1 className="flex justify-center text-white font-black drop-shadow-2xl text-xl  sm:text-2xl items-center flex-col sm:text-2xl md:text-4xl xsm:text-xl">
                Buy, Sell & Rent farm machinery tools
              </h1>
              <p className="flex justify-center drop-shadow-2xl text-white font-black text-lg sm:text-2xl pt-2 ">
                "Heart of Farming Practices"
              </p>
              <div className="flex justify-center mt-6">
                <Link href="https://ananthagriservices.in/" target="_blank">
                  <button className="bg-green-800 hover:bg-green-600 text-white px-4 p-3 rounded-md">
                    Vist Now!
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnathAgriPage;
