"use client";

import { useCartStore } from "@/app/common/store/store";
import { temporaryData } from "@/app/common/Datas/TemporaryData";
import Image from "next/image";
import React from "react";

export default function CheckoutSummary() {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce((acc, { id, quantity }) => {
    const product = temporaryData.find((p) => p.id === id);
    if (!product) return acc;
    return acc + product.price * quantity;
  }, 0);

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  return (
    <div className="bg-white flex flex-col justify-between h-[612px] p-6 rounded-lg shadow-md w-[350px]">
      {cart.length > 0 ? (
        <div>
          <h2 className="text-lg font-bold tracking-widest">SUMMARY</h2>
          <div className="flex flex-col gap-[10px]  max-h-[250px] mt-[30px] overflow-y-auto">
            {cart.map(({ id, quantity }) => {
              const product = temporaryData.find((item) => item.id === id);
              if (!product) return null;
              return (
                <div key={id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.src}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="font-bold text-sm">{product.title}</p>
                      <p className="text-gray-500 text-sm">${product.price}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-sm text-gray-600">
                    x{quantity}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className="text-center opacity-60">No selected products yet</h1>
      )}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">TOTAL</span>
          <span className="font-bold">${total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">SHIPPING</span>
          <span className="font-bold">${shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">VAT (INCLUDED)</span>
          <span className="font-bold">${vat.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-gray-500 font-semibold">GRAND TOTAL</span>
          <span className="font-bold text-[#D87D4A]">
            ${grandTotal.toLocaleString()}
          </span>
        </div>
        <button className="w-full mt-[30px] bg-[#D87D4A] text-white py-3 rounded-md hover:bg-[#fbaf85] transition font-semibold tracking-widest">
          CONTINUE
        </button>
      </div>
    </div>
  );
}
