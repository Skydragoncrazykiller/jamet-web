// src/pages/TrailDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { trails } from "../data/trails";
import { ArrowLeft, MapPin, Mountain, Timer, Star, TrendingUp } from "lucide-react";
import useWeather from "../hooks/useWeather";
import { getWeatherIcon } from "../utils/weatherAPI";

export const TrailDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const trail = trails.find((t) => t.id === Number(id));
  const [lat, lng] = trail?.coordinates ?? [];
  const { weather } = useWeather(lat, lng);

  if (!trail) {
    return <p className="text-center py-20 text-gray-500">Trail tidak ditemukan.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Tombol Back */}
      <button
        onClick={() => navigate(-1)}
        className="glass px-4 py-2 mb-6 rounded-lg flex items-center gap-2 text-gray-700 hover:bg-white transition-all shadow-glow"
      >
        <ArrowLeft size={20} />
        Sebelumnya
      </button>

      {/* Gambar Utama */}
      <div className="relative mb-6">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
        />

        {weather && (
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
            <img
              src={getWeatherIcon(weather.weather?.[0]?.icon)}
              alt="cuaca"
              className="w-6 h-6"
            />
            <span className="text-sm font-bold text-gray-800">
              {Math.round(weather.main.temp)}°C
            </span>
          </div>
        )}
      </div>

      {/* Title & Location */}
      <h1 className="text-3xl font-bold text-gray-900">{trail.name}</h1>
      <p className="flex items-center gap-2 text-gray-600 mt-1 mb-6">
        <MapPin size={18} />
        {trail.location}
      </p>

      {/* Info Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        <Info icon={<Mountain size={18} />} label="Kesulitan" value={trail.difficulty} />
        <Info icon={<TrendingUp size={18} />} label="Elevasi" value={`${trail.elevation} m`} />
        <Info icon={<Timer size={18} />} label="Durasi" value={trail.duration} />
        <Info
          icon={<Star size={18} className="text-yellow-500" />}
          label="Rating"
          value={trail.rating}
        />
        <Info icon={<Mountain size={18} />} label="Jarak" value={`${trail.distance} km`} />
      </div>

      {/* Deskripsi */}
      <section className="mb-8">
        <h2 className="font-bold text-gray-800 mb-2 text-lg">Deskripsi Jalur</h2>
        <p className="text-gray-700 leading-relaxed">{trail.description}</p>
      </section>

      {/* Cuaca */}
      {weather && (
        <section className="mb-8">
          <h2 className="font-bold text-gray-800 mb-2 text-lg">Cuaca Saat Ini</h2>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-sm space-y-2">
            <p className="capitalize text-gray-700">
              {weather.weather[0].description}
            </p>
            <div className="grid grid-cols-3 text-xs text-gray-700 gap-2">
              <span>Kelembaban: <strong>{weather.main.humidity}%</strong></span>
              <span>Angin: <strong>{weather.wind.speed} m/s</strong></span>
              <span>Awan: <strong>{weather.clouds.all}%</strong></span>
            </div>
          </div>
        </section>
      )}

      {/* Safety Tips */}
      <section>
        <h2 className="font-bold text-gray-800 mb-2 text-lg">Tips Keamanan</h2>
        <ul className="text-gray-700 list-disc space-y-1 pl-6 text-sm">
          {trail.safetyTips?.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="bg-gray-100 p-3 rounded-xl text-center shadow-sm">
    <div className="flex justify-center text-gray-700 mb-1">{icon}</div>
    <p className="font-bold text-gray-900 text-xs md:text-sm">{value}</p>
    <p className="text-[10px] text-gray-500">{label}</p>
  </div>
);
