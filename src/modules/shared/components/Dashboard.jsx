import { useEffect } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { BiSolidTachometer } from "react-icons/bi";
import { BsPeopleFill, BsFillEmojiSunglassesFill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaSearch, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Modal from "./Modal.jsx";
import { sharedLogic } from "../logic";

export default function App({ children, titulo }) {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal, outSesion } = sharedLogic();

  useEffect(() => {
    if (window.localStorage.getItem("tokenJwt") === null) {
      navigate("/");
    }
    return () => {};
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6 bg-gradient-to-br from-indigo-100 via-gray-50 to-indigo-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-indigo-800 mb-4">{titulo}</h1>
        <div className="flex-1 w-full flex items-center justify-center">
          <Outlet />
          {children}
        </div>
      </div>
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-500 text-gray-100 rounded-lg shadow-lg">
        <ul className="flex justify-around p-4">
          <li>
            <Link to="/home" className="text-white hover:text-indigo-300">
              <BiSolidTachometer size={24} />
            </Link>
          </li>
          <li>
            <Link to="/home" className="text-white hover:text-indigo-300">
              <FaSearch size={21} />
            </Link>
          </li>
          <li>
            <Link to="/patients" className="text-white hover:text-indigo-300">
              <BsPeopleFill size={24} />
            </Link>
          </li>
          <li>
            <Link to="/history" className="text-white hover:text-indigo-300">
              <MdLibraryBooks size={24} />
            </Link>
          </li>
          <li>
            <Link to="/mounts" className="text-white hover:text-indigo-300">
              <BsFillEmojiSunglassesFill size={24} />
            </Link>
          </li>
          <li>
            <Link to="/balance" className="text-white hover:text-indigo-300">
              <FaMoneyCheckDollar size={24} />
            </Link>
          </li>
          <li>
            <Link to="/home" className="text-white hover:text-indigo-300">
              <FaUserCircle size={24} />
            </Link>
          </li>
          <li>
            <a onClick={openModal} className="text-white hover:text-indigo-300">
              <FaSignOutAlt size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Cerrar Sesión"
        onAction={outSesion}
        btnText="salir de la sesión"
      >
        <p>¿Deseas cerrar la sesión?</p>
      </Modal>
    </div>
  );
}
