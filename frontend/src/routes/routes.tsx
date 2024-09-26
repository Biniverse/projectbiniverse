import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";

import { NotFound } from "../shared/components/NotFound";
import { ROUTES } from "../shared/enum";
import { About } from "../page/About";
import { UserListComponent } from "../components/UserList/UserList";
import { Dashboard } from "../page/Dashboard";
import { Login } from "../page/Login";

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
  // {
  //   path: ROUTES.ADD_USER,
  //   element: <AddUser />,
  // },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
]);
