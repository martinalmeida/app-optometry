import { Navigate } from "react-router-dom";
import LayoutMount from "../layout/LayoutMount.jsx";
import HomeView from "../views/HomeView.jsx";

const routerMounts = [
  {
    path: "mounts",
    element: <LayoutMount />,
    children: [
      {
        index: true,
        element: <Navigate to="inicio" replace />,
      },
      {
        path: "inicio",
        element: <HomeView />,
      },
    ],
  },
];

export default routerMounts;
