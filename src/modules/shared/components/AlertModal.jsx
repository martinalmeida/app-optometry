import { GoAlert } from "react-icons/go";

export default function AlertModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-6 mx-2 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center pb-2 mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="flex">
          <GoAlert color="orange" size={24} />
          {children}
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
