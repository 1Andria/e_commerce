import React from "react";
import Header from "../Header/Header";
import BannerImage from "../../../common/images/banner.png";
import Image from "next/image";

function HomeBanner() {
  return (
    <>
      <div className="h-[80vh]  w-full bg-[#0E0E0E]">
        <Header />
        <div className="flex max-w-[1110px] mx-auto  w-full justify-between ">
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
            <button className="w-[160px] tracking-wider h-[48px] bg-[#D87D4A] text-white hover:opacity-75">
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
      </div>
    </>
  );
}

export default HomeBanner;
