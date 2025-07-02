import React from "react";
import Image from "next/image";
import Speaker from "../../../common/images/TableSpeaker.png";
import SeeProductBtnTransparent from "../../__atoms/SeeProductBtnTransparent/SeeProductBtnTransparent";

function TableSpeaker() {
  return (
    <div className="max-w-[1110px]  max-[650px]:mx-[20px] mx-auto h-[320px] relative rounded-[10px]  ">
      <Image
        src={Speaker}
        alt="Table Speaker"
        fill
        className="object-cover rounded-[10px]"
      />
      <div className="flex flex-col absolute gap-[40px]  top-[30%] left-[10%]">
        <h2 className="text-[28px] font-semibold tracking-widest">
          ZX7 SPEAKER
        </h2>
        <SeeProductBtnTransparent
          goTo={"/selectedproducts/6864532b0632259929e0dd3a"}
        />
      </div>
    </div>
  );
}

export default TableSpeaker;
