import { Navigate } from "react-router-dom";
import { Signin } from "../components/SignIn";
import useAuthStore from "../store/useAuthStore";
import { ROUTES } from "../shared/enum";

export const SIGNIN = () => {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) return <Navigate to={ROUTES.DASHBOARD} />;

  return <Signin />;
};
