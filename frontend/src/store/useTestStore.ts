import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IGlobalState {
  apiResponse: string;
  setApiResponse: (apiResponse: string) => void;
}

const useTestStore = create(
  persist<IGlobalState>(
    (set) => ({
      apiResponse: "",
      setApiResponse: (apiResponse: string) => set({ apiResponse }),
    }),
    {
      name: "basic-api-response",
    }
  )
);
export default useTestStore;
