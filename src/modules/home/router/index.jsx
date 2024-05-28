import { Navigate } from "react-router-dom";
import LayoutHome from "../layout/LayoutHome.jsx";
import HomeView from "../views/HomeView.jsx";

const routerHome = [
  {
    path: "/home",
    element: <LayoutHome />,
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

export default routerHome;
