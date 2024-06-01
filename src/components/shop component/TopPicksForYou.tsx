import React from "react";
import { Bag, BagNikon, Jack, Shoe } from "@/assets/shopassets";
import Productcard from "../common/Productcard/productcard";

const TopPicksForYou = () => {
  const data = [
    {
      id: 1,
      name: "Nike Shoes",
      image: Bag,
      size: [7, 8, 9, 10],
      path: "/product",
    },

    {
      id: 2,
      name: "CP-Jacket",
      image: Jack,
      size: ["M", "S", "L", "XL"],
      path: "/product",
    },

    {
      id: 3,
      name: "Cam Bag",
      image: Bag,
      size: [7, 8, 9, 10],
      path: "/product",
    },
    {
      id: 4,
      name: "Nikon Bag",
      image: BagNikon,
      size: [7, 8, 9, 10],
      path: "/product",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center mt-10 ">
        <div className=" text-white font-medium text-4xl mt-10">
          <span className="text-[#FFFF6D] text-4xl font-medium mr-3">TOP</span>
          PICKS FOR YOU
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>

      <div className="flex overflow-x-auto">
        <div className="container11 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-auto md:gap-6 my-12 ">
          {data.map((item) => {
            return (
              <Productcard
                key={item.id}
                name={item.name}
                image={item.image.src}
                size={item.size.map(String)}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPicksForYou;
