import { Navigate } from "react-router-dom";
import LayoutPatient from "../layout/LayoutPatient.jsx";
import HomeView from "../views/HomeView.jsx";

const routerPatient = [
  {
    path: "patients",
    element: <LayoutPatient />,
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

export default routerPatient;
