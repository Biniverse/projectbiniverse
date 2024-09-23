import { useNavigate as useHandleNavigate } from "react-router-dom";
import { ROUTES } from "../shared/enum";

export const useNavigate = () => {
  const navigateRoute = useHandleNavigate();

  const navigate = (route: ROUTES) => {
    navigateRoute(route);
  };

  return { navigate };
};
