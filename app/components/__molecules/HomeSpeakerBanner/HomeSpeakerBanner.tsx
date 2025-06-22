"use client";
import React from "react";
import Image from "next/image";
import Speaker from "../../../common/images/speaker.png";
import SoundWave from "@/app/common/images/SoundWave";
import { useRouter } from "next/navigation";

function HomeSpeakerBanner() {
  const router = useRouter();

  function seeProduct() {
    router.push("/selectedproducts/zx7-speaker1");
  }
  return (
    <div className="relative max-w-[1110px] flex mx-auto h-[560px] mb-[48px] rounded-[10px] bg-[#D87D4A] overflow-hidden pr-[100px] max-[930px]:flex-col max-[930px]:pr-0 max-[930px]:h-auto max-[930px]:items-center max-[930px]:pb-[40px] max-[650px]:mx-[20px]">
      <div className="max-[930px]:hidden">
        <SoundWave />
      </div>

      <div className="w-full flex items-end pl-[100px] mb-[-30px] max-[930px]:justify-center max-[930px]:pl-[0] z-10">
        <Image width={410} height={493} src={Speaker} alt="Speaker" />
      </div>

      <div className="flex flex-col gap-[20px] pt-[80px] items-center  z-10">
        <h2 className="text-white text-[56px] tracking-widest max-[930px]:text-center font-semibold leading-[1.1]">
          ZX9 <br /> SPEAKER
        </h2>
        <h4 className="text-white opacity-[0.9] max-[930px]:text-center text-[15px] font-semibold leading-relaxed">
          Upgrade to premium speakers that are <br />
          phenomenally built to deliver truly remarkable <br /> sound.
        </h4>
        <button
          onClick={seeProduct}
          className="w-[160px] h-[48px] bg-[black] text-white cursor-pointer hover:opacity-90 transition"
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default HomeSpeakerBanner;
