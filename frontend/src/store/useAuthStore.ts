import { create } from "zustand";
import { IUser } from "../shared/interface";
import { ROLES } from "../shared/enum";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
  isAuthenticated: boolean;
  token: string;
  user: IUser;
  login: (isAuthenticated: boolean, token: string, user: IUser) => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      isAuthenticated: false,
      token: "",
      user: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        role: ROLES.EMPLOYEE,
        employeeId: 0,
      },
      login: (isAuthenticated, token, user) =>
        set(() => ({
          isAuthenticated,
          token,
          user,
        })),
      logout: () =>
        set(() => ({
          isAuthenticated: false,
          token: "",
          user: {
            _id: "",
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            role: ROLES.EMPLOYEE,
            employeeId: 0,
          },
        })),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
