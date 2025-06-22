"use client";
import { useRouter } from "next/navigation";
import React from "react";

export type GotoTypes = {
  goTo: string;
};

function SeeProductBtnTransparent({ goTo }: GotoTypes) {
  const Router = useRouter();
  function seeProduct() {
    Router.push(goTo);
  }
  return (
    <>
      <button
        onClick={seeProduct}
        className="bg-transparent cursor-pointer hover:opacity-75 w-[160px] h-[48px] border-[2px] border-black text-black"
      >
        SEE PRODUCT
      </button>
    </>
  );
}

export default SeeProductBtnTransparent;
