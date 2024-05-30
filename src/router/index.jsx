import { createBrowserRouter } from "react-router-dom";
import routerAuth from "../modules/auth/router";
import routerHome from "../modules/home/router";
import Error404 from "../modules/shared/views/Error404.jsx";

const router = createBrowserRouter([
  ...routerAuth,
  ...routerHome,
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
