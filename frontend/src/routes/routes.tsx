import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../shared/components/NotFound";
import { ROUTES } from "../shared/enum";
import { About } from "../page/About";

import { Dashboard } from "../page/Dashboard";
import { UserList } from "../page/UserList";
import { SignUp } from "../page/SignUp";
import { SIGNIN } from "../page/SignIn";
import ProtectedLayout from "../layout/ProtectedLayout";

export const router = createBrowserRouter([
  {
    element: <ProtectedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.USER_LIST,
        element: <UserList />,
      },
      {
        path: ROUTES.ADD_USER,
        element: <SignUp />,
      },
    ],
  },
  // PUBLIC

  {
    path: ROUTES.ABOUT_US,
    element: <About />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES.SIGNIN,
    element: <SIGNIN />,
  },
]);
