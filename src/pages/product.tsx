"use client";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";
import ProductDetails from "@/components/Productdetails component/productdetails";
import RecomendedProduct from "@/components/RecomendedCards/recomendedcards"
const Product = () => {
  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <HelmetProvider>
      <Helmet>
        <title>Product | Vikray | Metaverse Shopping</title>
      </Helmet>
      <Navbar />
      <ProductDetails  />
      <RecomendedProduct />
      <Footer />
      </HelmetProvider>
    </div>
  );
};
export default Product;
