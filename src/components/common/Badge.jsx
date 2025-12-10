// src/components/common/Badge.jsx

const colorMap = {
  blue: "bg-blue-500/10 text-blue-500 border-blue-400/50",
  green: "bg-green-500/10 text-green-500 border-green-400/50",
  orange: "bg-orange-500/10 text-orange-500 border-orange-400/50",
  gray: "bg-gray-500/10 text-gray-400 border-gray-400/40",
};

export const Badge = ({ children, color = "blue", className = "" }) => {
  const colorClass = colorMap[color] || colorMap.blue;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
};