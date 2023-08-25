import React from "react";
import "../../styles/styles.css";
import Link from "next/link";
import { prisma } from "../../lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product",
};

async function AddProduct(formData: FormData) {
  "use server";

  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const image = formData.get("image_url")?.toString();
  const price = Number(formData.get("price") || 0);
  const currentPrice = Number(formData.get("currentPrice") || 0);
  const height = Number(formData.get("height") || 0);
  const width = Number(formData.get("width") || 0);
  const cartHeight = Number(formData.get("cartHeight") || 0);
  const cartWidth = Number(formData.get("cartWidth") || 0);
  const discount = formData.get("discount")?.toString();
  const category = formData.get("category")?.toString();
  const trendingDeals = Boolean(formData.get("trendingDeals"));
  const bestSellerDeals = Boolean(formData.get("bestSellerDeals"));
  const RecommendedProducts = Boolean(formData.get("RecommendedProducts"));
  const quantity = Number(formData.get("quantity") || 0);

  if (
    !id ||
    !title ||
    !description ||
    !image ||
    !price ||
    !currentPrice ||
    !height ||
    !width ||
    !cartHeight ||
    !cartWidth ||
    !discount ||
    !category ||
    !trendingDeals ||
    !bestSellerDeals ||
    !RecommendedProducts ||
    !quantity
  ) {
    throw new Error("Missing Required Parameters");
  }

  await prisma.product.create({
    data: {
      title,
      id,
      description,
      image,
      price,
      quantity,
      currentPrice,
      height,
      width,
      cartHeight,
      cartWidth,
      discount,
      category,
      trendingDeals,
      bestSellerDeals,
      RecommendedProducts,
    },
  });

  redirect("/");
}

const AddProductPage = () => {
  return (
    <div className="h-full bg-slate-100 px-4 sm:py-6 py-4 md:px-30 lg:px-40 sm:px-10 xl:px-86 xxl:px-96 flex flex-col">
      <form action={AddProduct} className="flex flex-col gap-2">
        <p className="text-xl font-bold">Add Product</p>
        <input
          required
          name="id"
          type="text"
          placeholder="id  (product-title is recommended)"
          className="add_product_input  w-full"
        />
        <input
          required
          name="title"
          type="text"
          placeholder="Title"
          className="add_product_input  w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="add_product_input  w-full h-20"
        />
        <input
          className="add_product_input "
          name="image_url"
          required
          type="text"
          placeholder="image URL"
        />
        <input
          className="add_product_input "
          name="quantity"
          required
          type="number"
          placeholder="quantity"
        />
        <input
          className="add_product_input "
          name="price"
          type="number"
          required
          placeholder="Price"
        />
        <input
          className="add_product_input "
          name="currentPrice"
          required
          type="number"
          placeholder="currentPrice"
        />
        <input
          required
          name="height"
          type="number"
          placeholder="height (180-220)"
          className="add_product_input "
        />
        <input
          required
          name="width"
          type="number"
          placeholder="width (180-220)"
          className="add_product_input "
        />
        <input
          required
          name="cartHeight"
          type="number"
          placeholder="cartHeight (100-120)"
          className="add_product_input "
        />
        <input
          required
          name="cartWidth"
          type="number"
          placeholder="cartWidth (100-120)"
          className="add_product_input "
        />
        <input
          required
          name="discount"
          type="text"
          placeholder="discount"
          className="add_product_input "
        />
        <input
          required
          name="category"
          type="text"
          placeholder="category"
          className="add_product_input "
        />
        <input
          required
          name="trendingDeals"
          type="text"
          placeholder="trendingDeals"
          className="add_product_input "
        />
        <input
          required
          name="bestSellerDeals"
          placeholder="bestSellerDeals"
          className="add_product_input "
        />
        <input
          required
          type="text"
          name="RecommendedProducts"
          placeholder="RecommendedProducts"
          className="add_product_input "
        />

        <button
          type="submit"
          className="bg-green-800 mt-2 font-black hover:bg-green-600 rounded-md text-white md:px-8 px-6 md:py-4  sm:w-fit w-full py-4"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
