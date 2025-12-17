import React from "react";

export default function Input({
  label,
  hint,
  error,
  className = "",
  inputClassName = "",
  wrapperClassName = "",
  leftIcon = null,
  rightIcon = null,
  required = false,
  ...props
}) {
  const base =
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white " +
    "placeholder:text-white/40 outline-none transition " +
    "focus:ring-2 focus:ring-white/10";

  const border = error
    ? "border-red-500/30 focus:border-red-500/40"
    : "border-white/10 focus:border-white/20";

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label ? (
        <label className="mb-2 block text-xs text-white/70">
          {label} {required ? <span className="text-white/40">*</span> : null}
        </label>
      ) : null}

      <div className={`relative ${className}`}>
        {leftIcon ? (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
            {leftIcon}
          </span>
        ) : null}

        <input
          className={`${base} ${border} ${leftIcon ? "pl-10" : ""} ${
            rightIcon ? "pr-10" : ""
          } ${inputClassName}`}
          {...props}
        />

        {rightIcon ? (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
            {rightIcon}
          </span>
        ) : null}
      </div>

      {error ? (
        <p className="mt-2 text-xs text-red-300">{error}</p>
      ) : hint ? (
        <p className="mt-2 text-xs text-white/50">{hint}</p>
      ) : null}
    </div>
  );
}
