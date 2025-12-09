// src/components/common/Button.jsx

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline:
    "border border-gray-300 bg-transparent text-gray-800 hover:bg-white/70 focus:ring-gray-400",
};

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const variantClass = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseClasses} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
