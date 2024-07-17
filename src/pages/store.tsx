'use client'

import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";
import { TopPicksForYou } from "@/components/shop component";
import  DealDay  from '@/components/shop component/DealOfTheDay';

import {
  ContainerScroll,
  Header,
  Card,
} from "@/components/shop component/container-scroll-animation";

const Shop = () => {
  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <HelmetProvider>
      <Helmet>
        <title>Shop | Vikray | Metaverse Shopping</title>
      </Helmet>
      
      <Navbar />
      <ContainerScroll titleComponent="Welcome to the MetaVerse Shoping world">
        <Header />
      </ContainerScroll>
      <DealDay />
      <TopPicksForYou />
      <Footer />
      </HelmetProvider>
    </div>
  );
};

export default Shop;
