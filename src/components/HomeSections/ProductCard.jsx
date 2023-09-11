"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/styles.css";
import { allCartItems, actionAddProduct } from "../../store/reducers/cartSlice";
import getSymbolFromCurrency from "currency-symbol-map";
import { ToastContainer } from "react-toastify";
import Reveal from "react-reveal/Reveal";

const ProductCard = ({ product, index }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const cartList = useSelector(allCartItems);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(100);
  const [current, setCurrent] = useState(product.currentPrice);
  const [selectedId, setSelectedId] = useState(null);

  const handleAddProduct = () => {
    dispatch(actionAddProduct(product));
  };

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  return (
    <div className="px-2">
      <ToastContainer />
      <Reveal effect="fadeInUp">
        <div className="card over bg-white product-card  hover:shadow-xl shadow-sm border-black-50w  pb-6 px-2 gap-2 m-1  rounded-lg border-2 border-solid ">
          <div className="flex items-center p-2 px-6 justify-between">
            <Image
              src="/icons/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235e83b27.8911603315278904859512.png"
              height={22}
              width={22}
              loading="lazy"
              alt={product.title}
              className="product-item transition-opacity opacity-0 duration-[2s]"
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
            />

            <h1 className="text-red-700 discount font-extrabold ">{`GET ${product.discount} OFF`}</h1>
          </div>
          <hr />
          <div className="flex object-fill items-center w-full gap-2 justify-between">
            <div>
              <Image
                src={product.image}
                className="pl-1 object-cover object-center max-w-full h-auto  transition-opacity opacity-0 duration-[2s]"
                height={product.height}
                loading="lazy"
                width={product.width}
                // className=""
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                alt={product.title}
              />
            </div>
            <div className="h-auto w-full flex py-4 items-start flex-col gap-2 xxs:px-2  xs:justify-center">
              <h1 className="font-medium">{product.title}</h1>
              {/* <span className="text-gray-500">100 Gms</span> */}

              <span className="text-gray-500">250Gms</span>

              <span className="text-sm">
                <span className="text-base font-light">Rich in </span>
                {product.description}
              </span>
              <div className="flex items-center w-full pr-2 justify-between">
                <div className="text-xsm flex items-center font-semibold">
                  <div className="mr-2">
                    <span className="text-gray-500 font-normal">
                      {"\u20B9"}
                    </span>
                    <span className="text-gray-500 line-through">
                      {product.price}
                    </span>
                  </div>
                  <div>
                    <span className="font-normal">{"\u20B9"}</span>
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
      </Reveal>
    </div>
  );
};

export default ProductCard;
