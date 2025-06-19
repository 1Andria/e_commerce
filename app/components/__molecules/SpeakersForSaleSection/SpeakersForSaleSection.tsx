import { temporaryData } from "@/app/common/Datas/TemporaryData";
import Image from "next/image";
import React from "react";
import { HeadType } from "../SpeakerHead/SpeakerHead";
import Link from "next/link";

function SpeakersForSaleSection({ category }: HeadType) {
  return (
    <div className="max-w-[1110px] mx-auto flex flex-col gap-[140px] mt-[160px]">
      {temporaryData
        .filter((el) => el.category === category)
        .map((el, key) => (
          <div
            key={key}
            className={`flex items-center justify-between ${
              key % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-[540px] h-[560px] relative rounded-[10px] overflow-hidden">
              <Image
                src={el.src}
                fill
                className="object-cover rounded-[10px]"
                alt={el.category}
              />
            </div>

            <div
              className={`w-[445px] flex flex-col gap-[40px] justify-center ${
                key % 2 === 0 ? "items-end text-right" : "items-start text-left"
              }`}
            >
              <h2 className="text-black text-[56px] leading-[1.1] font-semibold">
                {el.title}
              </h2>
              <p className="text-black opacity-70">{el.description}</p>
              <Link
                href={`selectedproducts/${el.id}`}
                className="w-[160px] flex justify-center items-center h-[48px] bg-[#D87D4A] text-white font-semibold hover:opacity-80 transition"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SpeakersForSaleSection;
