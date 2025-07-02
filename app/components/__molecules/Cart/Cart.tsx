"use client";

import { Popover, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/app/common/lib/axios-instance";
import { useCartShow } from "@/app/common/store/store";

type Props = {
  anchorRef: React.RefObject<HTMLImageElement | null>;
};

type SelectedProduct = {
  product: string;
  quantity: number;
};

type Product = {
  _id: string;
  title: string;
  price: number;
  src: string;
};

function Cart({ anchorRef }: Props) {
  const showCart = useCartShow((state) => state.showCart);
  const setShowCart = useCartShow((state) => state.setShowCart);

  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      const token = getCookie("token");
      if (!token) {
        setSelectedProducts([]);
        setProducts([]);
        setIsLoading(false);
        return;
      }

      try {
        const userResp = await axiosInstance.get("/auth/current-user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = userResp.data;
        const selected = user.selectedProducts || [];

        setSelectedProducts(selected);

        const productPromises = selected.map((item: SelectedProduct) =>
          axiosInstance.get(`/products/${item.product}`)
        );

        const productResponses = await Promise.all(productPromises);
        const productData: Product[] = productResponses.map((res) => res.data);
        setProducts(productData);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (showCart) fetchCart();
  }, [showCart]);

  const totalPrice = selectedProducts.reduce((acc, item) => {
    const product = products.find((p) => p._id === item.product);
    if (!product) return acc;
    return acc + product.price * item.quantity;
  }, 0);

  const handleClearCart = async () => {
    const token = getCookie("token");
    if (!token) return;

    try {
      await axiosInstance.patch(
        "/auth/clear-cart",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedProducts([]);
      setProducts([]);
    } catch (err) {
      console.error("Failed to clear cart:", err);
      alert("Failed to clear cart");
    }
  };

  const handleQuantityChange = async (
    productId: string,
    type: "increase" | "decrease"
  ) => {
    const token = getCookie("token");
    if (!token) return;

    try {
      const endpoint =
        type === "increase" ? "/auth/cart/increase" : "/auth/cart/decrease";

      await axiosInstance.patch(
        endpoint,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedUser = await axiosInstance.get("/auth/current-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSelectedProducts(updatedUser.data.selectedProducts);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  return (
    <Popover
      open={showCart}
      anchorEl={anchorRef.current}
      onClose={() => setShowCart(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: { zIndex: 50 },
      }}
    >
      <Box className="w-[360px] h-[510px] bg-white shadow-md rounded-lg px-[33px] pt-[33px] pb-[20px] flex flex-col justify-between ">
        <div>
          <div className="w-full flex justify-between mb-4">
            <h2 className="font-bold text-[18px] tracking-widest">
              CART ({selectedProducts.length})
            </h2>
            <h2
              className="underline cursor-pointer text-black opacity-65"
              onClick={handleClearCart}
            >
              Remove all
            </h2>
          </div>

          {isLoading ? (
            <div className="w-full text-center mt-10">Loading cart...</div>
          ) : selectedProducts.length > 0 ? (
            <div className="max-h-[300px] overflow-y-auto pr-2">
              {selectedProducts.map(({ product: id, quantity }) => {
                const product = products.find((p) => p._id === id);
                if (!product) return null;

                return (
                  <div key={id} className="flex justify-between mt-[12px]">
                    <Link
                      href={`/selectedproducts/${id}`}
                      className="flex items-center gap-4"
                    >
                      <Image
                        src={product.src}
                        alt={product.title}
                        width={64}
                        height={64}
                        className="rounded-[12px]"
                      />
                      <div>
                        <p className="font-bold">
                          {product.title.split(" ")[0]}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${product.price} x {quantity}
                        </p>
                      </div>
                    </Link>

                    <div className="w-[100px] h-[40px] bg-[#F1F1F1] px-[15px] flex items-center justify-between">
                      <button
                        onClick={() =>
                          handleQuantityChange(product._id, "decrease")
                        }
                        className="font-bold cursor-pointer"
                      >
                        –
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(product._id, "increase")
                        }
                        className="font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              No product yet
            </div>
          )}
        </div>

        <div>
          <div className="w-full flex justify-between mt-[20px]">
            <span className="text-[15px] text-black opacity-65 font-semibold tracking-widest">
              TOTAL
            </span>
            <h3 className="text-black font-bold text-[16px]">
              ${totalPrice.toFixed(2)}
            </h3>
          </div>
          <button
            onClick={() => {
              setShowCart(false);
              const token = getCookie("token");

              if (!token) {
                router.push("/login");
              } else {
                router.push("/checkout");
              }
            }}
            className="bg-[#D87D4A] cursor-pointer hover:opacity-65 mt-[24px] w-full h-[48px] text-white tracking-widest font-semibold"
          >
            CHECKOUT
          </button>
        </div>
      </Box>
    </Popover>
  );
}

export default Cart;
