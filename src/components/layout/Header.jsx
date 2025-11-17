import { Link, useLocation } from "react-router-dom";
import { Mountain, BarChart3, User } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Mountain },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/about", label: "About", icon: User },
  ];

  return (
    <header className="glass-strong shadow-glow sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Gradient */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-glow group-hover:shadow-lg transition-all group-hover:scale-110">
              <Mountain size={28} className="text-white" />
            </div>
            <span className="text-2xl font-black text-gradient hidden md:block">
              TrailWeather
            </span>
          </Link>

          {/* Navigation with Glassmorphism */}
          <nav className="flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow scale-105"
                    : "glass text-gray-700 hover:bg-white/80 hover:scale-105"
                }`}
              >
                <link.icon size={20} />
                <span className="hidden md:inline">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
