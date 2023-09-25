import React from "react";
import { AllProducts } from "../../../utils/data/products";
import Image from "next/image";

const ProductPage = ({ params: { id } }) => {
  console.log(id);

  const result = AllProducts.filter((each) => each.id === id);

  return (
    <div className="flex items-center justify-center">
      {result.map((each) => (
        <div className="flex h-96 items-center justify-start">
          <div>
            <Image src={each.image} height={300} width={300} />
          </div>
          <div>
            <h1>{each.title}</h1>
            <h1>{each.quantity}</h1>
            <h1>{each.description}</h1>
            <div className="mr-2">
              <span className="text-gray-500 font-normal">{"\u20B9"}</span>
              <span className="text-gray-500 line-through">{each.price}</span>
              <span className="text-gray-800 ">{each.currentPrice}</span>
            </div>
            <div>
              <button
                onClick={""}
                className="bg-green-800 hover:bg-green-600 text-white  px-6 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
