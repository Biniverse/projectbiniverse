import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";

import { NotFound } from "../shared/components/NotFound";
import { ROUTES } from "../shared/enum";
import { About } from "../page/About";
import { UserListComponent } from "../components/UserList/UserList";
import { Dashboard } from "../page/Dashboard";
import { SignUp } from "../components/SignUp/SignUp";

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
    element: <UserListComponent />,
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
]);
