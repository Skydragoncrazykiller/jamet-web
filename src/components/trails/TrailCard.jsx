// src/components/trails/TrailCard.jsx
import { MapPin, Mountain, Star, Timer } from "lucide-react";
import useWeather from "../../hooks/useWeather";
import { getWeatherIcon } from "../../utils/weatherAPI";

export const TrailCard = ({ trail }) => {
  const [lat, lng] = trail.coordinates ?? [];
  const { weather } = useWeather(lat, lng);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group">
      {/* Image */}
      <div className="relative">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Weather Badge - Small */}
        {weather && (
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
            <img
              src={getWeatherIcon(weather.weather?.[0]?.icon)}
              alt="weather"
              className="w-5 h-5"
            />
            <span className="text-xs font-semibold text-gray-800">
              {Math.round(weather.main.temp)}°C
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg text-gray-900">{trail.name}</h3>

        <p className="flex items-center text-gray-600 text-sm gap-1">
          <MapPin size={15} />
          {trail.location}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 text-xs text-gray-700 mt-2">
          <div className="flex flex-col items-center">
            <Mountain size={15} />
            {trail.elevation} m
          </div>
          <div className="flex flex-col items-center">
            <Timer size={15} />
            {trail.duration}
          </div>
          <div className="flex flex-col items-center">
            <Star size={15} className="text-yellow-500" />
            {trail.rating}
          </div>
        </div>

        {/* Difficulty */}
        <span
          className={`inline-block text-xs font-bold px-3 py-1 rounded-full mt-3
          ${
            trail.difficulty === "easy"
              ? "bg-green-100 text-green-700"
              : trail.difficulty === "medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trail.difficulty.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
