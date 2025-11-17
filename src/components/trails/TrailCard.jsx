import { MapPin, Clock, TrendingUp, AlertCircle } from "lucide-react";
import { useWeather } from "../../hooks/useWeather";
import {
  calculateSafetyScore,
  getSafetyLabel,
} from "../../utils/safetyCalculator";
import { getWeatherIcon } from "../../utils/weatherAPI";

export const TrailCard = ({ trail }) => {
  const { weather, loading } = useWeather(
    trail.coordinates[0],
    trail.coordinates[1]
  );

  const difficultyColors = {
    easy: "from-green-500 to-emerald-600",
    medium: "from-yellow-500 to-orange-600",
    hard: "from-red-500 to-pink-600",
  };

  const difficultyLabels = {
    easy: "Mudah",
    medium: "Sedang",
    hard: "Sulit",
  };

  const safetyScore = weather ? calculateSafetyScore(weather, trail) : null;
  const safetyInfo = safetyScore ? getSafetyLabel(safetyScore) : null;

  return (
    <div className="card-premium glass-strong rounded-2xl overflow-hidden shadow-glow-hover cursor-pointer group">
      {/* Image with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Weather Badge - Top Right */}
        {weather && (
          <div className="absolute top-4 right-4 glass px-4 py-2 rounded-xl flex items-center gap-2 animate-fade-in shadow-glow">
            <img
              src={getWeatherIcon(weather.weather[0].icon)}
              alt="weather"
              className="w-10 h-10"
            />
            <span className="font-bold text-white text-lg drop-shadow-lg">
              {Math.round(weather.main.temp)}°C
            </span>
          </div>
        )}

        {/* Difficulty Badge - Top Left */}
        <div
          className={`absolute top-4 left-4 bg-gradient-to-r ${
            difficultyColors[trail.difficulty]
          } px-4 py-2 rounded-xl shadow-glow`}
        >
          <span className="text-white font-bold text-sm drop-shadow-lg">
            {difficultyLabels[trail.difficulty]}
          </span>
        </div>

        {/* Trail Name - Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {trail.name}
          </h3>
          <div className="flex items-center text-white/90 drop-shadow-lg">
            <MapPin size={18} className="mr-2" />
            <span className="text-sm font-medium">{trail.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white/95 backdrop-blur-sm">
        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
          {trail.description}
        </p>

        {/* Stats with Icons */}
        <div className="flex items-center gap-6 mb-5 text-sm">
          <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-3 py-2 rounded-lg">
            <Clock size={18} className="text-blue-600" />
            <span className="font-semibold">{trail.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 bg-green-50 px-3 py-2 rounded-lg">
            <TrendingUp size={18} className="text-green-600" />
            <span className="font-semibold">{trail.distance} km</span>
          </div>
        </div>

        {/* Safety Score with Glow Effect */}
        {safetyInfo && (
          <div
            className={`${safetyInfo.color} text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-lg animate-pulse-glow`}
          >
            <div className="flex items-center gap-2">
              <AlertCircle size={20} />
              <span className="font-bold">{safetyInfo.label}</span>
            </div>
            <span className="text-2xl font-black">{safetyScore}</span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-gray-100 px-4 py-3 rounded-xl animate-pulse">
            <span className="text-sm text-gray-500 italic">
              Mengambil data cuaca...
            </span>
          </div>
        )}
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </div>
  );
};
