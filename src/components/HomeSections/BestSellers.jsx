"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionAddProduct, allCartItems } from "../../store/reducers/cartSlice";
import ProductCard from "./ProductCard";
import { AllProducts } from "../../utils/data/products";
import { Fade } from "react-awesome-reveal";

// start: "100px",
//       xs: "350",
//       xxs: "450px",
//       sm: "540px",
//       xsm: "640px",
//       md: "770px",
//       lg: "1064px",
//        xlg:'1240px',
//       xl: "1430px",
//       xxl: "1536px",

const bestSellersProducts = AllProducts.filter((each) => each.bestSellerDeals);

const BestSellers = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(allCartItems);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleAddProduct = (product) => {
    if (!cartList.some((item) => item.id === product.id)) {
      dispatch(actionAddProduct(product));
      console.log(cartList);
    }
  };

  return (
    <div className="sm:px-6 md:px-2 start:mx-4 pb-10 grow mt-4">
      <Fade direction="up" casecade triggerOnce="true" duration={3000}>
        <h1 className="text-xl lg:text-2xl font-semibold">
          Best Seller Products
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 xxs:px-4 md:px-1 grow gap-2  mt-4">
        {bestSellersProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <div className="flex items-center mt-4 justify-center">
        <Link href="/products">
          <button className="bg-green-50 shadow-sm hover:bg-green-800 mt-2 hover:text-white  py-3 px-6 rounded-lg">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellers;
