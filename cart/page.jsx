"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAddProduct,
  actionRemoveItem,
  actionRemoveProduct,
  allCartItems,
  selectTotal,
} from "../../store/reducers/cartSlice";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductCard from "../../components/HomeSections/ProductCard";
import { AllProducts } from "../../utils/data/products";

const RecommendedProducts = AllProducts.filter(
  (each) => each.RecommendedProducts
);

const CartPage = () => {
  const cartList = useSelector(allCartItems);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const subTotal = useSelector(selectTotal);

  useEffect(() => {
    const filteredProducts = RecommendedProducts.filter(
      (product) =>
        !cartList.some((cartProduct) => cartProduct.id === product.id)
    );
    setList(filteredProducts);
  }, [cartList]);

  return (
    <div className="md:px-20  bg-gray-200">
      <div className="pt-6">
        <h1 className="text-lg lg:text-xl">
          Review Items <span>{cartList.length}</span>
        </h1>
        <ul role="list" className=" divide-gray-200">
          {cartList.length === 0 ? (
            <div className="flex items-center justify-start pt-48 flex-col h-screen ">
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
              <div className="py-2 grow flex-1 pt-6">
                {cartList.map((product, index) => (
                  <li
                    key={product.id}
                    className="flex bg-white p-4 rounded-lg mb-2 shadow-md "
                  >
                    <div className=" border border-gray-200 product-item">
                      <Image
                        src={product.image}
                        alt={product?.imageAlt}
                        height={product.cartHeight}
                        width={product.cartWidth}
                        className=""
                      />
                    </div>
                    <div className="flex flex-col flex-1 ml-4">
                      <div>
                        <div className="grid w-full grid-cols-2 lg:grid-cols-3 text-base font-medium text-gray-900">
                          <span className="">{product?.title}</span>
                          <p className="flex flex-row-reverse">
                            Rs. {product.price}
                          </p>
                        </div>

                        <div className="flex  justify-between flex-1 text-sm">
                          <div className="flex items-center justify-center gap-3 transition-all">
                            {product?.quantity >= 2 && (
                              <button
                                className="px-2 text-xl font-bold hover:scale-110"
                                onClick={() => {
                                  dispatch(actionDecrementQuantity(product));
                                }}
                              >
                                -
                              </button>
                            )}
                            <p className="text-gray-500">
                              Qty {product.quantity}
                            </p>
                            <button
                              className="px-2 text-xl font-bold hover:scale-110"
                              onClick={() => {
                                dispatch(actionUpdateQuantity(product));
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              onClick={() => {
                                dispatch(actionRemoveProduct(product));
                              }}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl">
                  Sub-Total:{" "}
                  <span>
                    <span>{"\u20B9"}</span> {subTotal}.00
                  </span>
                </h1>
                <button className="bg-green-800 rounded-md text-white p-4">
                  Proceed TO Pay
                </button>
              </div>
            </div>
          )}
        </ul>
        <div className="mt-10 px-1 pb-2 ">
          <div className="py-2 px-2 ">
            <h1 className="text-xl md:text-3xl">Recommended for you!</h1>
            <span className="text-sm md:text-base">Before you checkout</span>
          </div>

          <div className="grid lg:grid-cols-2 product-card xxs:px-4 xl:grid-cols-3  mb-2 md:mb-4 grow gap-2">
            {list.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
