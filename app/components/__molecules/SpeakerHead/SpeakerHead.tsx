import React from "react";
import Header from "../Header/Header";

export type HeadType = {
  category: string;
};

function SpeakerHead({ category }: HeadType) {
  return (
    <>
      <div className="w-full h-[336px] bg-black ">
        <Header />
        <div className="w-full flex justify-center mt-[80px]">
          <h1 className="text-white text-[40px] font-semibold">{category}</h1>
        </div>
      </div>
    </>
  );
}

export default SpeakerHead;
