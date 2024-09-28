import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IGlobalState {
  loading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useGlobalStore = create<IGlobalState>((set) => ({
  loading: false,
  setIsLoading: (loading: boolean) => set({ loading }),
}));
export default useGlobalStore;
