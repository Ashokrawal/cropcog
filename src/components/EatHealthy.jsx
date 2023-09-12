import React from "react";
import { Fade } from "react-awesome-reveal";

const EatHealthy = () => {
  return (
    <section className=" grow gap-10 mt-10 mb-6">
      <div className="detail-pic font-black font-mono text-white gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:pl-10 start:max-xxs:pl-4 flex flex-col justify-center px-4">
        <Fade cascade triggerOnce="true" duration={2000} direction="up">
          <h1 className="font-black">Eat Healthy,</h1>
          <h1 className="heading">Stay Healthy.</h1>
        </Fade>
      </div>
    </section>
  );
};

export default EatHealthy;
