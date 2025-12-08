import React from "react";
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
import { TrendingUp, Mountain, Clock, Calendar } from "lucide-react";

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
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* ===================== TOP SECTION (Sidebar + Stats + Weather/Difficulty) ===================== */}
      {/* items-stretch ensures the sidebar matches the height of the right content exactly */}
      <div className="flex w-full bg-white shadow-sm z-10 relative items-stretch">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-blue-700 text-white pt-8 pb-8 px-4 shrink-0 flex flex-col items-center">
          <h1 className="text-2xl font-bold tracking-tight mb-4">TrailWeather</h1>
          
          {/* Separator 1 */}
          <hr className="w-full border-white/30 mb-6" />

          {/* Date */}
          <div className="w-full flex flex-col items-center mb-6">
            <p className="text-xs opacity-70 uppercase tracking-widest font-semibold mb-2">Refreshed</p>
            <div className="flex items-center gap-2">
              <Calendar size={24} className="opacity-90" />
              <p className="text-lg font-bold leading-none mt-0.5">
                {formattedDate}
              </p>
            </div>
          </div>

          {/* Separator 2 */}
          <hr className="w-full border-white/30 mb-8" />

          {/* Stats Group */}
          <div className="space-y-6 w-full flex flex-col items-center px-2">
            {/* Total Trails */}
            <div className="flex items-center gap-4 w-fit">
              <Mountain size={28} strokeWidth={1.5} className="opacity-90" />
              <div className="text-center">
                <p className="font-medium text-xs text-blue-200 uppercase tracking-wider mb-0.5">Total Trails</p>
                <p className="text-lg font-bold leading-none">{trails.length}</p>
              </div>
            </div>

            {/* Total Distance */}
            <div className="flex items-center gap-4 w-fit">
              <TrendingUp size={28} strokeWidth={1.5} className="opacity-90" />
              <div className="text-center">
                <p className="font-medium text-xs text-blue-200 uppercase tracking-wider mb-0.5">Total Distance</p>
                <p className="text-lg font-bold leading-none">
                  {trails.reduce((sum, t) => sum + t.distance, 0).toFixed(1)} <span className="text-sm font-normal">km</span>
                </p>
              </div>
            </div>

            {/* Time Average */}
            <div className="flex items-center gap-4 w-fit">
              <Clock size={28} strokeWidth={1.5} className="opacity-90" />
              <div className="text-center">
                <p className="font-medium text-xs text-blue-200 uppercase tracking-wider mb-0.5">Time Average</p>
                <p className="text-lg font-bold leading-none">3.5 <span className="text-sm font-normal">hours</span></p>
              </div>
            </div>
          </div>
        </aside>

        {/* TOP RIGHT CONTENT */}
        {/* pb-0 ensures the flex container ends exactly at the bottom of the charts */}
        <div className="flex-1 pt-8 px-8 flex flex-col gap-6 bg-gray-50 pb-0 mb-[-1px]">
          {/* HEADER TITLE */}
          <div className="bg-white p-6 shadow-sm border-l-4 border-blue-700">
            <h2 className="text-3xl font-bold text-blue-900">
              Provinsi Jawa Barat{" "}
              <span className="text-blue-400 font-semibold text-2xl">
                | Informasi Hiking
              </span>
            </h2>
          </div>

          {/* TOP ROW: Popular Trail + Insight */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-5 shadow-sm border border-yellow-100">
              <p className="text-xs text-yellow-800 font-bold uppercase tracking-wider mb-2">
                Trail Terpopuler
              </p>
              <p className="text-blue-900 font-bold text-xl">
                Gunung Tangkuban Perahu
              </p>
            </div>

            <div className="bg-white p-5 shadow-sm border border-gray-100 flex items-center">
              <p className="text-slate-700">
                <span className="font-bold text-3xl text-blue-600 mr-2">
                  70%
                </span>
                Trail berada di kategori mudah-sedang, cocok untuk pemula
              </p>
            </div>
          </div>

          {/* CENTER ROW: Weather + Pie (SIDE BY SIDE) */}
          <div className="grid grid-cols-2 gap-6">
            {/* Weather */}
            <div className="bg-white p-4 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-4 text-center">
                Prakiraan Cuaca Hari Ini
              </h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyWeatherData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={false}
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis
                      yAxisId="left"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "0px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      dataKey="temp"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      name="Suhu (°C)"
                    />
                    <Line
                      yAxisId="right"
                      dataKey="humidity"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      name="Kelembaban (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Difficulty */}
            <div className="bg-white p-4 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-4 text-center">
                Distribusi Kesulitan Trail
              </h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={difficultyData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {difficultyData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} strokeWidth={0} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "0px",
                        border: "1px solid #e5e7eb",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BOTTOM SECTION: BAR CHART (FULL WIDTH) ===================== */}
      <div className="w-full px-8 py-8">
        <div className="bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-6">
            Perbandingan Jarak & Elevasi Trail
          </h3>
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={distanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="name"
                  angle={0}
                  tickFormatter={(val) => val.split(" ")[0]}
                  tick={{ fontSize: 11, fill: "#6b7280" }}
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#3b82f6"
                  tick={{ fill: "#3b82f6", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#10b981"
                  tick={{ fill: "#10b981", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "0px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="distance"
                  fill="#3b82f6"
                  name="Jarak (km)"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  yAxisId="right"
                  dataKey="elevation"
                  fill="#10b981"
                  name="Elevasi (m)"
                  radius={[0, 0, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};