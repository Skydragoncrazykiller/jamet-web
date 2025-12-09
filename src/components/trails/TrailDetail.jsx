import { useState, useEffect } from "react";
import {
  Mountain,
  MapPin,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { WeatherCard } from "../weather/WeatherCard";
import {
  getCompleteWeatherData,
  analyzeForecastForHiking,
  calculateSafetyScore,
} from "../../utils/weatherAPI";

export const TrailDetail = ({ trail }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getCompleteWeatherData(
          trail.coordinates.lat,
          trail.coordinates.lng
        );

        setWeatherData(data);

        // Analyze forecast untuk rekomendasi
        const analysis = analyzeForecastForHiking(data.forecast);
        setRecommendation(analysis);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [trail]);

  // Calculate dynamic safety score
  const safetyScore = weatherData?.current
    ? calculateSafetyScore(weatherData.current)
    : trail.safetyScore;

  const getSafetyColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getDifficultyBadge = (difficulty) => {
    const badges = {
      mudah: { color: "bg-green-500", text: "Mudah" },
      sedang: { color: "bg-yellow-500", text: "Sedang" },
      sulit: { color: "bg-red-500", text: "Sulit" },
    };
    return badges[difficulty] || badges.mudah;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Image */}
      {trail.image && (
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 shadow-mountain">
          <img
            src={trail.image}
            alt={trail.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {trail.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={16} />
              <span>{trail.location}</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Trail Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trail Stats */}
          <div className="glass-light rounded-xl p-6 shadow-mountain">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Mountain size={24} className="text-orange-500" />
              Informasi Trail
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Ketinggian</p>
                <p className="text-lg font-bold text-slate-800">
                  {trail.elevation} mdpl
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Durasi</p>
                <p className="text-lg font-bold text-slate-800">
                  {trail.duration}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Tingkat Kesulitan</p>
                <span
                  className={`inline-block ${
                    getDifficultyBadge(trail.difficulty).color
                  } text-white text-sm px-3 py-1 rounded-full font-semibold`}
                >
                  {getDifficultyBadge(trail.difficulty).text}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="font-semibold text-slate-800 mb-2">Deskripsi</h3>
              <p className="text-slate-600 leading-relaxed">
                {trail.description ||
                  "Jalur hiking yang menantang dengan pemandangan spektakuler. Cocok untuk pendaki berpengalaman yang mencari petualangan di alam."}
              </p>
            </div>

            {/* Tips */}
            {trail.tips && (
              <div className="mt-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Tips & Persiapan
                </h3>
                <ul className="space-y-2 text-slate-600">
                  {trail.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Safety Score Card */}
          <div
            className={`rounded-xl p-6 shadow-mountain border-2 ${getSafetyColor(
              safetyScore
            )}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={24} />
                <h3 className="text-lg font-bold">Safety Score</h3>
              </div>
              <span className="text-3xl font-black">{safetyScore}%</span>
            </div>

            {recommendation && (
              <div className="mt-4">
                <div className="flex items-start gap-2">
                  {recommendation.isRecommended ? (
                    <CheckCircle size={20} className="mt-0.5" />
                  ) : (
                    <AlertTriangle size={20} className="mt-0.5" />
                  )}
                  <p className="font-medium">{recommendation.reason}</p>
                </div>

                {recommendation.stats && (
                  <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                    <div>
                      <span className="opacity-75">Avg Temp:</span>
                      <p className="font-semibold">
                        {recommendation.stats.avgTemp}°C
                      </p>
                    </div>
                    <div>
                      <span className="opacity-75">Max Wind:</span>
                      <p className="font-semibold">
                        {recommendation.stats.maxWind} m/s
                      </p>
                    </div>
                    <div>
                      <span className="opacity-75">Rain:</span>
                      <p className="font-semibold">
                        {recommendation.stats.totalRain} mm
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Weather */}
        <div className="lg:col-span-1">
          {loading ? (
            <div className="glass-light rounded-xl p-6 shadow-mountain">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-20 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
            </div>
          ) : (
            <WeatherCard
              weather={weatherData?.current}
              forecast={weatherData?.forecast}
            />
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-accent-hover">
          Mulai Perencanaan
        </button>
        <button className="glass-light hover:bg-slate-100 text-slate-700 font-semibold py-4 px-6 rounded-xl transition-colors shadow-mountain">
          Simpan Trail
        </button>
      </div>
    </div>
  );
};
