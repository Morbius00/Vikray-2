import React from "react";
import "@google/model-viewer";
import {
  nike_air_zoom_pegasus_36,
  cyberpunk_jacket,
  old_camera_bag_,
} from "@/assets/3dassets/index";
import "./style/ArModelViewer.module.css";
import ArView from "./ViewArSpace";
import ArBackBtn from "./ArBackBtn";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

interface ArModelViewerProps {
  name: string;
  company: string;
  model: string;
  placement?: string;
  poster: string;
  hotspots: Array<{ id: string; position: string; normal: string; name: string }>;
  price: string;
}

const ArModelViewer: React.FC<ArModelViewerProps> = ({
  name,
  company,
  model,
  placement = "floor",
  poster,
  hotspots = [],
  price,
}) => (
  <div id="card">
    <div className="flex flex-col items-center justify-center bg-[#191919] w-[60vw] md:w-[600px] h-[60vh] rounded-3xl">
      <model-viewer
        style={{ width: "100%", height: "60vh", display: "flex" }}
        src={old_camera_bag_}
        alt={`A 3D model of an ${name} by ${company}`}
        ios-src=""
        poster={poster}
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
        ar-placement={placement}
      >
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="Hotspot flex items-center space-x-2"
            slot={`hotspot-${hotspot.id}`}
            data-position={hotspot.position}
            data-normal={hotspot.normal}
            data-visibility-attribute="visible"
          >
            <button
              className="annotation w-[20px] h-[20px] border border-white bg-[#ffffff9a] rounded-full"
              data-visibility-attribute="visible"
            ></button>
            <div className="pl-2 absolute translate-x-6 w-[10rem] flex items-center text-white backdrop-blur-md border border-white p-1 rounded-full">
              {hotspot.name}
            </div>
          </div>
        ))}
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

export default ArModelViewer;
