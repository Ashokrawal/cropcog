import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const slideImages = [
  { url: "/homeSlides/mushrooms-slide.png" },
  { url: "/homeSlides/honey-home-slider.png" },
  { url: "/homeSlides/vegetables-silder-1.png" },
  { url: "/homeSlides/plants-slider.png" },
];

const Hero = () => {
  return (
    <div>
      <section className="relative">
        <SimpleImageSlider
          width="100%"
          height="50vh"
          images={slideImages}
          showBullets={true}
          loading="lazy"
          autoPlay={true}
          autoPlayDelay={4}
        />
        <div className="absolute start:left-12 sm:left-26 start:bottom-24 xsm:bottom-6 md:bottom-36 right-0 px-4 py-2">
          <h3 className="drop-shadow-2xl page-intro text-white start:text-4xl xxs:text-5xl md:text-6xl font-black lg:text-7xl">
            Seed to Mouth
          </h3>
          <p class="mt-2 start:text-lg drop-shadow-2xl md:text-3xl xs:text-xl lg:text-4xl font-black text-white">
            "Nature's Finest Delivered."
          </p>
        </div>{" "}
      </section>
    </div>
  );
};

export default Hero;
