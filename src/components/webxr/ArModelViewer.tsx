import React from "react";
import nike_air_zoom_pegasus_36 from "./nike_air_zoom_pegasus_36.glb";
import envLight from "./studio_small_09_2k.hdr";
import "@google/model-viewer";
import { ArIcon2 } from "./assets";
import "./style/ArModelViewer.css";
import ArBackBtn from "./ArBackBtn";

const ArModelViewer = ({
  name,
  company,
  model,
  placement = "floor",
  poster,
  hotspots = null,
  price,
}) => {
  return (
    <div className=" flex bg-[#191919] w-[60vw] md:w-[600px]  h-[60vh] rounded-3xl">
      <model-viewer
        style={{ width: "100%", height: "60vh", display: "flex" }}
        alt={`A 3D model of an ${name} by ${company}`}
        src={model}
        environment-image={envLight}
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-placement={placement}
        camera-controls
        poster={poster}
        shadow-intensity="1"
        auto-rotate
      >
        {/* <div className="progress-bar" slot="progress-bar">
                    <div className="update-bar bg-white"></div>
                </div> */}
        {/* Hotspot */}
        {hotspots == null
          ? ""
          : (hotspots as Array<any>).map((hotspot) => {
              return (
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
                  <div className="pl-2 absolute translate-x-6 w-[10rem] felx items-center text-white backdrop-blur-md border border-white p-1 rounded-full">
                    {hotspot.name}
                  </div>
                </div>
              );
            })}

        {/* Button to trigger AR */}
        <button
          className="text-white mt-[50vh] mx-[50%] translate-x-[-50%] flex backdrop-blur-lg justify-center w-[12rem] items-center space-x-3 border border-white p-2 rounded-full hover:bg-[#ffffff2c]"
          slot="ar-button"
          id="ar-button"
        >
          <div id="ar-prompt">
            <ArIcon2 />
          </div>
          <div className="text-sm">View in your space</div>
        </button>
        {/* <ArModelViewer /> */}

        {/* Back button */}
        <ArBackBtn name={name} company={company} price={price} />
      </model-viewer>
    </div>
  );
};

export default ArModelViewer;
