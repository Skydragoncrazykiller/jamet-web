import { NavLink, Link } from "react-router-dom";
import {
  Mountain,
  MapPin,
  Map,
  BarChart3,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Mountain },
    { path: "/trails", label: "Trails", icon: MapPin },
    { path: "/map", label: "Map", icon: Map },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/about", label: "About", icon: User },
  ];

  const baseLinkClasses =
    "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all text-sm";

  const activeClasses =
    "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow scale-[1.03]";
  const inactiveClasses =
    "glass text-gray-700 hover:bg-white/80 hover:scale-105";

  return (
    <header className="glass-strong shadow-glow sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Gradient */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-glow group-hover:shadow-lg transition-all group-hover:scale-110">
              <Mountain size={28} className="text-white" />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-2xl font-black text-gradient">
                TrailWeather
              </span>
              <span className="text-xs text-gray-400">
                Layout & Navigation Module
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeClasses : inactiveClasses
                  }`
                }
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass p-2 rounded-xl"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLinkClasses} justify-between ${
                    isActive ? activeClasses : inactiveClasses
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </div>
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};


// import { Link, useLocation } from "react-router-dom";
// import { Mountain, BarChart3, User } from "lucide-react";

// export const Header = () => {
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   const navLinks = [
//     { path: "/", label: "Home", icon: Mountain },
//     { path: "/analytics", label: "Analytics", icon: BarChart3 },
//     { path: "/about", label: "About", icon: User },
//   ];

//   return (
//     <header className="glass-strong shadow-glow sticky top-0 z-50 border-b border-white/20">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo with Gradient */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-glow group-hover:shadow-lg transition-all group-hover:scale-110">
//               <Mountain size={28} className="text-white" />
//             </div>
//             <span className="text-2xl font-black text-gradient hidden md:block">
//               TrailWeather
//             </span>
//           </Link>

//           {/* Navigation with Glassmorphism */}
//           <nav className="flex gap-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
//                   isActive(link.path)
//                     ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow scale-105"
//                     : "glass text-gray-700 hover:bg-white/80 hover:scale-105"
//                 }`}
//               >
//                 <link.icon size={20} />
//                 <span className="hidden md:inline">{link.label}</span>
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };
