"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useReducer, useState } from "react";
import { temporaryData } from "@/app/common/Datas/TemporaryData";
import Image from "next/image";
import { quantityReducer, useCartStore } from "@/app/common/store/store";
import AllNavigator from "../../__molecules/AllNavigator/AllNavigator";
import CommercialCompany from "../../__molecules/CommercialCompany/CommercialCompany";
import { ProductType } from "@/app/common/types/types";
import AddToCartBtn from "../../__atoms/AddToCartBtn/AddToCartBtn";

function SelectedProductBody() {
  const path = useParams();
  const Product = temporaryData.find((el) => el.id === path.id);
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, dispatch] = useReducer(quantityReducer, 1);
  const [suggested, setSuggested] = useState<ProductType[]>([]);

  useEffect(() => {
    if (!Product) return;

    const randomThree = temporaryData
      .filter((item) => item.id !== Product.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    setSuggested(randomThree);
  }, [Product]);

  if (!Product)
    return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="max-w-[1110px] mx-auto flex-col">
      <Link
        href={"/home"}
        className="opacity-[0.8] mt-[80px] inline-block hover:underline mb-[50px]"
      >
        Go back
      </Link>

      <div className="flex justify-between items-center gap-10">
        <div className="max-w-[540px] w-full h-[560px] relative">
          <Image
            src={Product.src}
            alt={Product.category || "product"}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-6 max-w-[500px]">
          {Product?.isNew && (
            <h3 className="text-[#D87D4A] tracking-widest uppercase text-[14px]">
              N e w <span className="ml-[10px]">P r o d u c t</span>
            </h3>
          )}
          <h1 className="text-[40px] w-[300px] text-black font-bold leading-tight">
            {Product.title}
          </h1>
          <p className="text-[15px] w-[400px] opacity-[0.6]">
            {Product.description}
          </p>
          <h3 className="font-bold text-[18px]">${Product.price}</h3>

          <div className="flex gap-[20px]">
            <AddToCartBtn dispatch={dispatch} quantity={quantity} />

            <button
              onClick={() => addToCart(Product.id, quantity)}
              className="bg-[#D87D4A] text-white px-6 py-3 uppercase text-sm font-bold tracking-wider hover:bg-[#FBAF85] transition"
            >
              Add to cart
            </button>
          </div>

          <p className="mt-2 text-[14px] text-gray-500">
            Total:{" "}
            <span className="font-bold">${Product.price * quantity}</span>
          </p>
        </div>
      </div>

      <div className="flex w-full mt-[60px] justify-between pr-[150px]">
        <div className="flex w-[400px] flex-col">
          <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
          <p className="text-[15px] opacity-60 whitespace-pre-line">
            {Product.features}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6">IN THE BOX</h2>
          <ul className="space-y-2">
            {Product.inTheBox.map((boxItem, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-[#D87D4A] font-bold">
                  {boxItem.quantity}x
                </span>
                <span className="opacity-60">{boxItem.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full mb-[160px] mt-[160px] flex gap-[30px]">
        <div className="flex flex-col gap-[32px]">
          <div className="w-[445px] relative h-[280px] ">
            <Image
              src={Product.additionalImages[0]}
              alt="gallery-1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[445px] relative h-[280px] ">
            <Image
              src={Product.additionalImages[1]}
              alt="gallery-2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="relative w-full h-full min-h-[592px]">
          <Image
            src={Product.additionalImages[2]}
            alt="gallery-3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-12 mb-[160px]">
        <h2 className="text-black text-[32px] font-bold text-center">
          YOU MAY ALSO LIKE
        </h2>
        <div className="flex justify-between flex-wrap gap-6">
          {suggested.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center max-w-[350px] mx-auto"
            >
              <div className="w-[350px] h-[318px] relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-black font-semibold text-[24px] mb-4 text-center">
                {item.title}
              </h3>
              <Link
                href={`/selectedproducts/${item.id}`}
                className="w-[160px] flex justify-center items-center h-[48px] bg-[#D87D4A] text-white font-semibold hover:opacity-80 transition"
              >
                SEE PRODUCT
              </Link>
            </div>
          ))}
        </div>
      </div>
      <AllNavigator />
      <CommercialCompany />
    </div>
  );
}

export default SelectedProductBody;
