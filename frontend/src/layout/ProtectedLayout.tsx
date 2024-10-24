import { Navigate, Outlet } from "react-router-dom";
import DrawerComponent from "../components/Sidebar";
import { CardComponent } from "../shared/components/CardNav";
import { ROUTES } from "../shared/enum";
import useAuthStore from "../store/useAuthStore";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuthStore();

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
