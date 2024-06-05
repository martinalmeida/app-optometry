import { Outlet } from "react-router-dom";
import optica from "../../../static/optica.png";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-gray-100 to-indigo-100">
      <div className="bg-white py-5 px-8 border-t-4 border-indigo-700 rounded-md shadow-lg mx-4 sm:mx-6 md:mx-0">
        <h2 className="text-3xl text-gray-400 mb-3 text-center">
          Inicio de Sesión
        </h2>
        <img
          src={optica}
          alt="Optica"
          className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 mx-auto mb-3"
        />
        <Outlet />
      </div>
    </div>
  );
}
