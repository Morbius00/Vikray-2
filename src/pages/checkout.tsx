// pages/checkout.tsx
import React, { useState } from "react";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import { BagIcon } from "@/assets/productAssets";
import Button from "@/components/common/Button/button";
import { Jack, Bag, BagNikon, Shoe } from "@/assets/shopassets";
import EmpthyHero from "@/assets/checkoutAssets/EmptyHero.png"

const Checkout = () => {
  const router = useRouter();
  const { product } = router.query;

  const [productData, setProductData] = useState(
    product ? JSON.parse(product as string) : null
  );

  const [walletAddress, setWalletAddress] = useState("");
  const [isWalletAddressValid, setIsWalletAddressValid] = useState(true);
  const [isWalletAdded, setIsWalletAdded] = useState(false);

  const handleWalletAddressChange = (event: any) => {
    setWalletAddress(event.target.value);
  };

  const handleCheckClick = () => {
    // Validate wallet address
    if (isValidWalletAddress(walletAddress)) {
      console.log("WalletAddress", walletAddress);
      setIsWalletAddressValid(true);
      setIsWalletAdded(true);
    } else {
      setIsWalletAddressValid(false);
      setIsWalletAdded(false);
    }
  };

  const isValidWalletAddress = (address: string) => {
    // Ethereum wallet address pattern
    const pattern = /^0x[a-fA-F0-9]{40}$/;
    return pattern.test(address);
  };

  const imageMap: { [key: string]: any } = {
    "jacket.png": Jack,
    "nickonbag.png": BagNikon,
    "bag.png": Bag,
    "shoe.png": Shoe,
    // Add other images here if needed
  };

  const handleRemove = () => {
    setProductData(null);
  };

  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <Navbar />
      <div className="flex justify-center items-center ">
        <div className="text-white font-medium text-4xl my-10">
          Your Items are ready to{" "}
          <span className="text-[#FFFF6D] text-4xl font-medium mr-3">Checkout</span>
          
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>
      {productData ? (
        <div className="flex md:flex-row flex-col items-center justify-center sm:mx-20 mx-6  my-24 gap-10">
          <div className=" bg-white-900 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 shadow-[0px_0px_150px_1px_#75752D]">
            <Image
              className="w-96 sm:w-96  lg:pt-5 lg:w-[600px]"
              src={imageMap[productData.poster]}
              alt={productData.name}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h2 className="sm:text-5xl text-4xl font-semibold">
              {productData.name}
            </h2>
            <div className="flex items-center space-x-2 sm:text-3xl text-2xl mt-5">
              <div>Details</div>
              <div className="border border-white h-0 w-[5vw]"></div>
            </div>
            <p className="text-gray-500 text-xl sm:w-[700px] w-96">
              Black solid jacket, has a spread collar, 4 pockets, button
              closure, long sleeves, straight hem, and unlined lining
            </p>
            <div className="mb-4">
              <h2 className="sm:text-2xl text-xl font-bold mt-5">
                Add Wallet
              </h2>
              <div className="flex items-center mt-3">
                <input
                  type="text"
                  className={`bg-transparent text-gray-white placeholder:text-white border ${
                    isWalletAddressValid ? "border-[#FFFF6D]" : "border-red-500"
                  } rounded px-[2vw] py-3 mr-2`}
                  placeholder="Enter Your Wallet Address"
                  value={walletAddress}
                  onChange={handleWalletAddressChange}
                  disabled={isWalletAdded}
                />
                <Button filled onClick={handleCheckClick} disabled={isWalletAdded}>
                  {isWalletAdded ? "Added" : "Add"}
                </Button>
              </div>
              {!isWalletAddressValid && (
                <p className="text-red-500 mt-2">Invalid wallet address</p>
              )}
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-[#FFFF6D]">
                  {productData.price}
                </span>
                <span className="text-white font-bold text-2xl line-through mr-2">
                  Rs2500
                </span>
                <span className="text-[#92ff58] font-bold text-2xl">
                  50% off
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-[#FFFF6D] flex items-center space-x-3 text-black px-8 py-2 rounded-xl gap-2">
                <Image src={BagIcon} alt="Checkout icon" /> Proceed to Payment
              </Button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div>
            <Image src={EmpthyHero} alt="Empthy Hero image"/>
          </div>
          <h2 className="text-3xl font-bold mb-4">Oops Your cart is empty !</h2>
          <Button
            className="bg-[#FFFF6D] text-black px-8 py-2 rounded-xl mb-5"
            onClick={() => router.push("/store")}
          >
            Continue Shopping
          </Button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
