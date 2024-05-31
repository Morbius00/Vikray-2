import React from "react";
import Button from "../common/Button/button";

const footer = () => {
  return (
    <footer className=" bg-black ">
      <div className="flex md:flex-row flex-col md:space-x-[4vw] py-16 lg:mx-20">
        <div className="lg:mt-16 lg:text-center text-5xl font-bold  lg:ml-16 ml-7 ">
          A step <span className="text-[#FFFF6D]">forward</span> towards{" "}
          <span className="text-[#FFFF6D]">web3</span>
        </div>
        <div>
          <div className="text-lg font-semibold ml-7 mt-3 ">
            Phone <br /> +91 9123755164
          </div>
          <div className="text-lg font-semibold ml-7 mt-3">
            Email <br /> vikray.web3@gmail.com
          </div>
          <div>
            <div className="text-lg font-semibold ml-7 mt-3 ">Socials</div>
          </div>
        </div>

        <div className="bg-[#FFFF6D] md:w-2 md:h-24 rounded-lg"></div>
        <div>
          <div className="text-xl font-bold text-white pb-9 ml-7 mt-3">
            Excited for your new shopping journey?{" "}
          </div>
          <Button filled className="text-lg ml-7">
            Let Shop
          </Button>
        </div>
      </div>
      <div className="text-center py-5 text-xl">Made By Morbius</div>
    </footer>
  );
};
export default footer;
