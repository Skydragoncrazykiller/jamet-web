// src/components/common/EmptyState.jsx
import { Button } from "./Button";

export const EmptyState = ({
  title = "No Data",
  description = "Tidak ada data untuk ditampilkan.",
  actionLabel,
  onAction,
}) => {
  return (
    <div className="border border-dashed border-gray-300 rounded-2xl p-8 bg-white/60 text-center shadow-sm">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>

      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
