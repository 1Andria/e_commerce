//zustand
import { create } from "zustand";

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
