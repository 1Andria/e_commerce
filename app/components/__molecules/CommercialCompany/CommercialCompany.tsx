import React from "react";
import Person from "../../../common/images/Person.png";
import Image from "next/image";
function CommercialCompany() {
  return (
    <>
      <div className="flex max-w-[1110px] px-[20px] mx-auto justify-between max-[915px]:flex-col max-[930px]:gap-[40px] items-center mt-[200px] max-[930px]:mt-[50px]">
        <div className="flex flex-col gap-[32px]">
          <h2 className="text-black text-[40px] font-bold tracking-widest">
            Bringing you the <br />{" "}
            <span className="text-[#D87D4A]">best </span>audio gear
          </h2>
          <div className="max-w-[445px]">
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div className="relative max-w-[540px] w-full h-[588px]">
          <Image
            src={Person}
            fill
            className="object-cover"
            alt="person with headphones"
          />
        </div>
      </div>
    </>
  );
}

export default CommercialCompany;
