import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";

import { NotFound } from "../shared/components/NotFound";
import { ROUTES } from "../shared/enum";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
