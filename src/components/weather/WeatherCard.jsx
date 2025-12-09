// File: src/components/weather/WeatherCard.jsx
import { Cloud, Droplets, Wind, Eye, Calendar, TrendingUp } from "lucide-react";
import { getWeatherIcon } from "../../utils/weatherAPI";

export const WeatherCard = ({ weather, forecast }) => {
  if (!weather) {
    return (
      <div className="glass-light rounded-xl p-6 shadow-mountain">
        <p className="text-slate-500 text-sm">Memuat data cuaca...</p>
      </div>
    );
  }

  // Fungsi untuk menentukan warna berdasarkan kondisi cuaca
  const getWeatherBg = (main) => {
    const conditions = {
      Clear: "weather-sunny",
      Clouds: "weather-cloudy",
      Rain: "weather-rainy",
      Drizzle: "weather-rainy",
      Fog: "weather-foggy",
      Mist: "weather-foggy",
      Haze: "weather-foggy",
    };
    return conditions[main] || "weather-cloudy";
  };

  // Format hari untuk forecast
  const formatDay = (timestamp) => {
    const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const date = new Date(timestamp * 1000);
    return days[date.getDay()];
  };

  return (
    <div className="space-y-4">
      {/* Current Weather */}
      <div
        className={`${getWeatherBg(
          weather.weather[0].main
        )} rounded-xl p-6 shadow-mountain text-white`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-90 mb-1">Cuaca Saat Ini</p>
            <p className="text-4xl font-bold">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="text-sm opacity-80 mt-1 capitalize">
              {weather.weather[0].description}
            </p>
          </div>
          <img
            src={getWeatherIcon(weather.weather[0].icon)}
            alt={weather.weather[0].description}
            className="w-20 h-20"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm mt-4 pt-4 border-t border-white/20">
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
            <span>{(weather.visibility / 1000).toFixed(1)} km</span>
          </div>
        </div>

        {/* Feels Like */}
        <div className="mt-3 text-xs opacity-75">
          Terasa seperti: {Math.round(weather.main.feels_like)}°C
        </div>
      </div>

      {/* 5-Day Forecast */}
      {forecast && forecast.list && (
        <div className="glass-light rounded-xl p-6 shadow-mountain">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={20} className="text-slate-600" />
            <h3 className="text-lg font-bold text-slate-800">
              Prediksi 5 Hari
            </h3>
          </div>

          <div className="space-y-3">
            {/* Filter untuk mendapatkan 1 data per hari (jam 12:00) */}
            {forecast.list
              .filter((item, index) => index % 8 === 0) // Setiap 8 item = 1 hari (API returns 3-hour intervals)
              .slice(0, 5)
              .map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-700 w-10">
                      {index === 0 ? "Hari ini" : formatDay(day.dt)}
                    </span>
                    <img
                      src={getWeatherIcon(day.weather[0].icon)}
                      alt={day.weather[0].description}
                      className="w-10 h-10"
                    />
                    <span className="text-sm text-slate-600 capitalize">
                      {day.weather[0].description}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Droplets size={14} />
                      <span>{day.main.humidity}%</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">
                        {Math.round(day.main.temp)}°
                      </span>
                      <span className="text-sm text-slate-500 ml-1">
                        / {Math.round(day.main.temp_min)}°
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Rekomendasi berdasarkan forecast */}
          <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
            <div className="flex items-start gap-2">
              <TrendingUp size={16} className="text-orange-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-orange-800 mb-1">
                  Rekomendasi:
                </p>
                <p className="text-orange-700">
                  {forecast.list[0].main.temp > 25
                    ? "Cuaca cerah, ideal untuk pendakian. Bawa air cukup!"
                    : forecast.list[0].weather[0].main === "Rain"
                    ? "Hujan diprediksi. Pertimbangkan menunda pendakian."
                    : "Kondisi cuaca mendukung untuk hiking. Tetap waspada!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
