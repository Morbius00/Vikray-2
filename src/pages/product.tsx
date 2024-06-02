"use client";
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ProductDetails from "@/components/Productdetails component/productdetails";
const Product = () => {
  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <Helmet>VIKRAY</Helmet>
      <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
};
export default Product;
