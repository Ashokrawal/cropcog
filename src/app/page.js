"use client";

import "../styles/styles.css";
import TrendingDeals from "../components/HomeSections/TrendingDeals";
import ProductsCategory from "../components/HomeSections/ProductsCategory";
import BestSellers from "../components/HomeSections/BestSellers";
import Faqs from "/src/components/Faqs.jsx";
import Hero from "../components/Hero.jsx";
import EatHealthy from "../components/EatHealthy";
import AnanthAgriPage from "../components/AnathAgriPage";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="bg-gray-50"
        >
          <Hero />
          <ProductsCategory />
          <EatHealthy />
          <TrendingDeals />
          <AnanthAgriPage />
          <BestSellers />
          <Faqs />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
