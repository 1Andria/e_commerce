"use client";
import React, { useState } from "react";
import Link from "next/link";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col gap-[3px] min-[740px]:hidden cursor-pointer  relative"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[16px] h-[3px] bg-white"></div>
        <div className="w-[16px] h-[3px] bg-white"></div>
        <div className="w-[16px] h-[3px] bg-white"></div>
      </div>

      <div className="fixed inset-0 z-40 pointer-events-none">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 h-full bg-white w-[300px] transform transition-transform duration-400 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } pointer-events-auto shadow-xl px-6 pt-8`}
        >
          <h1 className="text-[30px] font-bold tracking-wider mb-[50px]">
            AUDIOPHILE
          </h1>
          <ul className="flex flex-col gap-6 text-[16px] font-semibold text-black">
            <Link
              href="/home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D87D4A]"
            >
              HOME
            </Link>
            <Link
              href="/headphones"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D87D4A]"
            >
              HEADPHONES
            </Link>
            <Link
              href="/speakers"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D87D4A]"
            >
              SPEAKERS
            </Link>
            <Link
              href="/earphones"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D87D4A]"
            >
              EARPHONES
            </Link>
            <Link
              href="/adminpanel"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D87D4A]"
            >
              ADMINPANEL
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
