import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { actionAddProduct, allCartItems } from "../../store/reducers/cartSlice";
import ProductCard from "./ProductCard";
import { AllProducts } from "../../utils/data/products";
import Slide from "react-reveal/Slide";
import Reveal from "react-reveal/Reveal";

// start: "100px",
//       xs: "350",
//       xxs: "450px",
//       sm: "540px",
//       xsm: "640px",
//       md: "770px",
//       lg: "1064px",
//       xl: "1430px",
//       xxl: "1536px",

const trendingDeals = AllProducts.filter((each) => each.trendingDeals);

const TrendingDeals = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(allCartItems);
  const [selectedQuantity, setSelectedQuantity] = useState({});
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleAddProduct = (product) => {
    if (!cartList.some((item) => item.id === product.id)) {
      const selectedQuantity = product.quantity[0]; // Initial selected quantity
      const selectedPrice = product.price[0]; // Initial selected price
      dispatch(actionAddProduct({ product, selectedQuantity, selectedPrice }));
    }
  };

  const handleQuantityChange = (productId, selectedValue) => {
    setSelectedQuantity((prevSelected) => ({
      ...prevSelected,
      [productId]: selectedValue,
    }));
  };

  return (
    <div className="sm:px-6 md:px-2 start:mx-4 pb-10 grow">
      <Reveal bottom>
        <h1 className="text-xl lg:text-2xl font-semibold">Trending Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 xxs:px-4 md:px-1 grow gap-2  mt-4">
          {trendingDeals.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="flex items-center mt-4 justify-center">
          <Link href="/products">
            <button className="bg-green-50 shadow-sm hover:bg-green-800 mt-2 hover:text-white  py-3 px-6 rounded-lg">
              View more
            </button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default TrendingDeals;
