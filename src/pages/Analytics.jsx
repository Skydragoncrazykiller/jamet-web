import { trails } from "../data/trails";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { TrendingUp, Mountain, Clock, Award, Calendar } from "lucide-react";

export const Analytics = () => {
  // Difficulty data
  const difficultyData = [
    {
      name: "Mudah",
      value: trails.filter((t) => t.difficulty === "easy").length,
      color: "#10b981",
    },
    {
      name: "Sedang",
      value: trails.filter((t) => t.difficulty === "medium").length,
      color: "#f59e0b",
    },
    {
      name: "Sulit",
      value: trails.filter((t) => t.difficulty === "hard").length,
      color: "#ef4444",
    },
  ];

  // Distance & elevation
  const distanceData = trails
    .map((trail) => ({
      name: trail.name.substring(0, 15),
      distance: trail.distance,
      elevation: trail.elevation,
    }))
    .sort((a, b) => b.distance - a.distance);

  // Hourly weather data
  const hourlyWeatherData = [
    { time: "00:00", temp: 18, humidity: 85 },
    { time: "03:00", temp: 17, humidity: 88 },
    { time: "06:00", temp: 16, humidity: 90 },
    { time: "09:00", temp: 22, humidity: 75 },
    { time: "12:00", temp: 28, humidity: 60 },
    { time: "15:00", temp: 30, humidity: 55 },
    { time: "18:00", temp: 25, humidity: 65 },
    { time: "21:00", temp: 20, humidity: 75 },
  ];

  // AUTO DATE (DD MMM YYYY)
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <main className="flex">
      {/* ===================== SIDEBAR (FIXED) ===================== */}
      <aside className="w-64 bg-blue-700 text-white h-screen p-6 flex-shrink-0">
        <h1 className="text-2xl font-bold mb-6">TrailWeather</h1>

        {/* Date */}
        <div className="mt-2 mb-6">
          <p className="text-sm opacity-80 mb-1">Refreshed</p>
          <div className="flex items-center gap-3">
            <Calendar size={32} />
            <div>
              <p className="text-2xl font-bold leading-none">
                {formattedDate.split(" ")[0]}
              </p>
              <p className="text-sm">{formattedDate.split(" ").slice(1).join(" ")}</p>
            </div>
          </div>
        </div>

        <hr className="border-white/40 my-4" />

        {/* Stats */}
        <div className="space-y-6">
          {/* Total Trails */}
          <div className="flex items-center gap-3">
            <Mountain size={40} />
            <div>
              <p className="font-semibold leading-tight">Total Trails</p>
              <p>{trails.length}</p>
            </div>
          </div>

          {/* Total Distance */}
          <div className="flex items-center gap-3">
            <TrendingUp size={40} />
            <div>
              <p className="font-semibold leading-tight">Total Distance</p>
              <p>{trails.reduce((sum, t) => sum + t.distance, 0).toFixed(1)} km</p>
            </div>
          </div>

          {/* Time Average */}
          <div className="flex items-center gap-3">
            <Clock size={40} />
            <div>
              <p className="font-semibold leading-tight">Time Average</p>
              <p>3.5 hours</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ===================== MAIN CONTENT ===================== */}
      <section className="flex-1 p-8">
        {/* HEADER TITLE */}
        <div className="bg-white p-6 rounded-xl shadow mb-4">
          <h2 className="text-3xl font-bold text-blue-900">
            Provinsi Jawa Barat{" "}
            <span className="text-blue-400 font-semibold">| Informasi Hiking</span>
          </h2>
        </div>

        {/* TOP ROW: Popular Trail + Insight */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-yellow-50 p-4 rounded-xl text-center text-blue-900 shadow">
            <p className="font-semibold">Trail Terpopuler</p>
            <p className="text-blue-600 font-bold">
              Gunung Tangkuban Perahu
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl text-center text-blue-900 shadow">
            <p>
              <span className="font-bold text-3xl text-blue-600">70%</span> Trail berada di kategori
              mudah-sedang, cocok untuk pemula
            </p>
          </div>
        </div>

        {/* CENTER ROW: Weather + Pie */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Weather */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold mb-2">Prakiraan Cuaca Hari Ini</h3>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={hourlyWeatherData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  dataKey="temp"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Suhu (°C)"
                />
                <Line
                  yAxisId="right"
                  dataKey="humidity"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Kelembaban (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Difficulty */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold mb-2">Distribusi Kesulitan Trail</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={difficultyData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {difficultyData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BOTTOM: BAR CHART */}
        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-4">Perbandingan Jarak & Elevasi Trail</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={distanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis yAxisId="left" stroke="#3b82f6" />
              <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="distance" fill="#3b82f6" name="Jarak (km)" />
              <Bar yAxisId="right" dataKey="elevation" fill="#10b981" name="Elevasi (m)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
};