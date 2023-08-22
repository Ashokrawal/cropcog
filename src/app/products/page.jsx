"use client";
import { useEffect, useState } from "react";
import { allCartItems, actionAddProduct } from "../../store/reducers/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import "./products.module.css";
import { Input } from "@nextui-org/react";
import debounce from "lodash.debounce";
import { AllProducts } from "../../utils/data/products";
import { set, update } from "lodash";
import ProductCard from "../../components/HomeSections/ProductCard";
import { ToastContainer } from "react-toastify";

const productsCategoryTypes = [
  {
    id: "All",
    title: "All",
  },
  {
    id: "Mushrooms",
    title: "Mushrooms",
    count: "3",
  },
  {
    id: "Vegetables",
    title: "Vegetables",
    count: "12",
  },
  {
    id: "Fruits",
    title: "Fruits",
    count: "11",
  },
  {
    id: "Millets",
    title: "Millets",
    count: "7",
  },
  {
    id: "Cereals",
    title: "Cereals",
    count: "8",
  },
  {
    id: "Flowers",
    title: "Flowers",
    count: "10",
  },
  {
    id: "Fish",
    title: "Fish",
    count: "6",
  },
  {
    id: "Honey",
    title: "Honey",
    count: "1",
  },
  {
    id: "Leafy-Veggies",
    title: "Leafy-Veggies",
    count: "8",
  },
  {
    id: "Pulses",
    title: "Pulses",
    count: "8",
  },
];

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredListCategory, setFilterListCategory] = useState(AllProducts);
  const [searchInput, setSearchInput] = useState("");

  const [selectedProduct, setSelectedProduct] = useState([]);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState({});
  const allProductsList = AllProducts;

  const cartList = useSelector(allCartItems);

  // {Filter For Input Radio}

  useEffect(() => {
    const updatedCategoryList =
      selectedCategory === "All"
        ? allProductsList
        : allProductsList.filter((each) => each.category === selectedCategory);
    setFilterListCategory([...updatedCategoryList]);
  }, [allProductsList, selectedCategory]);

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    // Filter the products based on the selected category
    const updatedCategoryList =
      selectedCategory === "All"
        ? allProductsList
        : allProductsList.filter(
            (product) => product.category === selectedCategory
          );
  };

  // {Filtering For Search Input}
  // {implemented Debounce for smooth filtering}

  const updateQuery = (e) => setSearchInput(e?.target?.value);
  const setDebounce = debounce(updateQuery, 500);

  useEffect(() => {
    setFilterListCategory([
      ...allProductsList.filter((each) =>
        each.title.toLowerCase().includes(searchInput.toLowerCase())
      ),
    ]);
  }, [searchInput]);

  const handleAddProduct = (product) => {
    const selectedQuantity = product.quantity[0]; // Initial selected quantity
    const selectedPrice = product.price[0]; // Initial selected price
    const updatedCartList = [...cartList, product];
    dispatch(actionAddProduct(updatedCartList));
  };

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setSelectedQuantity(newQuantity);

    dispatch(actionUpdateQuantity({ product: product, quantity: newQuantity }));
  };

  return (
    <div className="products-filter p-2 h-auto ">
      {/* {explore category} */}

      <div className="flex items-center justify-between mb-4 pt-4 pr-5">
        <h1 className="mb-4 font-normal text-xs md:text-lg">
          Home / All Products
        </h1>
        <Input
          placeholder="Search.."
          size="lg"
          color="default"
          aria-label="Search.."
          onChange={setDebounce}
          bordered
        />
      </div>
      <main className="flex">
        <div className="hidden lg:flex border-gray gap-2 border-solid border-2 flex p-10 flex-col w-1/5">
          <p type="button" className="font-semibold mb-4">
            EXPLORE BY CATEGORY
          </p>
          <div>
            {/* {filtering Category } */}

            <div className="products-filter__block " onChange={handleCategory}>
              {productsCategoryTypes.map((type) => (
                <div key={type.id} className="flex items-center">
                  <input
                    type="radio"
                    className="h-5 w-5 mr-2 mb-2"
                    key={type.id}
                    onChange={handleCategory}
                    value={type.id}
                    checked={selectedCategory === type.title}
                    title="category"
                  />
                  <label>{type.title}</label>
                </div>
              ))}
            </div>
          </div>

          {/* {Productscard} */}
        </div>
        <div className="grid md:grid-cols-2 product-card xl:grid-cols-2 xxl:grid-cols-3 xxs:px-2 bg-gray-50 md:mb-4 grow gap-2">
          {filteredListCategory.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsFilter;
