import React, { SelectHTMLAttributes } from "react";

export interface OptionType {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  options: OptionType[];
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled";
  helperText?: string;
  fullWidth?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
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

    const baseSelectStyles = `
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
      appearance-none
      bg-no-repeat
      bg-[url('data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="%236B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')]
      bg-[center_right_0.5rem]
      pr-8
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
        <select
          ref={ref}
          disabled={disabled}
          className={baseSelectStyles}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select";
