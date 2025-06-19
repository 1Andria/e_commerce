import { create } from "zustand";
import { CartStore } from "../types/types";
interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,

  register: (email, password) => {
    set({ user: { email, password } });
  },

  login: (email, password) => {
    const user = get().user;
    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false;
  },

  logout: () => {
    set({ user: null });
  },
}));

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
