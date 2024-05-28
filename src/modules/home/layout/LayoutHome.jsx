import { Outlet } from "react-router-dom";
import Dashboard from "../../shared/components/Dashboard.jsx";

export default function App({ children }) {
  return (
    <Dashboard>
      <Outlet />
      {children}
    </Dashboard>
  );
}