"use client";
import { useCartShow, useCartStore } from "@/app/common/store/store";
import { Popover, Box } from "@mui/material";
import React from "react";
import { temporaryData } from "@/app/common/Datas/TemporaryData";
import Image from "next/image";
import Link from "next/link";

type Props = {
  anchorRef: React.RefObject<HTMLImageElement | null>;
};

function Cart({ anchorRef }: Props) {
  const showCart = useCartShow((state) => state.showCart);
  const setShowCart = useCartShow((state) => state.setShowCart);
  const cartStore = useCartStore((state) => state.cart);
  const removeAll = useCartStore((state) => state.removeAll);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const cartItems = useCartStore((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, { id, quantity }) => {
    const product = temporaryData.find((item) => item.id === id);
    if (!product) return acc;
    return acc + product.price * quantity;
  }, 0);

  return (
    <Popover
      open={showCart}
      anchorEl={anchorRef.current}
      onClose={() => setShowCart(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: { zIndex: 50 },
      }}
    >
      <Box className="w-[377px] h-[510px] bg-white shadow-md rounded-lg px-[33px] pt-[33px] pb-[20px] flex flex-col justify-between">
        <div>
          <div className="w-full flex justify-between mb-4">
            <h2 className="font-bold text-[18px] tracking-widest">
              CART ({cartStore.length})
            </h2>
            <h2
              onClick={removeAll}
              className="underline cursor-pointer text-black opacity-65"
            >
              Remove all
            </h2>
          </div>

          {cartStore.length > 0 ? (
            <div className="max-h-[300px] overflow-y-auto pr-2">
              {cartItems.map(({ id, quantity }) => {
                const product = temporaryData.find((item) => item.id === id);
                if (!product) return null;

                return (
                  <div key={id} className="flex justify-between mt-[12px]">
                    <div className="flex items-center gap-4">
                      <Link href={`/selectedproducts/${id}`}>
                        <Image
                          src={product.src}
                          alt={product.title}
                          width={64}
                          height={64}
                          className="rounded-[12px]"
                        />
                      </Link>
                      <div>
                        <p className="font-bold">
                          {product.title.split(" ")[0]}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${product.price} x {quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                      <div className="w-[100px] h-[40px] bg-[#F1F1F1] px-[15px] flex items-center justify-between">
                        <button
                          onClick={() => decrementQuantity(id)}
                          className="text-black text-lg font-bold cursor-pointer"
                        >
                          –
                        </button>
                        <span className="font-medium">{quantity}</span>
                        <button
                          onClick={() => incrementQuantity(id)}
                          className="text-black text-lg font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              No product yet
            </div>
          )}
        </div>

        <div>
          <div className="w-full flex justify-between   mt-[20px]">
            <span className="text-[15px] text-black opacity-65 font-semibold tracking-widest">
              TOTAL
            </span>
            <h3 className="text-black font-bold text-[16px]">
              ${totalPrice.toFixed(2)}
            </h3>
          </div>
          <button className="bg-[#D87D4A] mt-[24px] w-full h-[48px] text-white tracking-widest font-semibold">
            CHECKOUT
          </button>
        </div>
      </Box>
    </Popover>
  );
}

export default Cart;
