"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import { quantityReducer, useCartCount } from "@/app/common/store/store";
import AllNavigator from "../../__molecules/AllNavigator/AllNavigator";
import CommercialCompany from "../../__molecules/CommercialCompany/CommercialCompany";
import { ProductType } from "@/app/common/types/types";
import AddToCartBtn from "../../__atoms/AddToCartBtn/AddToCartBtn";
import { axiosInstance } from "@/app/common/lib/axios-instance";
import { deleteCookie, getCookie } from "cookies-next";
import { AxiosError } from "axios";

function SelectedProductBody() {
  const path = useParams();
  const [quantity, dispatch] = useReducer(quantityReducer, 1);
  const [suggested, setSuggested] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType | null>(null);
  const setCartCount = useCartCount((state) => state.setCartCount);

  const router = useRouter();

  const getTheProduct = async () => {
    try {
      const resp = await axiosInstance.get(`/products/${path.id}`);
      console.log("Fetched product:", resp.data);

      if (resp.status === 200) {
        setProduct(resp.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (path.id) getTheProduct();
  }, [path.id]);

  useEffect(() => {
    const fetchSuggested = async () => {
      try {
        const res = await axiosInstance.get("/products");
        const allProducts = res.data;

        const randomThree = allProducts
          .filter((item: ProductType) => item._id !== product?._id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        setSuggested(randomThree);
      } catch (error) {
        console.error("Error fetching suggested products:", error);
      }
    };

    if (product) fetchSuggested();
  }, [product]);

  let isNew = false;

  if (product?.createdAt) {
    const productDate = new Date(product.createdAt);
    const now = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);

    isNew = productDate >= oneMonthAgo;
  }

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        Loading product...
      </div>
    );
  }

  const handleAddToCart = async () => {
    const token = getCookie("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const userResp = await axiosInstance.get("/auth/current-user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = userResp.data;

      await axiosInstance.post(
        "/products/select-product",
        {
          userId: user._id,
          productId: product._id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedUser = await axiosInstance.get("/auth/current-user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const selected = updatedUser.data.selectedProducts || [];
      const totalQuantity = selected.reduce(
        (acc: number, item: { quantity: number }) => acc + item.quantity,
        0
      );

      setCartCount(totalQuantity);
    } catch (e) {
      const error = e as AxiosError;

      console.error(error);
      if (error.response?.status === 401) {
        deleteCookie("token");
        router.push("login");
      }
    }
  };

  return (
    <div className="max-w-[1110px] mx-auto flex-col px-[20px]">
      <Link
        href={"/home"}
        className="opacity-[0.8] mt-[80px] inline-block hover:underline mb-[50px]"
      >
        Go back
      </Link>

      <div className="flex justify-between items-center gap-10 max-[890px]:flex-col ">
        <div className="max-w-[540px] w-full h-[560px] relative">
          <Image
            src={product.src}
            alt={product.category || "product"}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-6 max-w-[500px] max-[890px]:items-center">
          {isNew && (
            <h3 className="text-[#D87D4A] tracking-widest max-[890px]:text-center uppercase text-[14px]">
              N e w <span className="ml-[10px]">P r o d u c t</span>
            </h3>
          )}
          <h1 className="text-[40px] w-[300px] text-black font-bold leading-tight max-[890px]:text-center">
            {product.title}
          </h1>
          <p className="text-[15px] w-[400px] opacity-[0.6] max-[890px]:text-center">
            {product.description}
          </p>
          <h3 className="font-bold text-[18px] max-[890px]:text-center">
            ${product.price}
          </h3>

          <div className="flex gap-[20px] max-[890px]:justify-center">
            <AddToCartBtn dispatch={dispatch} quantity={quantity} />

            <button
              onClick={handleAddToCart}
              className="bg-[#D87D4A] cursor-pointer text-white px-6 py-3 uppercase text-sm font-bold tracking-wider hover:bg-[#FBAF85] transition"
            >
              Add to cart
            </button>
          </div>

          <p className="mt-2 text-[14px] text-gray-500 max-[890px]:text-center">
            Total:{" "}
            <span className="font-bold">${product.price * quantity}</span>
          </p>
        </div>
      </div>

      <div className="flex w-full mt-[60px] justify-between pr-[150px] max-[890px]:flex-col max-[890px]:items-center max-[890px]:pr-0">
        <div className="flex w-[400px] flex-col">
          <h2 className="text-2xl font-bold mb-6 max-[890px]:text-center">
            FEATURES
          </h2>
          <p className="text-[15px] opacity-60 whitespace-pre-line max-[890px]:text-center">
            {product.features}
          </p>
        </div>

        <div className="flex flex-col max-[890px]:mt-[40px]">
          <h2 className="text-2xl font-bold mb-6">IN THE BOX</h2>
          <ul className="space-y-2">
            {product.inTheBox.map((boxItem, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-[#D87D4A] font-bold">
                  {boxItem.quantity}x
                </span>
                <span className="opacity-60">{boxItem.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full mb-[160px] max-[890px]:items-center mt-[160px] max-[890px]:mt-[70px] max-[890px]:mb-[70px] flex gap-[30px] max-[890px]:flex-col">
        <div className="flex flex-col gap-[32px] max-[890px]:w-full max-[890px]:items-center">
          <div className=" max-w-[445px] w-full min-[890px]:w-[445px] relative h-[280px] ">
            <Image
              src={product.additionalImages[0]}
              alt="gallery-1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="max-w-[445px] w-full relative h-[280px] ">
            <Image
              src={product.additionalImages[1]}
              alt="gallery-2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="relative w-full h-full min-h-[592px] max-[890px]:max-w-[445px] max-[890px]:min-h-[280px]">
          <Image
            src={product.additionalImages[2]}
            alt="gallery-3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-12 mb-[160px]">
        <h2 className="text-black text-[32px] font-bold text-center">
          YOU MAY ALSO LIKE
        </h2>
        <div className="flex justify-between  flex-wrap w-full">
          {suggested.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center max-w-[320px] mx-auto"
            >
              <div className="w-[320px] h-[318px] relative rounded-lg mb-6">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-black font-semibold text-[24px] mb-4 text-center">
                {item.title}
              </h3>
              <Link
                href={`/selectedproducts/${item._id}`}
                className="w-[160px] flex justify-center items-center h-[48px] bg-[#D87D4A] text-white font-semibold hover:opacity-80 transition"
              >
                SEE PRODUCT
              </Link>
            </div>
          ))}
        </div>
      </div>

      <AllNavigator />
      <CommercialCompany />
    </div>
  );
}

export default SelectedProductBody;
