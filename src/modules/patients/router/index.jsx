import { Navigate } from "react-router-dom";
import LayoutPatient from "../layout/LayoutPatient.jsx";
import HomeView from "../views/HomeView.jsx";
import SearchView from "../views/SearchView.jsx";
import CreateView from "../views/CreateView.jsx";

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
      {
        path: "busqueda",
        element: <SearchView />,
      },
      {
        path: "create",
        element: <CreateView />,
      },
    ],
  },
];

export default routerPatient;
