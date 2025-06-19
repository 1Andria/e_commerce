//types

import { StaticImageData } from "next/image";

export type CartItem = {
  id: string;
  quantity: number;
};

export type CartStore = {
  cart: CartItem[];
  addToCart: (id: string, quantity: number) => void;
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
