export default function InputBase({ label, type, placeholder, name }) {
  return (
    <div className="mb-2">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        className="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
      />
    </div>
  );
}
