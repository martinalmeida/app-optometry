export default function BtnBase({
  children,
  onClickFunction,
  type,
  customClass = "",
}) {
  let className = "";

  if (type === "login") {
    className = `border-none bg-indigo-800 py-2 px-3 text-white rounded-sm w-full mt-2 rounded-md hover:bg-indigo-700 mb-5 ${customClass}`;
  }

  return (
    <button onClick={onClickFunction} className={className} type="submit">
      {children}
    </button>
  );
}
