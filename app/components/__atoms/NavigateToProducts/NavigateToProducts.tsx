"use client";
import { NavTypes } from "@/app/common/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavigateToProducts({ ImageSrc, category }: NavTypes) {
  return (
    <>
      <Link
        href={`/${category.toLocaleLowerCase()}`}
        className="w-[350px] h-[304px] relative overflow-hidden bg-gradient-to-t from-[#F1F1F1] to-white flex flex-col items-center pb-[50px] "
      >
        <div className="absolute inset-0 " />
        <div className="relative w-[200px] h-[200px] z-10 ">
          <Image
            src={ImageSrc}
            alt="headphone"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="font-bold tracking-wider mt-[20px] text-[18px] ">
          {category}
        </h1>

        <h3 className="text-[14px] text-[gray]">shop</h3>
      </Link>
    </>
  );
}

export default NavigateToProducts;
