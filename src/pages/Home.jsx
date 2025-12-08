// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <main className="bg-white text-gray-900 py-24 text-center">
      {/* Title Section */}
      <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
        Jelajahi Gunung & Jalur Hiking di Jawa Barat
      </h2>

      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed mb-12">
        Temukan informasi gunung, cuaca real-time, dan panduan hiking lengkap
        untuk perjalanan yang aman dan menyenangkan. Cocok untuk pemula hingga pendaki ahli!
      </p>

      {/* CTA Button */}
      <Link
        to="/trails"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition-all hover:scale-[1.05]"
      >
        🚀 Mulai Eksplorasi Jalur
        <ArrowRight size={20} />
      </Link>

      {/* Extra Spacer */}
      <div className="h-20"></div>
    </main>
  );
};
