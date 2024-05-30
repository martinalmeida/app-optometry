import React from "react";

export default function InputBase({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-2">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
      />
    </div>
  );
}
