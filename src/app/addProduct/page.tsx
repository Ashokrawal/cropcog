import "../../styles/styles.css";
import Link from "next/link";
import { prisma } from "../../lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product",
};

// export async function AddProduct(formData: FormData) {
//   "use server";

//   const title = formData.get("title")?.toString();
//   const description = formData.get("description")?.toString();
//   const image = formData.get("image")?.toString();
//   const price = Number(formData.get("price") || 0);
//   const currentPrice = Number(formData.get("currentPrice") || 0);
//   const discount = formData.get("discount")?.toString();
//   const trendingDeals = Boolean(formData.get("trendingDeals") || false);
//   const RecommendedProducts = Boolean(
//     formData.get("RecommendedProducts") || false
//   );
//   const bestSellerDeals = Boolean(formData.get("bestSellerDeals") || false);
//   const quantity = Number(formData.get("quantity") || 0);
//   const height = Number(formData.get("height") || 0);
//   const width = Number(formData.get("width") || 0);
//   const cartHeight = Number(formData.get("cartHeight") || 0);
//   const cartWidth = Number(formData.get("cartWidth") || 0);
//   const category = formData.get("category")?.toString();

//   if (
//     !title ||
//     !description ||
//     !image ||
//     !price ||
//     !currentPrice ||
//     !discount ||
//     !trendingDeals ||
//     !RecommendedProducts ||
//     !bestSellerDeals ||
//     !quantity ||
//     !height ||
//     !width ||
//     !cartHeight ||
//     !cartWidth ||
//     !category
//   ) {
//     throw Error("Missing fields");
//   }

//   await prisma.product.create({
//     data: {
//       title,
//       description,
//       image,
//       discount,
//       price,
//       currentPrice,
//       trendingDeals,
//       RecommendedProducts,
//       bestSellerDeals,
//       quantity,
//       height,
//       width,
//       cartHeight,
//       cartWidth,
//       category,
//     },
//   });
//   redirect("/");
// }

const AddProductPage = () => {
  return (
    <div className="h-full bg-slate-100 px-4 sm:py-6 py-4 md:px-30 lg:px-40 sm:px-10 xl:px-86 xxl:px-96 flex flex-col">
      <form className="flex flex-col gap-2">
        <p className="text-xl font-bold">Add Product</p>
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
          name="image"
          required
          type="text"
          placeholder="Image URL"
        />
        <input
          className="add_product_input "
          name="price"
          required
          type="number"
          placeholder="Price"
        />
        <input
          className="add_product_input "
          name="currentPrice"
          required
          type="number"
          placeholder="CurrentPrice"
        />
        <input
          className="add_product_input "
          name="height"
          required
          type="number"
          placeholder="Height"
        />
        <input
          className="add_product_input "
          name="width"
          required
          type="number"
          placeholder="Width"
        />
        <input
          className="add_product_input "
          name="cartHeight"
          required
          type="number"
          placeholder="CartHeight"
        />
        <input
          className="add_product_input "
          name="cartWidth"
          required
          type="number"
          placeholder="CartWidth"
        />
        <input
          className="add_product_input "
          name="discount"
          required
          type="text"
          placeholder="Discount"
        />
        <input
          className="add_product_input "
          name="quantity"
          required
          type="number"
          placeholder="Quantity"
        />
        <input
          className="add_product_input "
          name="RecommendedProducts"
          required
          // type="text"
          placeholder="RecommendedProducts"
        />
        <input
          className="add_product_input "
          name="trendingDeals"
          required
          // type="text"
          placeholder="TrendingDeals"
        />
        <input
          className="add_product_input "
          name="bestSellerDeals"
          required
          // type="text"
          placeholder="BestSellerDeals"
        />
        <input
          className="add_product_input "
          name="category"
          required
          type="text"
          placeholder="Category"
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
