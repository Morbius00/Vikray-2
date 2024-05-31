import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
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
    </div>
  );
};

export default Shop;
