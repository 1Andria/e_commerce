import React from "react";
import CompanyName from "../../../common/images/audiophile.png";
import Cart from "../../../common/images/cart.png";
import Image from "next/image";
import Navigation from "../../__atoms/Navigation/Navigation";

function Header() {
  return (
    <>
      <div className="mx-auto max-w-[1110px] w-full  border-b-[1px] border-b-[#484848] flex py-[36px] justify-between">
        <Image src={CompanyName} alt="audiophile" width={143} height={25} />
        <Navigation />
        <Image alt="cart" src={Cart} width={30} height={20} />
      </div>
    </>
  );
}

export default Header;
