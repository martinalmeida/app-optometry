import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-gray-100 to-indigo-100">
      <div className="bg-white py-5 px-8 border-t-4 border-indigo-700 rounded-md shadow-lg">
        <h2 className="text-3xl text-gray-400 mb-3">Inicio de Sesion</h2>
        <Outlet />
      </div>
    </div>
  );
}
