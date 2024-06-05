import { FaSearch } from "react-icons/fa";

export default function BtnBase({
  children,
  onClickFunction,
  type,
  customClass = "",
}) {
  let className = "";

  if (type === "login") {
    className = `flex items-center justify-center border-none bg-indigo-800 py-2 px-3 text-white rounded-sm w-full mt-2 rounded-md hover:bg-indigo-700 mb-5 ${customClass}`;

    return (
      <button onClick={onClickFunction} className={className} type="submit">
        {children}
      </button>
    );
  }
  if (type === "search") {
    className = `flex items-center justify-center border-none bg-teal-600 py-2 px-3 text-white rounded-xl w-full mt-2 rounded-md hover:bg-teal-700 mb-5 ${customClass}`;

    return (
      <button onClick={onClickFunction} className={className} type="submit">
        <FaSearch size={20} className="mr-2" />
        {children}
      </button>
    );
  }
}
