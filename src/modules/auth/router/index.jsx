import { Navigate } from "react-router-dom";
import LayoutAuth from "../layout/LayoutAuth.jsx";
import AuthView from "../views/AuthView.jsx";

const routerAuth = [
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <AuthView />,
      },
    ],
  },
];

export default routerAuth;
