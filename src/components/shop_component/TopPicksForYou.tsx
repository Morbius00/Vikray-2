import React from "react";
import Productcard from "../common/Productcard/productcard";
import productData from "../../../data/productdata.json"; // Adjust the path as necessary
import { Jack, Bag, BagNikon, Shoe } from "@/assets/shopassets";

const TopPicksForYou = () => {
  const imageMap: { [key: string]: any } = {
    "jacket.png": Jack,
    "nickonbag.png": BagNikon,
    "bag.png": Bag,
    "shoe.png": Shoe,
    // Add other images here if needed
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center mt-10">
        <div className="text-white font-medium text-4xl mt-10">
          <span className="text-[#FFFF6D] text-4xl font-medium mr-3">TOP</span>
          PICKS FOR YOU
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>

      <div className="flex overflow-x-auto">
        <div className="container11 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-auto md:gap-6 my-12">
          {productData.map((item) => {
            return (
              <Productcard
              key={item.id}
              name={item.name}
              image={imageMap[item.poster]} // Use the mapped image
              size={item.size.map(String)}
              path={`/products/${item.model}`} // Adjust the path based on your routing
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPicksForYou;
