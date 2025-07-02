"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HeadType } from "../SpeakerHead/SpeakerHead";
import Link from "next/link";
import { axiosInstance } from "@/app/common/lib/axios-instance";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  features: string;
  src: string;
  additionalImages: string[];
  category: string;
}

function SpeakersForSaleSection({ category }: HeadType) {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get(`/products?category=${category}`);
      if (resp.status === 200) {
        setProducts(resp.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div className="max-w-[1110px] mx-auto flex flex-col gap-[140px] max-[870px]:gap-[80px] mt-[160px]">
      {products.map((el, key) => (
        <div
          key={key}
          className={`flex px-[20px] max-[870px]:flex-col max-[870px]:gap-[30px] items-center justify-between ${
            key % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="max-w-[540px] w-full h-[560px] max-[500px]:h-[300px]  relative rounded-[10px] overflow-hidden">
            <Image
              src={el.src}
              fill
              className="object-cover rounded-[10px]"
              alt={el.category}
            />
          </div>

          <div
            className={`max-w-[445px] w-full flex flex-col gap-[40px] justify-center ${
              key % 2 === 0 ? "items-end text-right" : "items-start text-left"
            }`}
          >
            <h2 className="text-black max-[870px]:text-center text-[56px] leading-[1.1] font-semibold">
              {el.title}
            </h2>
            <p className="text-black opacity-70 max-[870px]:text-center">
              {el.description}
            </p>
            <div className="flex justify-center max-[870px]:w-full">
              <Link
                href={`selectedproducts/${el._id}`}
                className="w-[160px] flex justify-center items-center h-[48px] bg-[#D87D4A] text-white font-semibold hover:opacity-80 transition"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpeakersForSaleSection;
