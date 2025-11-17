import {
  MapPin,
  Clock,
  TrendingUp,
  Mountain,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { useWeather } from "../../hooks/useWeather";
import { WeatherCard } from "../weather/WeatherCard";
import {
  calculateSafetyScore,
  getSafetyLabel,
} from "../../utils/safetyCalculator";

export const TrailDetail = ({ trail }) => {
  const { weather, loading } = useWeather(
    trail.coordinates[0],
    trail.coordinates[1]
  );

  const safetyScore = weather ? calculateSafetyScore(weather, trail) : null;
  const safetyInfo = safetyScore ? getSafetyLabel(safetyScore) : null;

  const difficultyLabels = {
    easy: "Mudah",
    medium: "Sedang",
    hard: "Sulit",
  };

  return (
    <div className="p-6">
      {/* Hero Image */}
      <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Location */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{trail.name}</h2>
      <div className="flex items-center text-gray-600 mb-6">
        <MapPin size={20} className="mr-2" />
        <span className="text-lg">{trail.location}</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <TrendingUp className="mx-auto mb-2 text-blue-600" size={24} />
          <p className="text-sm text-gray-600">Jarak</p>
          <p className="text-xl font-bold text-gray-800">{trail.distance} km</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Clock className="mx-auto mb-2 text-green-600" size={24} />
          <p className="text-sm text-gray-600">Durasi</p>
          <p className="text-xl font-bold text-gray-800">{trail.duration}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Mountain className="mx-auto mb-2 text-purple-600" size={24} />
          <p className="text-sm text-gray-600">Elevasi</p>
          <p className="text-xl font-bold text-gray-800">{trail.elevation}m</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <AlertTriangle className="mx-auto mb-2 text-yellow-600" size={24} />
          <p className="text-sm text-gray-600">Kesulitan</p>
          <p className="text-xl font-bold text-gray-800">
            {difficultyLabels[trail.difficulty]}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Deskripsi</h3>
        <p className="text-gray-600 leading-relaxed">{trail.description}</p>
      </div>

      {/* Weather & Safety */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Weather */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Cuaca Saat Ini
          </h3>
          {loading ? (
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-500">Loading cuaca...</p>
            </div>
          ) : (
            <WeatherCard weather={weather} />
          )}
        </div>

        {/* Safety Score */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Kondisi Keamanan
          </h3>
          {safetyInfo ? (
            <div className={`${safetyInfo.color} rounded-lg p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">{safetyInfo.label}</span>
                <span className="text-4xl font-bold">{safetyScore}</span>
              </div>
              <div className="space-y-2 text-sm">
                {safetyScore >= 80 && <p>✓ Kondisi ideal untuk hiking</p>}
                {safetyScore >= 60 && safetyScore < 80 && (
                  <p>✓ Kondisi baik, perhatikan cuaca</p>
                )}
                {safetyScore >= 40 && safetyScore < 60 && (
                  <>
                    <p>⚠ Kondisi kurang ideal</p>
                    <p>⚠ Bawa perlengkapan lengkap</p>
                  </>
                )}
                {safetyScore < 40 && (
                  <>
                    <p>✕ Tidak direkomendasikan</p>
                    <p>✕ Tunda perjalanan Anda</p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-500">Menghitung safety score...</p>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Fitur</h3>
        <div className="flex flex-wrap gap-2">
          {trail.features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
            >
              {feature.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      </div>

      {/* Best Time */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Calendar size={24} />
          Waktu Terbaik
        </h3>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-700">
            <span className="font-semibold">Waktu:</span>{" "}
            {trail.bestTime.join(", ")}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Musim:</span>{" "}
            {trail.season === "year_round" ? "Sepanjang tahun" : trail.season}
          </p>
        </div>
      </div>
    </div>
  );
};
