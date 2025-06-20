"use client";
import React from "react";
import CompanyName from "../../../common/images/audiophile.png";
import Image from "next/image";
import Navigation from "../../__atoms/Navigation/Navigation";
import Fb_icon from "../../../common/images/fb_icon.png";
import Twit_icon from "../../../common/images/twit_icon.png";
import Insta_icon from "../../../common/images/insta_icon.png";
import { usePathname } from "next/navigation";

function Footer() {
  const path = usePathname();
  return (
    <>
      <div
        className={`w-full bg-black h-[315px] ${
          path !== "/checkout" ? "mt-[200px]" : "mt-0"
        } ${
          path === "/" || path === "/login" || path === "/register"
            ? "hidden"
            : ""
        }`}
      >
        <div className="max-w-[1110px] w-full h-[100%] mx-auto relative pb-[48px]">
          <div className="w-[101px] h-[5px] bg-[#D87D4A] absolute top-0 left-0"></div>
          <div className="w-full flex justify-between  pt-[70px] ">
            <Image src={CompanyName} alt="audiophile" width={143} height={25} />
            <Navigation />
          </div>
          <div className="flex justify-between mt-[30px] items-center">
            <div className="flex flex-col h-full gap-[50px] ">
              <div className="w-[500px] text-white opacity-[0.6]">
                <p>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We&apos;re a small team of music lovers and sound specialists
                  who are devoted to helping you get the most out of personal
                  audio. Come and visit our demo facility – we&apos;re open 7
                  days a week.
                </p>
              </div>
              <p className="text-white opacity-[0.6]">
                Copyright 2021. All Rights Reserved
              </p>
            </div>
            <div className="flex gap-[16px]">
              <Image src={Fb_icon} alt="facebook" />
              <Image src={Twit_icon} alt="Twitter" />
              <Image src={Insta_icon} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
