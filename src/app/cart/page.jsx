"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAddProduct,
  actionRemoveAll,
  actionDecreaseQuantity,
  actionIncreaseQuantity,
  allCartItems,
  selectTotal,
} from "../../store/reducers/cartSlice";
import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";
import ProductCard from "../../components/HomeSections/ProductCard";
import { AllProducts } from "../../utils/data/products";
import { ToastContainer } from "react-toastify";

const RecommendedProducts = AllProducts.filter(
  (each) => each.RecommendedProducts
);

const CartPage = () => {
  const cartList = useSelector(allCartItems);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const totalCartAmount = useSelector(selectTotal);
  const eligibleForFreeDelivery =
    totalCartAmount >= 499 ? "FREE" : <span>{"\u20B9"}99</span>;

  useEffect(() => {
    const filteredProducts = RecommendedProducts.filter(
      (product) =>
        !cartList.some((cartProduct) => cartProduct.id === product.id)
    );
    setList(filteredProducts);
  }, [cartList]);

  return (
    <>
      <div className="md:px-20  bg-gray-200 px-2">
        <div className="pt-6">
          <ul role="list" className=" divide-gray-200">
            {cartList.length === 0 ? (
              <div className="flex items-center justify-start pt-48 flex-col h-full pb-36 ">
                <AiOutlineShoppingCart size={40} />
                <h1 className="text-xl font-medium mt-2">Cart is Empty</h1>
                <br />
                <Link href="/products">
                  <button className="bg-green-700 p-2 rounded-md text-white">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <div className="flex items-center text-base md:text-lg justify-center md:gap-1 pb-4">
                  <span className="font-medium">Cart</span>
                  <AiOutlineRight />
                  <span>Information</span>
                  <AiOutlineRight />
                  <span>Shipping</span>
                  <AiOutlineRight />
                  <span>Payment</span>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-lg lg:text-xl">
                    Review Items <span>{cartList.length}</span>
                    <ToastContainer />
                  </h1>
                  <button
                    className="bg-red-700 text-white rounded-md p-2 px-2"
                    onClick={() => dispatch(actionRemoveAll())}
                  >
                    Remove All
                  </button>
                </div>

                <div className="py-2 grow flex-1 pt-6">
                  {cartList.map((product, index) => (
                    <li
                      key={product.id}
                      className="flex bg-white product-item p-5 rounded-lg mb-2 shadow-md "
                    >
                      <div className=" border border-gray-200">
                        <Image
                          src={product.image}
                          alt={product?.imageAlt}
                          height={product.cartHeight}
                          loading="lazy"
                          width={product.cartWidth}
                          className=""
                        />
                      </div>
                      <div className="flex ml-4 w-full">
                        <div className="text-base w-full flex flex-col gap-2 font-medium text-gray-900">
                          <span className="">{product?.title}</span>
                          <p className="text-gray-500">250 Gms</p>
                          <div className="flex items-center justify-between w-full">
                            <p className="flex">
                              <span className="mr-2">{"\u20B9"}</span>
                              {product.subTotal}
                            </p>
                            <div className="flex items-center border-2 border-solid justify-center gap-2.5 w-28">
                              {product?.quantity >= 2 && (
                                <button
                                  className="text-xl font-bold hover:text-red-600"
                                  onClick={() => {
                                    dispatch(actionDecreaseQuantity(product));
                                  }}
                                >
                                  -
                                </button>
                              )}
                              <div className="text-gray-500  py-1 px-5 bg-gray-200">
                                {product.cartQuantity}
                              </div>
                              <button
                                className="text-xl hover:text-green-600 font-bold "
                                onClick={() => {
                                  dispatch(actionIncreaseQuantity(product));
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            )}
          </ul>
          {cartList.length !== 0 && (
            <div className="mt-10 pb-2 ">
              <div className="py-2">
                <h1 className="text-xl md:text-3xl">Recommended for you!</h1>
                <span className="text-sm md:text-base">
                  Before you checkout
                </span>
              </div>

              <div className="grid lg:grid-cols-2 product-card xl:grid-cols-3  mb-2 md:mb-4 grow gap-2">
                {list.map((product, index) => {
                  return <ProductCard product={product} key={index} />;
                })}
              </div>
            </div>
          )}
        </div>
        {cartList.length !== 0 && (
          <div className="flex flex-col gap-3 shadow-lg md:px-8 px-6 rounded-t-2xl items-start text-normal bg-white gap-1 pb-6">
            <br />
            <div className="flex items-center gap-4 justify-between w-full ">
              <h1>Bill Details</h1>
              <div>
                <span>{"\u20B9"}</span>
                <span className="font-bold text-sm">
                  {totalCartAmount - 99}{" "}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <h1 className="text-sm md:text-xl">Sub-Total: </h1>
              <div className="flex gap-2">
                <span className="text-gray-500 text-sm">
                  {"\u20B9"}
                  <span className="text-gray-500 line-through">
                    {totalCartAmount + 50}
                  </span>
                </span>
                <span className="font-bold text-sm">
                  {"\u20B9"}
                  <span>{totalCartAmount}</span>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <h1 className="text-green-700 text-sm">Your Savings</h1>
              <div className="flex items-center">
                <span className="text-green-700">{"\u20B9"}</span>
                <span className="text-sm text-green-700">50</span>
              </div>
            </div>

            <div className="flex items-center justify-between w-full ">
              <h1>Delivery Charges</h1>
              <div>
                <span className="font-bold text-sm">
                  {eligibleForFreeDelivery}
                </span>
              </div>
            </div>

            <div className="flex mt-2 pt-2 items-center text-lg justify-between w-full border-solid border-t-2 ">
              <span className="md:text-xl ">Total Payable</span>
              <div>
                <span className="text-base">{"\u20B9"}</span>
                <span className="font-bold text-base">{totalCartAmount}</span>
              </div>
            </div>

            <br />
            <Link href="/checkout" className="w-full">
              <button className="bg-green-800 font-black hover:bg-green-600 rounded-md text-white md:px-8 md:py-4 md:w-fit w-full py-4">
                Proceed To Pay
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
