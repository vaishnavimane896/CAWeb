import React from "react";

export function Button({
  children,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        px-5 py-2.5
        text-sm font-medium
        transition-all duration-200
        focus:outline-none
        focus:ring-2 focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}