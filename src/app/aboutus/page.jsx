import React from "react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    name: "Start-up India",
    url: "/certificates/DIPP72048_ANANTH_AGRI_SERVICES_LLP_RECOGNITION_6891648617633062495_page-0001.jpg",
    height: 600,
    width: 600,
  },
  {
    id: 3,
    name: "Amazon Smbhav hackathon",
    url: "/certificates/Amazon hacthon.jpeg",
    height: 550,
    width: 550,
  },
  {
    id: 4,
    name: "Go Global Awards 2021",
    url: "/certificates/ITC global certificate.jpeg",
    height: 550,
    width: 550,
  },
  {
    id: 5,
    name: "UN Volunteers INDIA",
    url: "/certificates/solved challenge certificate.jpeg",
    height: 600,
    width: 600,
  },
];

// / start: "100px",
//       xs: "350px",
//       xxs: "450px",
//       sm: "540px",
//       xsm: "640px",
//       md: "730px",
//       lg: "1064px",
//       xl: "1430px",
//       xxl: "1536px",

const page = () => {
  return (
    <>
      <div className="h-auto pt-10 pb-10">
        <div className="bg-gradient-to-l from-green-800 via-green-700 to-green-800 h-36 px-20 mb-2">
          <h1 className="text-white font-black text-4xl py-4 ">About Us</h1>
          <p className="xxs:text-lg start:text-sm text-gray-300">
            CropCog is a Community name of Ananth Agri Services
          </p>
        </div>
        <div className="px-20 mt-4">
          <section className="mt-4">
            <h1 className="text-orange-700 text-2xl font-bold mb-1">
              Our Motto
            </h1>
            <p className="text-base">
              ANANTH AGRI SERVICES main motto is to help Indian Farmers and
              Agriculture Community in Rural India for improving their Business
              income by providing needed Agriculture Inputs, resources and
              materials from “SEED TO MOUTH”
            </p>
          </section>
          <section className="mt-4">
            <h1 className="text-orange-700 text-2xl font-bold mb-1">
              Our Mission
            </h1>
            <p className="text-base">
              AAS committed to promote agriculture and help farmers with
              implementation of modern techniques for various production. It
              diversified its productions into many like Apiculture, Mushroom
              cultivation, organic farming, Aquaponics, aeroponics along with
              rental services of farm machinery and equipments to the farmers,
              to ensure good demand for the products through value addition. We
              has a team of experienced agriculturists , horticulturists and
              farmers who work tirelessly to ensure that our production
              practices are sustainable, efficient and environmentally friendly.
            </p>
          </section>
          <section className="mt-4">
            <h1 className="text-orange-700 text-2xl font-bold mb-1">
              Our Vision
            </h1>
            <p className="text-base">
              To inspire new generation of farmers to embrace agriculture & its
              new techniques while delivering high quality production. We aim to
              be at the forefront of research and development in mushroom
              cultivation, apiculture, organic farming, Aquaponics and
              aeroponics, and to promote the adoption of these methods
              worldwide. We envision a future where farming is a more
              collaborative and inclusive industry, where small-scale farmers
              can thrive alongside large commercial operations, and where access
              to affordable farm machinery is no longer a barrier to success. We
              believe that by working together, we can create a healthier, more
              sustainable world for generations to come.
            </p>
          </section>
          <section className="mt-4 pb-4">
            <h1 className="text-orange-700 text-2xl font-bold mb-1">
              Projects
            </h1>
            <li>Farm Machinery and tools</li>
            <li>Mushroom Production</li>
            <li>Aquaponics, Aeroponics & Hydroponics</li>
            <li>Apiculture</li>
            <li>Modern farming</li>
            <li>Organic farming</li>
            <li>Crop Advisory services</li>
          </section>
        </div>
        <hr />
        <section className="mt-10 px-20">
          <h1 className="text-bold text-2xl sm:text-4xl mb-4">
            Our certificates
          </h1>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {certificates.map((each) => (
              <div
                key={each.id}
                className="flex items-center flex-col   justify-center"
              >
                <Image
                loading="lazy"
                  height={each.height}
                  width={each.width}
                  alt={each.name}
                  className="border-2 border-gray-300"
                  src={each.url}
                />
                <h1 className="mt-2">{each.name}</h1>
              </div>
            ))}
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default page;
