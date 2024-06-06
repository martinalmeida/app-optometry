import React from "react";

export default function SelectInput({ label, name, value, onChange, options }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-2">
      <label className="text-sm">{label}</label>
      <select
        id={name}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
