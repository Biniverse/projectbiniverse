import React, { PropsWithChildren } from "react";
import { CardComponent } from "../shared/components/CardNav";
import DrawerComponent from "../components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../shared/enum";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

const ProtectedLayout = () => {
  // TODO add authentication to access this layout only when user is logged in
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to={ROUTES.HOME} />;
  return (
    <CardComponent>
      <DrawerComponent />
      <Outlet />
      {/* TODO add Footer here */}
    </CardComponent>
  );
};

export default ProtectedLayout;
