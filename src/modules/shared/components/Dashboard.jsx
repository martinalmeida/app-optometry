import { useEffect, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import {
  FaUserCircle,
  FaHome,
  FaCog,
  FaUser,
  FaQuestion,
} from "react-icons/fa";

export default function App({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );

  useEffect(() => {
    document.title = "OptometryApp - Inicio";
    if (window.localStorage.getItem("tokenJwt") === null) {
      navigate("/");
    }
    return () => {
      document.title = "OptometryApp";
    };
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-indigo-500 text-gray-100 flex justify-between items-center px-6 py-4">
        <div className="text-xl font-semibold">{user.name}</div>
        <div>
          <FaUserCircle size={24} className="text-white" />
        </div>
      </header>
      <div className="flex-1 p-6 bg-gradient-to-br from-indigo-100 via-gray-100 to-indigo-100 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Outlet />
          {children}
        </div>
      </div>
      <nav className="fixed bottom-0 left-0 w-full bg-indigo-500 text-gray-100">
        <ul className="flex justify-around p-4">
          <li>
            <Link to="/home" className="text-white hover:text-indigo-800">
              <FaHome size={24} />
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-indigo-800">
              <FaCog size={24} />
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-indigo-800">
              <FaUser size={24} />
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-indigo-800">
              <FaQuestion size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
