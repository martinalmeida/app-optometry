import { createBrowserRouter } from "react-router-dom";
import routerAuth from "../modules/auth/router";
import routerHome from "../modules/home/router";

const router = createBrowserRouter([
  ...routerAuth,
  ...routerHome,
]);

export default router;