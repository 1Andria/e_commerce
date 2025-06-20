import Link from "next/link";
import React from "react";
import CheckoutForm from "../../__molecules/CheckoutForm/CheckoutForm";
import CheckoutSummary from "../../__molecules/CheckoutSummary/CheckoutSummary";

function CheckoutBody() {
  return (
    <>
      <div className="w-full bg-[#f1f1f1] pb-[140px] ">
        <div className="max-w-[1110px] mx-auto flex flex-col">
          <Link
            href={"/home"}
            className="opacity-[0.8] mt-[80px] inline-block hover:underline mb-[50px]"
          >
            Go back
          </Link>
          <div className="flex  justify-between">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutBody;
