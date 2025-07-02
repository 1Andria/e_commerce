import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export type IsAdminProp = {
  isAdmin: boolean;
};

function Navigation({ isAdmin }: IsAdminProp) {
  const pathname = usePathname();

  return (
    <ul className="flex gap-[30px] text-[14px] text-white max-[740px]:hidden">
      {(
        [
          { href: "/home", label: "HOME" },
          { href: "/headphones", label: "HEADPHONES" },
          { href: "/speakers", label: "SPEAKERS" },
          { href: "/earphones", label: "EARPHONES" },
          isAdmin && { href: "/adminpanel", label: "ADMINPANEL" },
        ].filter(Boolean) as { href: string; label: string }[]
      ).map(({ href, label }) => (
        <li key={href} className="relative">
          <Link href={href}>
            <span
              className={`relative hover:text-[#D87D4A] hover:opacity-65 cursor-pointer after:content-[''] after:absolute after:bottom-[-4px] after:left-[50%] after:translate-x-[-50%] after:h-[2px] after:bg-[#D87D4A] after:transition-all after:duration-300 ${
                pathname === href
                  ? "after:w-full text-[#D87D4A]"
                  : "after:w-0 hover:after:w-full hover:after:left-[50%]"
              }`}
            >
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
