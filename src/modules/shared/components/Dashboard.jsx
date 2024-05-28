import { Outlet, useLocation } from "react-router-dom";
import { FaUserCircle, FaHome, FaCog, FaUser, FaQuestion } from 'react-icons/fa';

export default function App({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-gray-100 flex justify-between items-center px-6 py-4">
        <div className="text-xl font-semibold">Nombre de Usuario</div>
        <div>
          <FaUserCircle size={24} className="text-white" />
        </div>
      </header>
      <div className="flex-1 p-6 bg-gray-100 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Outlet />
          { children }
        </div>
      </div>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-gray-100">
        <ul className="flex justify-around p-4">
          <li>
            <a href="#" className={`text-white ${location.pathname === '/' ? 'text-gray-300' : 'hover:text-gray-300'}`}>
              <FaHome size={24} />
            </a>
          </li>
          <li>
            <a href="#" className={`text-white ${location.pathname === '/settings' ? 'text-blue-300' : 'hover:text-gray-300'}`}>
              <FaCog size={24} />
            </a>
          </li>
          <li>
            <a href="#" className={`text-white ${location.pathname === '/profile' ? 'text-blue-300' : 'hover:text-gray-300'}`}>
              <FaUser size={24} />
            </a>
          </li>
          <li>
            <a href="#" className={`text-white ${location.pathname === '/help' ? 'text-blue-300' : 'hover:text-gray-300'}`}>
              <FaQuestion size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
