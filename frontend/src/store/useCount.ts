import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICountState {
  count: number;
  setCount: () => void;
  addCount: (number: number) => void;
}

// const useCount = create<ICountState>((set) => ({
//   count: 0,
//   setCount: () =>
//     set((state) => ({
//       //if gamiton nimo ang state
//       count: state.count + 1, // 1
//     })),
//   addCount: (number: number) => set({ count: number }), //
// }));
const useCount = create(
  persist<ICountState>(
    (set) => ({
      count: 0,
      setCount: () =>
        set((state) => ({
          count: state.count + 1,
        })),
      addCount: (number: number) => set({ count: number }),
    }),
    {
      name: "count",
    }
  )
);

export default useCount;
