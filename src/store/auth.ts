import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthStore = {
  user: null | User;
  login: (payload: User, token: string) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      login: (payload: User, token: string) => {
        set(() => ({ user: payload }));
        localStorage.setItem("accessToken", token);
      },

      logout: () => {
        set(() => ({ user: null }));
        localStorage.removeItem("accessToken");
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
