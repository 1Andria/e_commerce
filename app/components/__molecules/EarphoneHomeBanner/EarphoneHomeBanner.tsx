import Image from "next/image";
import React from "react";
import EarphoneBanner from "../../../common/images/EarphoneBanner.png";
import SeeProductBtnTransparent from "../../__atoms/SeeProductBtnTransparent/SeeProductBtnTransparent";

function EarphoneHomeBanner() {
  return (
    <>
      <div className="max-w-[1110px] mx-auto flex justify-between max-[650px]:items-center max-[650px]:gap-[20px] max-[650px]:flex-col max-[650px]:px-[20px]  mt-[48px]">
        <div className="max-w-[540px] rounded-[10px] w-full h-[320px] relative">
          <Image
            src={EarphoneBanner}
            alt="earphone"
            fill
            className="object-cover rounded-[10px]"
          />
        </div>
        <div className="max-w-[540px] w-full h-[320px] bg-[#F1F1F1] rounded-[10px] gap-[20px] flex flex-col justify-center pl-[50px]">
          <h2 className="text-black text-[28px] font-semibold tracking-wider">
            YX1 EARPHONES
          </h2>
          <SeeProductBtnTransparent
            goTo={`/selectedproducts/686452000632259929e0dd22`}
          />
        </div>
      </div>
    </>
  );
}

export default EarphoneHomeBanner;
