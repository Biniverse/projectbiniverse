import { Navigate, Outlet } from "react-router-dom";
import DrawerComponent from "../components/Sidebar";
import { CardComponent } from "../shared/components/CardNav";
import { ROUTES } from "../shared/enum";

const ProtectedLayout = () => {
  // TODO add authentication to access this layout only when user is logged in
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to={ROUTES.SIGNIN} />;
  return (
    <CardComponent>
      <DrawerComponent />
      <Outlet />
      {/* TODO add Footer here */}
    </CardComponent>
  );
};

export default ProtectedLayout;
