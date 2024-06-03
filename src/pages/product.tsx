"use client";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ProductDetails from "@/components/Productdetails component/productdetails";
const Product = () => {
  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <HelmetProvider>
      <Helmet>
        <title>Product | Vikray | Metaverse Shopping</title>
      </Helmet>
      <Navbar />
      <ProductDetails />
      <Footer />
      </HelmetProvider>
    </div>
  );
};
export default Product;
