"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
import CompanyName from "../../../common/images/audiophile.png";
import CartImage from "../../../common/images/cart.png";
import Navigation from "../../__atoms/Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Cart from "../Cart/Cart";
import { useCartCount, useCartShow } from "@/app/common/store/store";
import { axiosInstance } from "@/app/common/lib/axios-instance";

function Header() {
  const cartRef = useRef<HTMLImageElement>(null);
  const router = useRouter();

  const showCart = useCartShow((state) => state.showCart);
  const setShowCart = useCartShow((state) => state.setShowCart);
  const cartCount = useCartCount((state) => state.cartCount);
  const setCartCount = useCartCount((state) => state.setCartCount);

  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsUser(!!token);
  }, []);

  useEffect(() => {
    const fetchCartInfo = async () => {
      const token = getCookie("token");
      if (!token) return;

      try {
        const { data } = await axiosInstance.get("/auth/current-user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIsAdmin(data.role === "admin");

        const totalQuantity = (data.selectedProducts || []).reduce(
          (acc: number, item: { quantity: number }) => acc + item.quantity,
          0
        );

        setCartCount(totalQuantity);
      } catch (err) {
        console.error("Failed to fetch cart info:", err);
      }
    };

    fetchCartInfo();
  }, [showCart]);

  const handleSignOut = () => {
    deleteCookie("token");
    setIsUser(false);
    router.refresh();
  };

  const handleSignIn = () => {
    router.push("/login");
  };

  return (
    <header className="mx-auto max-w-[1110px] w-full border-b border-[#484848] flex justify-between items-center py-6 px-5 relative">
      <div className="flex items-center gap-6">
        <BurgerMenu isAdmin={isAdmin} />
        <Image
          src={CompanyName}
          alt="audiophile"
          width={143}
          height={25}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <Navigation isAdmin={isAdmin} />

      <div className="flex items-center gap-6">
        <div className="relative">
          <Image
            ref={cartRef}
            src={CartImage}
            alt="Cart"
            width={28}
            height={28}
            onClick={() => setShowCart(true)}
            className="cursor-pointer"
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>

        {isUser ? (
          <button
            onClick={handleSignOut}
            className="px-4 py-1 rounded cursor-pointer border border-red-600 text-red-600 text-sm hover:border-red-700 transition"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-4 py-1 rounded-md border cursor-pointer border-blue-600 text-blue-600 text-sm hover:border-blue-700 transition"
          >
            Sign In
          </button>
        )}
      </div>

      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>
      )}

      <Cart anchorRef={cartRef} />
    </header>
  );
}

export default Header;
