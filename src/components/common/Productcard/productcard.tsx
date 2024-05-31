"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./productcardui";
import Link from "next/link";

export const ThreeDCardDemo = ({
  name,
  image,
  size,
  path,
}: {
  name: string;
  image: string;
  size: string[];
  path: string;
}): JSX.Element => {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" bg-gray-800  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#F8F872]/[0.4] dark:bg-[#232323] dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-md font-bold  max-w-sm mt-2 dark:text-[#ffff6de7]"
        >
          size
          {size.map((item, index) => (
            <span className="w-6 h-6 text-center leading-6 text-sm inline-block text-gray-900 bg-white hover:bg-[#ffff6de7] mx-1.5 transition duration-500 rounded cursor-pointer" key={index}>{item}</span>
          ))}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={5}
          rotateZ={-5}
          className=" mx-auto w-auto mt-4"
        >
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-auto mx-auto object-cover rounded-xl group-hover/card:shadow-sm"
            alt="thumbnail"
          />
        </CardItem>
        <div className="">
          <CardItem
            translateZ={20}
            target="__blank"
            className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 group-hover/card:shadow-sm mt-6"
          >
            {""}
          </CardItem>
        </div>
        <div className="flex space-x-10 items-center mt-16 ">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-md border border-[#ffff6db1] font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className=" rounded-2xl px-[2vw] py-[1vh] bg-[#F8F872] text-black hover:bg-[#ffff6db1] group-hover/card:shadow-sm text-md font-bold"
          >
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
