// src/config/theme.js
// CENTRAL THEME CONFIGURATION - SLATE PROFESSIONAL

export const theme = {
  colors: {
    primary: {
      main: "#1e293b", // slate-800
      light: "#334155", // slate-700
      dark: "#0f172a", // slate-900
    },
    secondary: {
      main: "#3b82f6", // blue-500
      light: "#60a5fa", // blue-400
      dark: "#2563eb", // blue-600
    },
    accent: {
      main: "#f59e0b", // amber-500
      light: "#fbbf24", // amber-400
    },
    background: {
      primary: "#f8fafc", // slate-50
      secondary: "#ffffff",
      overlay: "rgba(0, 0, 0, 0.6)",
    },
    text: {
      primary: "#1e293b", // slate-800
      secondary: "#64748b", // slate-500
      white: "#ffffff",
    },
  },

  layout: {
    container: "container mx-auto px-4 md:px-6",
    section: "py-12 md:py-16",
    card: "bg-white rounded-xl shadow-sm border border-slate-200 p-6",
    videoOverlay: "bg-gradient-to-b from-black/70 via-black/50 to-slate-900/90",
  },

  transitions: {
    default: "transition-all duration-300 ease-in-out",
    slow: "transition-all duration-500 ease-in-out",
    pageSlide: "animate-slideIn",
  },
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3 },
};
