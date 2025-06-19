import Header from "@/app/components/__molecules/Header/Header";
import SelectedProductBody from "@/app/components/__organisms/SelectedProductBody/SelectedProductBody";
import React from "react";

function SelectedProduct() {
  return (
    <>
      <div className="w-[100%] bg-black">
        <Header />
      </div>
      <SelectedProductBody />
    </>
  );
}

export default SelectedProduct;
