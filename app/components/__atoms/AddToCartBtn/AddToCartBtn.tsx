"use client";
import React from "react";

export type AddToCartBtnTypes = {
  quantity: number;
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
      }
    ]
  >;
};

function AddToCartBtn({ quantity, dispatch }: AddToCartBtnTypes) {
  return (
    <>
      <div className="flex space-x-4 items-center">
        <div className="w-[120px] h-[48px] bg-[#F1F1F1] px-[15px] flex items-center justify-between">
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="text-black text-lg font-bold cursor-pointer"
          >
            –
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="text-black text-lg font-bold cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCartBtn;
