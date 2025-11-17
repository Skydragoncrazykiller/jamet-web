import { Cloud, Droplets, Wind, Eye } from "lucide-react";
import { getWeatherIcon } from "../../utils/weatherAPI";

export const WeatherCard = ({ weather }) => {
  if (!weather) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-md">
        <p className="text-gray-500 text-sm">Loading cuaca...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-4 shadow-lg text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm opacity-90">Cuaca Saat Ini</p>
          <p className="text-2xl font-bold">
            {Math.round(weather.main.temp)}°C
          </p>
        </div>
        <img
          src={getWeatherIcon(weather.weather[0].icon)}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
      </div>

      {/* Description */}
      <p className="text-sm mb-4 capitalize">
        {weather.weather[0].description}
      </p>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Droplets size={16} />
          <span>Kelembaban: {weather.main.humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Wind size={16} />
          <span>Angin: {Math.round(weather.wind.speed)} m/s</span>
        </div>
        <div className="flex items-center gap-2">
          <Cloud size={16} />
          <span>Awan: {weather.clouds.all}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Eye size={16} />
          <span>
            Jarak pandang: {(weather.visibility / 1000).toFixed(1)} km
          </span>
        </div>
      </div>

      {/* Feels Like */}
      <div className="mt-3 pt-3 border-t border-blue-300">
        <p className="text-xs opacity-75">
          Terasa seperti: {Math.round(weather.main.feels_like)}°C
        </p>
      </div>
    </div>
  );
};
