"use client";
import React from "react";
import Image from "next/image";
import ArModelViewerDynamic from "@/components/common/webxr/ArModelViewerDynamic";
import {
  rock_jacket,
  nike_air_zoom_pegasus_36,
  old_camera_bag_,
  versace_bag,
} from "../../assets/3dassets/index"; // Import the 3D model
import Button from "../common/Button/button";
import SizeChart from "../common/SizeChart/sizes";
import { Product } from "@/types/type";
import { Jack, Bag, BagNikon, Shoe } from "@/assets/shopassets";
import { HeartIcon, BagIcon } from "@/assets/productAssets";

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductBody: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const modelMap: { [key: string]: any } = {
    rock_jacket: rock_jacket,
    nike_air_zoom_pegasus_36: nike_air_zoom_pegasus_36,
    old_camera_bag_: old_camera_bag_,
    versace_bag: versace_bag,
  };
  const imageMap: { [key: string]: any } = {
    "jacket.png": Jack,
    "nickonbag.png": BagNikon,
    "bag.png": Bag,
    "shoe.png": Shoe,
    // Add other images here if needed
  };

  return (
    <div>
      {/* Product details */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:my-16 my-10">
        <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center lg:-mt-20 ml-10">
          <div className="text-5xl font-bold mb-8">{product.name}</div>
          <div className="lg:mb-24 mb-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-[#FFFF6D]">
                {product.price}
              </span>
              <span className="text-white font-bold text-2xl line-through mr-2">
                Rs2500
              </span>
              <span className="text-[#92ff58] font-bold text-2xl">50% off</span>
            </div>
            <div className="mb-4">
              <SizeChart />
            </div>
          </div>

          <div className="flex space-x-6">
            <Button className="bg-[#FFFF6D] flex items-center space-x-3 text-black px-8 py-2 rounded-xl gap-2">
            <Image src={BagIcon} alt="buy now icon"/>Buy Now
            </Button>
            <Button className="bg-[] border border-[#FFFF6D] flex items-center space-x-3 text-white px-8 py-2 rounded-xl gap-2">
             <Image src={HeartIcon} alt="heraticon"/> Wishlist
            </Button>
          </div>
        </div>
        <div className="items-center flex justify-center lg:mr-24 md:mr-40 mt-14">
          {/* AR Model Viewer */}
          <ArModelViewerDynamic
            name={product.name}
            company={product.company}
            hotspots={product.hotspots.map((hotspot) => ({
              ...hotspot,
              id: hotspot.id.toString(),
            }))}
            price={product.price}
            poster={imageMap[product.poster]}
            model={modelMap[product.model]}
          />
        </div>
        <div className="flex flex-col items-start justify-start ml-10 sm:ml-10 lg:-ml-5 md:-mt-[22rem] lg:mt-0">
          {/* Material & Care */}
          <div className="md:pt-[5rem] pt-10">
            <div className="flex items-center space-x-2 text-2xl">
              <div>Material & Care</div>
              <div className="border border-white h-0 w-[5vw]"></div>
            </div>
            <div>
              Material: Vegan Leather <br />
              Dry Wash
            </div>
          </div>

          {/* Description */}
          <div className="lg:pt-[3rem] pt-5">
            <div className="flex items-center space-x-2 text-2xl">
              <div>Description</div>
              <div className="border border-white h-0 w-[5vw]"></div>
            </div>
            <div className="md:w-[30vw] w-[58vw]">
              Black solid jacket, has a spread collar, 4 pockets, button
              closure, long sleeves, straight hem, and unlined lining
            </div>
          </div>
          <div className="lg:pt-[3rem] pt-5">
            <div className="mb-4">
              <h2 className="sm:text-2xl text-xl font-bold">
                Customer Reviews
              </h2>
              <div className="flex items-center">
                <span className="text-yellow-500 sm:text-2xl text-xl mr-2">
                  ★★★★★
                </span>
                <p className="text-gray-600">5 2345 reviews</p>
              </div>
            </div>
          </div>
          <div className="lg:pt-[3rem] pt-5">
            <h2 className="flex text-xl">
              Product by{" "}
              <span className="text-[#FFFF6D] mx-1">{product.company}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
