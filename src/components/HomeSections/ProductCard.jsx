"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/styles.css";
import { allCartItems, actionAddProduct } from "../../store/reducers/cartSlice";
import getSymbolFromCurrency from "currency-symbol-map";
import { ToastContainer } from "react-toastify";

const ProductCard = ({ product, index }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const cartList = useSelector(allCartItems);
  const dispatch = useDispatch();
  const [selectedQuantity,setSelectedQuantity] = useState(100);
  const [current,setCurrent] = useState(product.currentPrice);


  const handleAddProduct = () => {
    // const currentSelectedQuantity = product.quantity[0]; // Initial selected quantity
    // const currentSelectedPrice = product.price[0]; // Initial selected price
    dispatch(actionAddProduct(product));
  };

  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value)
    setSelectedQuantity(newQuantity);

    const basePrice = (product.currentPrice / 50)  ;
    const newCurrentPrice = basePrice * newQuantity;
    setCurrent(newCurrentPrice);
  }
  

  let rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  return (
    <div className="px-2">
      <ToastContainer />
      <div className="card over bg-white product-card hover:shadow-xl shadow-sm border-black-50w  pb-6 px-2 gap-2 m-1  rounded-lg border-2 border-solid ">
        <div className="flex items-center p-2 px-6 justify-between">
          <Image
            src="/icons/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235e83b27.8911603315278904859512.png"
            height={22}
            width={22}
            alt={product.title}
            className="product-item"
          />

          <h1 className="text-red-700 discount font-extrabold ">{`GET ${product.discount} OFF`}</h1>
        </div>
        <hr />
        <div className="flex object-fill items-center w-full gap-2 justify-between">
          <div>
            <Image
              src={product.image}
              className="pl-1 object-cover object-center max-w-full h-auto"
              height={product.height}
              width={product.width}
              alt={product.title}
            />
          </div>
          <div className="h-auto w-full flex py-4 items-start flex-col gap-2 xxs:px-2  xs:justify-center">
            <h1 className="font-medium">{product.title}</h1>
            {/* <span className="text-gray-500">100 Gms</span> */}

            <span className="text-gray-500">250Gms</span>

            <span className="text-sm">
              <span className="text-base font-medium">Rich in </span>
              {product.description}
            </span>
            <div className="flex items-center w-full pr-2 justify-between">
              <div className="text-xsm flex items-center font-semibold">
                <div className="mr-2">
                  <span className="text-gray-500">{"\u20B9"}</span>
                  <span className="text-gray-500 line-through">
                    {product.price}
                  </span>
                </div>
                <div>
                  <span className="">{"\u20B9"}</span>
                  <span className="">{current}</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleAddProduct(product)}
                  className="bg-green-800 hover:bg-green-600 text-white  px-6 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
