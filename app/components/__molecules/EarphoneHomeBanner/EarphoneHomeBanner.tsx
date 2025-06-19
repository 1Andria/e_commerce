import Image from "next/image";
import React from "react";
import EarphoneBanner from "../../../common/images/EarphoneBanner.png";
import SeeProductBtnTransparent from "../../__atoms/SeeProductBtnTransparent/SeeProductBtnTransparent";

function EarphoneHomeBanner() {
  return (
    <>
      <div className="max-w-[1110px] mx-auto flex justify-between mt-[48px]">
        <div className="w-[540px] h-[320px] relative">
          <Image
            src={EarphoneBanner}
            alt="earphone"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[540px] h-[320px] bg-[#F1F1F1] rounded-[10px] gap-[20px] flex flex-col justify-center pl-[50px]">
          <h2 className="text-black text-[28px] font-semibold tracking-wider">
            YX1 EARPHONES
          </h2>
          <SeeProductBtnTransparent />
        </div>
      </div>
    </>
  );
}

export default EarphoneHomeBanner;
