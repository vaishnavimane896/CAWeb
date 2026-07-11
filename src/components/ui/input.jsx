import React from "react";

export function Input({
  className = "",
  type = "text",
  ...props
}) {
  return (
    <input
      type={type}
      className={`
        w-full
        rounded-lg
        border border-gray-300
        bg-white
        px-4 py-2.5
        text-sm
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200
        ${className}
      `}
      {...props}
    />
  );
}