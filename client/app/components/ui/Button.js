import React from "react";

const base =
  "inline-flex items-center justify-center font-semibold rounded-xl transition focus:outline-none focus:ring-2 focus:ring-white/15 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "bg-white/10 text-white hover:bg-white/15",
  outline: "border border-white/10 bg-transparent text-white hover:bg-white/10",
  ghost: "text-white hover:bg-white/10",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
