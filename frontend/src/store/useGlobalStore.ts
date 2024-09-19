import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IGlobalState {
  loading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useGlobalStore = create(
  persist<IGlobalState>(
    (set) => ({
      loading: true,
      setIsLoading: (loading: boolean) => set({ loading }),
    }),
    {
      name: "basic-api-response",
    }
  )
);
export default useGlobalStore;
