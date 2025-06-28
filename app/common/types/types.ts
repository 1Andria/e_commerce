//types

import { StaticImageData } from "next/image";

import { InputHTMLAttributes } from "react";

export type FormFieldProps = {
  label: string;
  id: string;
  type?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type CartItem = {
  id: string;
  quantity: number;
};

export type ShowCartType = {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
};

export type CartStore = {
  cart: CartItem[];
  addToCart: (id: string, quantity: number) => void;
  removeAll: () => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
};

export type NavTypes = {
  ImageSrc: StaticImageData;
  category: string;
};

export type ProductType = {
  id: string;
  isNew: boolean;
  category: string;
  src: StaticImageData;
  title: string;
  description: string;
  features: string;
  additionalImages: StaticImageData[];
  price: number;
  inTheBox: { item: string; quantity: number }[];
  createdAt: Date;
};
