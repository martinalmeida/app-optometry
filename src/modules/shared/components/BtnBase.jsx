import { Link } from "react-router-dom";
import { FaSearch, FaSave } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function BtnBase({
  children,
  onClickFunction,
  type,
  customClass = "",
}) {
  let className = "";

  if (type === "login") {
    className = `flex items-center justify-center border-none bg-indigo-600 py-2 px-3 text-white rounded-sm w-full mt-2 hover:bg-indigo-700 mb-5 ${customClass}`;

    return (
      <button onClick={onClickFunction} className={className} type="submit">
        {children}
      </button>
    );
  }
  if (type === "search") {
    className = `flex items-center justify-center border-none bg-teal-600 py-2 px-3 text-white rounded-xl w-1/3 mt-2 hover:bg-teal-700 mb-5 ${customClass}`;

    return (
      <button onClick={onClickFunction} className={className} type="submit">
        <FaSearch size={20} className="mr-2" />
        {children}
      </button>
    );
  }

  if (type === "add") {
    className = `flex items-center justify-center border-none bg-indigo-600 py-2 px-3 text-white rounded-lg w-full mt-2 hover:bg-indigo-700 mb-5 ${customClass}`;

    return (
      <Link to={onClickFunction} className={className}>
        <IoMdAddCircle size={20} className="mr-2" />
        {children}
      </Link>
    );
  }

  if (type === "save") {
    className = `flex items-center justify-center border-none bg-teal-600 py-2 px-3 text-white rounded-lg w-auto mt-8 hover:bg-teal-700 mb-5 ${customClass}`;

    return (
      <button onClick={onClickFunction} className={className} type="submit">
        <FaSave size={20} className="mr-2" />
        {children}
      </button>
    );
  }

  if (type === "cancel") {
    className = `flex items-center justify-center border-none bg-indigo-600 py-2 px-3 text-white rounded-lg w-auto mt-8 hover:bg-indigo-700 mb-5 ${customClass}`;

    return (
      <Link to={onClickFunction} className={className}>
        <MdOutlineArrowBackIos size={20} className="mr-2" />
        {children}
      </Link>
    );
  }
}
