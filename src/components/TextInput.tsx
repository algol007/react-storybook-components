import React, { InputHTMLAttributes } from "react";

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled";
  helperText?: string;
  fullWidth?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error,
      size = "md",
      variant = "default",
      helperText,
      fullWidth = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    };

    const variants = {
      default:
        "bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500",
      filled:
        "bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-blue-500",
    };

    const baseInputStyles = `
      block
      rounded-md
      border
      shadow-sm
      transition-colors
      duration-200
      disabled:opacity-50
      disabled:cursor-not-allowed
      focus:outline-none
      focus:ring-2
      focus:ring-opacity-50
      ${sizes[size]}
      ${variants[variant]}
      ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
      ${fullWidth ? "w-full" : "w-auto"}
      ${className}
    `;

    return (
      <div className={`${fullWidth ? "w-full" : "w-auto"}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={baseInputStyles}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={`mt-1 text-sm ${
              error ? "text-red-500" : "text-gray-500"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
