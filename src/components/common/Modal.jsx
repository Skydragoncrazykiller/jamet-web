import { X } from "lucide-react";
import { useEffect } from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="glass-strong rounded-3xl shadow-glow max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with Glassmorphism */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 glass p-3 rounded-full shadow-glow hover:bg-white/30 transition-all hover:scale-110"
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};
