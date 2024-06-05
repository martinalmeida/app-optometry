import { createBrowserRouter } from "react-router-dom";
import routerAuth from "../modules/auth/router";
import routerHome from "../modules/home/router";
import routerPatient from "../modules/patients/router";
import routerHistory from "../modules/history/router";
import routerMounts from "../modules/mounts/router";
import routerBalance from "../modules/balance/router";
import Error404 from "../modules/shared/views/Error404.jsx";

const router = createBrowserRouter([
  ...routerAuth,
  ...routerHome,
  ...routerPatient,
  ...routerHistory,
  ...routerMounts,
  ...routerBalance,
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
