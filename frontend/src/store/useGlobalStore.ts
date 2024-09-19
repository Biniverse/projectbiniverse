import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IApiResponse {
  apiMessage: string;
  setApiMessage: (apiMessage: string) => void;
}

const useGlobalStore = create(
  persist<IApiResponse>(
    (set) => ({
      apiMessage: "",
      setApiMessage: (apiMessage: string) => set({ apiMessage }),
    }),
    {
      name: "basic-api-response",
    }
  )
);
export default useGlobalStore;
