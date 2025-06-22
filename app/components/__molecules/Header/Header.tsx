"use client";
import React, { useRef } from "react";
import CompanyName from "../../../common/images/audiophile.png";
import CartImage from "../../../common/images/cart.png";
import Image from "next/image";
import Navigation from "../../__atoms/Navigation/Navigation";
import Cart from "../Cart/Cart";
import { useCartShow } from "@/app/common/store/store";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const showCart = useCartShow((state) => state.showCart);
  const setShowCart = useCartShow((state) => state.setShowCart);
  const cartIconRef = useRef<HTMLImageElement>(null);

  return (
    <div className="mx-auto max-w-[1110px] w-full border-b-[1px] border-b-[#484848] flex py-[36px] justify-between px-[20px]">
      <div className="flex items-center gap-[20px]">
        <BurgerMenu />
        <Image
          src={CompanyName}
          alt="audiophile"
          width={143}
          height={25}
          className="cursor-pointer"
          onClick={() => location.reload()}
        />
      </div>
      <Navigation />
      <Image
        ref={cartIconRef}
        onClick={() => setShowCart(true)}
        alt="cart"
        src={CartImage}
        width={30}
        height={20}
        className="cursor-pointer"
      />
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>
      )}

      <Cart anchorRef={cartIconRef} />
    </div>
  );
}

export default Header;
