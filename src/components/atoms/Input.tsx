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
      className="border  placeholder:text-gray-400 border-gray-400 !px-4 !py-2 rounded-md   focus:outline-none ds-text-black
    focus:ring-2
    focus:ring-violet-400
    focus:border-violet-500"
    />
  );
}
