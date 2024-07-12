"use client";
import React from "react";
import ArModelViewerDynamic from "@/components/common/webxr/ArModelViewerDynamic";
import { rock_jacket } from "../../assets/3dassets/index"; // Import the 3D model
import Button from "../common/Button/button";
import SizeChart from "../common/SizeChart/sizes";

const ProductBody = () => {
  const data = [
    {
      id: 1,
      name: "Rock Jacket",
      company: "CrypoRock",
      price: "$1250",
      poster: "",
      model: rock_jacket,
      placement: "floor",
      hotspots: [
        {
          id: 1,
          name: "Button closure",
          position:
            "0.07188187187656739m 1.4514574166323728m 0.08786709958031445m",
          normal:
            "-0.021876867398458802m 0.3620999834986919m 0.9318825058037508m",
        },
        {
          id: 2,
          name: "Leather material",
          position:
            "-0.14273273485683724m 1.193229129751948m 0.0749232170042912m",
          normal: "-0.6750052890684157m 0.165322875775553m 0.7190522974547578m",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Product details */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:my-16 my-10">
        <div className=" flex flex-col items-start justify-start lg:items-center lg:justify-center lg:-mt-20  ml-10">
          <div className="text-5xl font-bold mb-8">{data[0].name}</div>
          <div className="lg:mb-24 mb-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-[#FFFF6D]">
                {data[0].price}
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

          <div className="flex space-x-6 ">
            <Button className="bg-[#FFFF6D] flex items-center space-x-3 text-black px-8 py-2 rounded-xl">
              Buy Now
            </Button>
            <Button className="bg-[] border border-[#FFFF6D] flex items-center space-x-3 text-white px-8 py-2 rounded-xl">
              Wishlist
            </Button>
          </div>
          
        </div>
        <div className="items-center flex justify-center lg:mr-24 md:mr-40 mt-14">
          {/* AR Model Viewer */}
          <ArModelViewerDynamic
            name={data[0].name}
            company={data[0].company}
            hotspots={data[0].hotspots.map((hotspot) => ({
              ...hotspot,
              id: hotspot.id.toString(),
            }))}
            price={data[0].price}
            poster={data[0].poster}
            model={data[0].model}
          />
        </div>
        <div className="flex flex-col items-start justify-start ml-10 sm:ml-10 md:-mt-[22rem] lg:mt-0">
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
          <div className="lg:pt-[5rem] pt-5">
            <div className="flex items-center space-x-2 text-2xl">
              <div>Description</div>

              <div className="border border-white h-0 w-[5vw]"></div>
            </div>
            <div className="md:w-[30vw] w-[58vw]">
              Black solid jacket, has a spread collar, 4 pockets, button
              closure, long sleeves, straight hem, and unlined lining
            </div>
          </div>
          <div className="lg:pt-[5rem] pt-5">
          
            <h2 className="flex text-xl">
              Product by{" "}
              <span className="text-[#FFFF6D] mx-1"> {data[0].company} </span>
            </h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
