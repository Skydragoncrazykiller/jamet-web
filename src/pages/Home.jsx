// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { Award, Rocket } from "lucide-react";

export const Home = () => {
  const navigate = useNavigate();

  const contributors = ["Ihsan", "Aza", "Mitha", "Ifzal", "Raia", "Izza"];

  return (
    <main className="relative">
      {/* Hero Section dengan Video Background - FIT SCREEN */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Gradient untuk Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Content Container - COMPACT */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - SMALLER */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in shadow-glow">
              <Award size={16} className="text-amber-400" />
              <span className="text-xs text-white font-semibold tracking-wide">
                Platform Hiking Terpercaya di Jawa Barat
              </span>
            </div>

            {/* Main Heading - COMPACT SIZE */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl mb-5 animate-fade-in leading-tight drop-shadow-2xl"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-white font-light">
                Temukan Jalur Hiking Terbaik
              </span>
              <span className="block text-blue-300 italic font-serif mt-1 text-glow">
                dengan Prakiraan Cuaca
              </span>
            </h1>

            {/* Subtitle - COMPACT */}
            <p
              className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 animate-fade-in font-medium drop-shadow-lg"
              style={{ animationDelay: "0.4s" }}
            >
              Eksplorasi gunung di Bandung dengan informasi cuaca akurat, safety
              score otomatis, dan rekomendasi terbaik.
            </p>

            {/* CTA Button - COMPACT */}
            <div
              className="mb-10 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() => navigate("/trails")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-glow-hover transition-all hover:scale-110 hover:shadow-2xl flex items-center gap-3 mx-auto"
              >
                <Rocket
                  size={22}
                  className="group-hover:rotate-12 transition-transform"
                />
                Mulai Eksplorasi
              </button>
            </div>

            {/* Stats - COMPACT */}
            <div
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="glass p-4 rounded-xl shadow-glow-hover transition-all hover:scale-105 border border-white/20">
                <p className="text-3xl font-bold text-white mb-1 text-glow">
                  10+
                </p>
                <p className="text-blue-200 text-xs font-semibold">
                  Jalur Hiking
                </p>
              </div>
              <div className="glass p-4 rounded-xl shadow-glow-hover transition-all hover:scale-105 border border-white/20">
                <p className="text-3xl font-bold text-white mb-1 text-glow">
                  Forecast
                </p>
                <p className="text-blue-200 text-xs font-semibold">
                  Data Cuaca
                </p>
              </div>
              <div className="glass p-4 rounded-xl shadow-glow-hover transition-all hover:scale-105 border border-white/20">
                <p className="text-3xl font-bold text-white mb-1 text-glow">
                  24/7
                </p>
                <p className="text-blue-200 text-xs font-semibold">
                  Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80">
          <div className="w-5 h-8 border-2 border-white/70 rounded-full flex justify-center shadow-glow">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Contributors Section - ELEGANT & PROFESSIONAL */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-gray-400 mb-8 uppercase tracking-[0.3em] font-light">
            Website Contributors
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {contributors.map((name, index) => (
              <div
                key={name}
                className="group transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fade-in 0.6s ease-out forwards",
                }}
              >
                <p
                  className="text-2xl md:text-3xl font-light text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
                  style={{ fontFamily: "'Crimson Text', 'Georgia', serif" }}
                >
                  {name}
                </p>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
