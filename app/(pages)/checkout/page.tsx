import Header from "@/app/components/__molecules/Header/Header";
import CheckoutBody from "@/app/components/__organisms/CheckoutBody/CheckoutBody";
import React from "react";

function Checkout() {
  return (
    <>
      <div className="w-full bg-black">
        <Header />
      </div>
      <CheckoutBody />
    </>
  );
}

export default Checkout;
