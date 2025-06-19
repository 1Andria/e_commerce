import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <>
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
        <Link href={"/speakers"} className="hover:opacity-[0.7] cursor-pointer">
          SPEAKERS
        </Link>
        <Link
          href={"/earphones"}
          className="hover:opacity-[0.7] cursor-pointer"
        >
          EARPHONES
        </Link>
      </ul>
    </>
  );
}

export default Navigation;
