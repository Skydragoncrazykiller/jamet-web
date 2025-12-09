// src/components/common/Loading.jsx

export const Loading = ({ label = "Loading..." }) => {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-600">
      <div className="h-6 w-6 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin" />
      <span>{label}</span>
    </div>
  );
};
