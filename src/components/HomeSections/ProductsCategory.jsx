import Link from "next/link";
import Image from "next/image";
import React from "react";

import { useRouter } from "next/router";

export const categoryImages = [
  {
    id: 1,
    title: "Mushrooms",
    category: "Mushrooms",
    image: "/category/mushrooms.jpg",
    url: "/products/mushrooms",
  },
  {
    id: 2,
    title: "Leafy Veggies",
    image: "/category/veggies.jpg",
    category: "Leafy-veggies",
    url: "/products/leafy-veggies",
  },
  {
    id: 3,
    title: "Vegetables",
    image: "/category/vegetables-t.png",
    category: "Vegetables",
    url: "/products/vegetables",
  },
  {
    id: 4,
    title: "Natural Honey",
    image: "/category/landscapes/honey-category-landscape.png",
    url: "/products/honey",
    category: "Honey",
  },
  {
    id: 5,
    title: "Fruits",
    image: "/category/fruits.jpg",
    url: "/products/fruits",
    category: "Fruits",
  },
  {
    id: 6,
    title: "Fish",
    category: "Fish",
    image: "/category/fishes.jpg",
    url: "/products/fishes",
  },
  {
    id: 7,
    title: "Flowers",
    category: "Flowers",
    image: "/category/landscapes/flowers-category-landscapes.png",
    url: "/products/flowers",
  },
  {
    id: 8,
    title: "Seeds",
    category: "Seeds",
    image: "/Items/close-up-view-various-beans-arrangement (1).jpg",
    url: "/products/Seeds",
  },
];

//  start: "100px",
//     xs: "350",
//     xxs: "450px",
//     sm: "540px",
//     xsm: "640px",
//     md: "770px",
//     lg: "1064px",
//     xl: "1430px",
//     xxl: "1536px",

const ProductsCategory = () => {
  // const router = useRouter();

  const handleClick = (category) => {};

  return (
    <div className="px-10 grow gap-2 mt-6 mb-6">
      <h1 className="text-red-800 font-extrabold text-xl lg:text-2xl">
        Explore By Category
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 grow start:gap-4  mt-6 ">
        {categoryImages?.map((each) => (
          <Link
            href="/products/"
            key={each.id}
            onClick={() => handleClick(each.name)}
            className="flex flex-col object-fill items-center rounded-md justify-center "
          >
            <div className="relative xsm:hidden h-20 w-20">
              <Image
                src={each.image}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                alt={each.name}
                className="rounded-full shadow-md items-center product-category-img max-w-full h-auto object-rounded"
              />
            </div>
            <div className="relative start:hidden xsm:flex h-32 w-32">
              <Image
                src={each.image}
                layout="fill"
                loading="lazy"
                objectFit="cover"
                alt={each.name}
                // className=""
            onLoadingComplete={(img)=> img.classList.remove('opacity-0')}
                className="rounded-full shadow-md items-center product-category-img max-w-full h-auto object-rounded product-item transition-opacity opacity-0 duration-[0.8s]"
              />
            </div>
            <h1 className="text-xs font-normal mt-2 md:text-base">
              {each.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
