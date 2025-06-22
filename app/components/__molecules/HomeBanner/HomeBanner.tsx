"use client";
import React from "react";
import Header from "../Header/Header";
import BannerImage from "../../../common/images/banner.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HomeBanner() {
  const router = useRouter();

  function seeProduct() {
    router.push("/selectedproducts/xx99-mk2");
  }

  return (
    <>
      <div className="h-[80vh] max-[725px]:h-auto  w-full bg-[#0E0E0E] ">
        <Header />
        <div className="flex max-w-[1110px] mx-auto  w-full justify-between max-[725px]:hidden px-[20px]">
          <div className="flex flex-col h-full justify-center mt-[100px] gap-[24px]">
            <h3 className="tracking-widest text-[24px] text-[#484848]">
              N E W <span className="ml-6">P R O D U C T</span>
            </h3>
            <h3 className="text-[white] text-[56px] leading-none">
              XX99 Mark II <br />
              Headphones
            </h3>
            <p className="text-[#484848] leading-tight">
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br /> enthusiast.
            </p>
            <button
              onClick={seeProduct}
              className="w-[160px] cursor-pointer tracking-wider h-[48px] bg-[#D87D4A] text-white hover:opacity-75"
            >
              SEE PRODUCT
            </button>
          </div>
          <div className="relative w-[700px] h-[510px]">
            <Image
              src={BannerImage}
              fill
              alt="earphone"
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative w-full h-[80vh] min-[725px]:hidden">
          <Image
            src={BannerImage}
            alt="earphone"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
            <h3 className="tracking-widest text-[#B3B3B3] text-[14px]">
              NEW PRODUCT
            </h3>
            <h1 className="text-white text-[32px] leading-tight font-bold">
              XX99 Mark II <br /> Headphones
            </h1>
            <p className="text-[#B3B3B3] text-[14px] leading-tight">
              Experience natural, lifelike audio <br />
              and exceptional build quality made <br />
              for the passionate music enthusiast.
            </p>
            <button
              onClick={seeProduct}
              className="w-[160px] cursor-pointer tracking-wider h-[48px] bg-[#D87D4A] text-white hover:opacity-75"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
