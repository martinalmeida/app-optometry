import { Navigate } from "react-router-dom";
import LayoutHistory from "../layout/LayoutHistory.jsx";
import HomeView from "../views/HomeView.jsx";

const routerHistory = [
  {
    path: "history",
    element: <LayoutHistory />,
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

export default routerHistory;
