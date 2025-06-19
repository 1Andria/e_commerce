import React from "react";
import CompanyName from "../../../common/images/audiophile.png";
import Cart from "../../../common/images/cart.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="mx-auto max-w-[1110px] w-full  border-b-[1px] border-b-[#484848] flex py-[36px] justify-between">
        <Image src={CompanyName} alt="audiophile" width={143} height={25} />
        <ul className="flex gap-[30px] text-[14px] text-white">
          <Link href={"/home"} className="hover:opacity-[0.7] cursor-pointer">
            HOME
          </Link>
          <Link
            href={"/headphones"}
            className="hover:opacity-[0.7] cursor-pointer"
          >
            HEADPHONES
          </Link>
          <Link
            href={"/speakers"}
            className="hover:opacity-[0.7] cursor-pointer"
          >
            SPEAKERS
          </Link>
          <Link
            href={"/earphones"}
            className="hover:opacity-[0.7] cursor-pointer"
          >
            EARPHONES
          </Link>
        </ul>
        <Image alt="cart" src={Cart} width={30} height={20} />
      </div>
    </>
  );
}

export default Header;
