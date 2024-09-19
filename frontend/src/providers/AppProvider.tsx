import React from "react";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import { AppLayout } from "../layout/AppLayout";

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = () => {
  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  );
};
