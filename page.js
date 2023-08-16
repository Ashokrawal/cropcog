"use client";

import "../styles/styles.css";
import TrendingDeals from "../components/HomeSections/TrendingDeals";
import ProductsCategory from "../components/HomeSections/ProductsCategory";
import BestSellers from "../components/HomeSections/BestSellers";
import Faqs from "/src/components/Faqs.jsx";
import Hero from "../components/Hero.jsx";
import EatHealthy from "../components/EatHealthy";
import AnanthAgriPage from "../components/AnathAgriPage";

export default function Home() {
  return (
    <>
      <main className="bg-gray-50">
        <Hero />
        <ProductsCategory />
        <EatHealthy />
        <TrendingDeals />
        <AnanthAgriPage />
        <BestSellers />
        <Faqs />
      </main>
    </>
  );
}
