'use client'

import React from "react";

// import { ArIcon2 } from "./assets";
import "./style/ArModelViewer.module.css";
import ArBackBtn from "./ArBackBtn";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

const ArModelViewer = ({
  name,
  company,
  model,
  placement = "floor",
  poster,
  hotspots = null,
  price,
}: {
  name: string;
  company: string;
  model: string;
  placement?: string;
  poster: string;
  hotspots?: Array<any> | null;
  price: string;
}) => {
  return (
    <div className=" flex bg-[#191919] w-[60vw] md:w-[600px]  h-[60vh] rounded-3xl">
     
    </div>
  );
};

export default ArModelViewer;
