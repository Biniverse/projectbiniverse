import { create } from "zustand";
import { ISignInUser } from "../shared/interface";
import { persist } from "zustand/middleware";
import { ROLES } from "../shared/enum";

interface IUserState {
  user: ISignInUser;
  token: string;
  isAuthenticated: boolean;
  setUser: (user: ISignInUser, isAuthenticated: boolean, token: string) => void;
}

export const useUserStore = create(
  persist<IUserState>(
    (set) => ({
      isAuthenticated: false,
      user: {
        contact: "",
        email: "",
        employeeId: 0,
        firstName: "",
        lastName: "",
        role: ROLES.EMPLOYEE,
      },
      token: "",
      setUser: (user: ISignInUser, isAuthenticated: boolean, token: string) =>
        set({
          ...user,
          isAuthenticated: isAuthenticated,
          token: token,
        }),
    }),
    {
      name: "user",
    }
  )
);
