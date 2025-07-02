import { create } from "zustand";
import { CartStore, ShowCartType } from "../types/types";
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
  removeAll: () => set({ cart: [] }),
  incrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

type CartState = {
  cartCount: number;
  setCartCount: (count: number) => void;
};

export const useCartCount = create<CartState>((set) => ({
  cartCount: 0,
  setCartCount: (count) => set({ cartCount: count }),
}));

export const useCartShow = create<ShowCartType>((set) => ({
  showCart: false,
  setShowCart: (value) => set(() => ({ showCart: value })),
}));
