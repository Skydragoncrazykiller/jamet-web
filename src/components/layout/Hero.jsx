import { Mountain, CloudRain, MapPin, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Icons */}
          <div className="mb-8 flex justify-center gap-6">
            <div className="glass p-6 rounded-2xl animate-float shadow-glow">
              <Mountain size={48} className="text-white" />
            </div>
            <div
              className="glass p-6 rounded-2xl animate-float shadow-glow"
              style={{ animationDelay: "0.5s" }}
            >
              <CloudRain size={48} className="text-white" />
            </div>
            <div
              className="glass p-6 rounded-2xl animate-float shadow-glow"
              style={{ animationDelay: "1s" }}
            >
              <MapPin size={48} className="text-white" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white text-glow animate-fade-in">
            TrailWeather
          </h1>

          {/* Subtitle with Glassmorphism */}
          <div
            className="glass inline-block px-8 py-4 rounded-full mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl md:text-3xl text-white font-semibold">
              Hiking Aman dengan Info Cuaca Real-Time
            </p>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Temukan jalur hiking terbaik di Bandung dengan informasi cuaca
            terkini, safety score otomatis, dan rekomendasi yang akurat untuk
            petualangan Anda.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="glass-strong px-8 py-4 rounded-xl font-bold text-lg shadow-glow-hover transition-all hover:scale-105 text-gray-800">
              🚀 Mulai Eksplorasi
            </button>
            <button className="glass px-8 py-4 rounded-xl font-bold text-lg text-white hover:bg-white/20 transition-all hover:scale-105">
              📊 Lihat Analytics
            </button>
          </div>

          {/* Stats with Glassmorphism */}
          <div
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="glass p-6 rounded-2xl shadow-glow-hover transition-all hover:scale-105">
              <p className="text-4xl font-bold text-white mb-2">10+</p>
              <p className="text-blue-200 text-sm">Jalur Hiking</p>
            </div>
            <div className="glass p-6 rounded-2xl shadow-glow-hover transition-all hover:scale-105">
              <p className="text-4xl font-bold text-white mb-2">Real-Time</p>
              <p className="text-blue-200 text-sm">Data Cuaca</p>
            </div>
            <div className="glass p-6 rounded-2xl shadow-glow-hover transition-all hover:scale-105">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-blue-200 text-sm">Monitoring</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={32} className="text-white opacity-70" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};
