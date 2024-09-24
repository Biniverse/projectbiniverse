import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";

import { NotFound } from "../shared/components/NotFound";
import { ROUTES } from "../shared/enum";
import { About } from "../page/About";
import { SignUpComponent } from "../components/Sign-Up";

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
    element: <SignUpComponent />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
