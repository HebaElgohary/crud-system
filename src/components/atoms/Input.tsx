import React from "react";

export default function Input({
  name,
  id,
  type,
  placeholder,
}: {
  name: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="border border-gray-400 !px-4 !py-2 rounded-md   focus:outline-none
    focus:ring-2
    focus:ring-violet-400
    focus:border-violet-500"
    />
  );
}
