import React from "react";
import "@google/model-viewer";
import {
  nike_air_zoom_pegasus_36,
  cyberpunk_jacket,
  old_camera_bag_,
} from "@/assets/3dassets/index";
import "./style/ArModelViewer.module.css";
import  ArView  from "./ViewArSpace";
import ArBackBtn from "./ArBackBtn";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

const ArModel = ({
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
  hotspots: any;
  price: string;
}) => (
  <div id="card">
    <div className=" flex flex-col items-center justify-center bg-[#191919] w-[60vw] md:w-[600px]  h-[60vh] rounded-3xl">
      <model-viewer
        style={{ width: "100%", height: "60vh", display: "flex" }}
        src={old_camera_bag_}
        alt={`A 3D model of an ${name} by ${company}`}
        ios-src=""
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
        ar-placement={placement}
      >
        {hotspots == null
          ? ""
          : hotspots.map((hotspot: any) => {
              return (
                <div
                  key={hotspot.id} // Add key prop
                  className="Hotspot flex items-center space-x-2" // Replace class with className
                  slot={`hotspot-${hotspot.id}`}
                  data-position={hotspot.position}
                  data-normal={hotspot.normal}
                  data-visibility-attribute="visible"
                >
                  <button
                    className="annotation w-[20px] h-[20px] border border-white bg-[#ffffff9a] rounded-full" // Replace class with className
                    data-visibility-attribute="visible"
                  ></button>
                  <div className="pl-2 absolute translate-x-6 w-[10rem] flex items-center text-white backdrop-blur-md border border-white p-1 rounded-full">
                    {hotspot.name}
                  </div>
                </div>
              );
            })}
      </model-viewer>
      
      <button
        className="text-white flex flex-col backdrop-blur-lg justify-center w-[12rem] items-center mb-5 border border-white p-2 rounded-full hover:bg-[#ffffff2c]"
        slot="ar-button"
        id="ar-button"
      >
        
       <div className="text-sm">View in your space</div>
      </button>
      {/* Back button */}
      {/* <div className="sm:hidden"><ArBackBtn  name={name} company={company} price={price} /></div> */}
      
    </div>
  </div>
);

export default ArModel;
