// src/pages/Trails.jsx - WEATHER FORECAST PER DAERAH GUNUNG
import React, { useState } from "react";
import { trails as initialTrails } from "../data/trails";
import { useTrails } from "../hooks/useTrails";
import { TrailFilter } from "../components/trails/TrailFilter";
import { TrailSort } from "../components/trails/TrailSort";
import { Modal } from "../components/common/Modal";
import { TrailDetail } from "../components/trails/TrailDetail";
import { VideoBackground } from "../components/layout/VideoBackground";
import { Link } from "react-router-dom";
import { CloudRain, MapPin, Thermometer } from "lucide-react";

// DUMMY WEATHER DATA PER LOKASI
const weatherByLocation = {
  Garut: { temp: 24, condition: "Berawan", icon: "⛅", rain: 40, wind: 15 },
  Ciamis: { temp: 26, condition: "Cerah", icon: "☀️", rain: 10, wind: 12 },
  Tasikmalaya: {
    temp: 25,
    condition: "Hujan Ringan",
    icon: "🌧️",
    rain: 65,
    wind: 18,
  },
  Sumedang: { temp: 27, condition: "Cerah", icon: "☀️", rain: 15, wind: 10 },
  Bandung: { temp: 26, condition: "Berawan", icon: "⛅", rain: 30, wind: 14 },
  "Bandung Barat": {
    temp: 25,
    condition: "Berawan",
    icon: "⛅",
    rain: 35,
    wind: 16,
  },
  "Bandung Utara": {
    temp: 24,
    condition: "Hujan Ringan",
    icon: "🌧️",
    rain: 55,
    wind: 20,
  },
  Bogor: { temp: 27, condition: "Hujan Lebat", icon: "🌧️", rain: 80, wind: 22 },
  Ciwidey: { temp: 23, condition: "Kabut", icon: "🌫️", rain: 45, wind: 12 },
  Kuningan: { temp: 25, condition: "Cerah", icon: "☀️", rain: 5, wind: 8 },
  Cibadak: { temp: 26, condition: "Berawan", icon: "⛅", rain: 25, wind: 13 },
  Lembang: { temp: 24, condition: "Cerah", icon: "☀️", rain: 20, wind: 11 },
};

export const Trails = () => {
  const {
    trails,
    searchTerm,
    setSearchTerm,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedLocation,
    setSelectedLocation,
    distanceRange,
    setDistanceRange,
    sortBy,
    setSortBy,
    locations,
  } = useTrails(initialTrails);

  const [selectedTrail, setSelectedTrail] = useState(null);

  // Get weather for location
  const getWeatherForLocation = (location) => {
    return (
      weatherByLocation[location] || {
        temp: 26,
        condition: "Berawan",
        icon: "⛅",
        rain: 30,
        wind: 14,
      }
    );
  };

  // Get rain warning color
  const getRainWarning = (rainPercent) => {
    if (rainPercent >= 70) return "bg-red-100 text-red-700 border-red-300";
    if (rainPercent >= 40)
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    return "bg-green-100 text-green-700 border-green-300";
  };

  return (
    <VideoBackground>
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  Jalur Hiking Jawa Barat
                </h1>
                <p className="text-slate-600">
                  Dengan prakiraan cuaca per lokasi gunung
                </p>
              </div>
              <div className="flex items-center gap-3">
                <TrailSort sortBy={sortBy} setSortBy={setSortBy} />
                <Link
                  to="/analytics"
                  className="text-sm bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  📊 Analytics
                </Link>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-lg">
            <TrailFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
              locations={locations}
              distanceRange={distanceRange}
              onDistanceRangeChange={setDistanceRange}
            />
          </div>

          {/* Stats */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-lg">
            <p className="text-slate-700">
              Menampilkan{" "}
              <strong className="text-blue-600">{trails.length}</strong> jalur
              hiking
            </p>
          </div>

          {/* Trail Grid WITH WEATHER */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trails.map((trail) => {
              const weather = getWeatherForLocation(trail.location);

              return (
                <div
                  key={trail.id}
                  onClick={() => setSelectedTrail(trail)}
                  className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group overflow-hidden border-2 border-slate-200 hover:border-blue-500"
                >
                  {/* Trail Image */}
                  {trail.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={trail.image}
                        alt={trail.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Weather Overlay */}
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                        <div className="text-2xl mb-1">{weather.icon}</div>
                        <p className="text-lg font-bold text-slate-800">
                          {weather.temp}°C
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Trail Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {trail.name}
                    </h3>

                    <p className="text-sm text-slate-600 mb-3 flex items-center gap-1">
                      <MapPin size={14} />
                      {trail.location}
                    </p>

                    {/* Weather Info Card */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 mb-3 border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CloudRain size={16} className="text-blue-600" />
                          <span className="text-sm font-semibold text-slate-700">
                            Prakiraan Cuaca
                          </span>
                        </div>
                        <span className="text-xl">{weather.icon}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/70 rounded p-2">
                          <p className="text-slate-600 mb-1">Suhu</p>
                          <p className="font-bold text-slate-800 flex items-center gap-1">
                            <Thermometer size={12} />
                            {weather.temp}°C
                          </p>
                        </div>
                        <div
                          className={`rounded p-2 border ${getRainWarning(
                            weather.rain
                          )}`}
                        >
                          <p className="opacity-75 mb-1">Hujan</p>
                          <p className="font-bold">💧 {weather.rain}%</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 mt-2">
                        {weather.condition} • Angin {weather.wind} km/h
                      </p>
                    </div>

                    {/* Trail Stats */}
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                        🏔️ {trail.elevation} mdpl
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                        📏 {trail.distance} km
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                        ⏱️ {trail.duration}
                      </span>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          trail.difficulty === "easy"
                            ? "bg-green-100 text-green-700"
                            : trail.difficulty === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {trail.difficulty === "easy"
                          ? "Mudah"
                          : trail.difficulty === "medium"
                          ? "Sedang"
                          : "Sulit"}
                      </span>

                      {trail.rating && (
                        <span className="text-xs text-slate-600">
                          ⭐ {trail.rating}/5
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {trails.length === 0 && (
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-12 text-center shadow-lg">
              <CloudRain size={64} className="mx-auto mb-4 text-slate-300" />
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                Tidak ada jalur yang sesuai
              </h3>
              <p className="text-slate-500">Coba ubah filter pencarian Anda</p>
            </div>
          )}

          {/* Modal */}
          <Modal
            isOpen={!!selectedTrail}
            onClose={() => setSelectedTrail(null)}
          >
            {selectedTrail && (
              <div className="space-y-4">
                <TrailDetail trail={selectedTrail} />
                <div className="text-right">
                  <Link
                    to={`/trails/${selectedTrail.id}`}
                    className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold"
                    onClick={() => setSelectedTrail(null)}
                  >
                    Lihat Detail Lengkap →
                  </Link>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </main>
    </VideoBackground>
  );
};
