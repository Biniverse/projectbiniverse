import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";

import { NotFound } from "../shared/components/NotFound";
import { ROUTES } from "../shared/enum";
import { About } from "../page/About";

import { Dashboard } from "../page/Dashboard";
import { UserList } from "../page/UserList";
import { SignUp } from "../page/SignUp";
import { Signin } from "../components/SignIn";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT_US,
    element: <About />,
  },
  {
    path: ROUTES.USER_LIST,
    element: <UserList />,
  },
  {
    path: ROUTES.ADD_USER,
    element: <SignUp />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTES.SIGNIN,
    element: <Signin />,
  },
]);
