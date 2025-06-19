import { create } from "zustand";
import { CartStore } from "../types/types";

export const quantityReducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 1 ? state - 1 : 1;
    case "RESET":
      return 1;
    default:
      return state;
  }
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (id, quantity) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { id, quantity }],
        };
      }
    }),
}));
