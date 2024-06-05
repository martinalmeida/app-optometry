import { Navigate } from "react-router-dom";
import LayoutBalance from "../layout/LayoutBalance.jsx";
import HomeView from "../views/HomeView.jsx";

const routerBalance = [
  {
    path: "balance",
    element: <LayoutBalance />,
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

export default routerBalance;
