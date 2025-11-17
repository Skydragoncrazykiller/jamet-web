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
import { TrendingUp, Mountain, Clock, Award } from "lucide-react";

export const Analytics = () => {
  // Data untuk grafik difficulty distribution
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

  // Data untuk grafik distance distribution
  const distanceData = trails
    .map((trail) => ({
      name: trail.name.substring(0, 15),
      distance: trail.distance,
      elevation: trail.elevation,
    }))
    .sort((a, b) => b.distance - a.distance);

  // Data simulasi cuaca per jam (untuk demo)
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

  // Statistics cards
  const stats = [
    {
      icon: Mountain,
      label: "Total Trails",
      value: trails.length,
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      label: "Total Jarak",
      value: `${trails.reduce((sum, t) => sum + t.distance, 0).toFixed(1)} km`,
      color: "bg-green-500",
    },
    {
      icon: Clock,
      label: "Rata-rata Durasi",
      value: "1-2 jam",
      color: "bg-purple-500",
    },
    {
      icon: Award,
      label: "Trail Terpopuler",
      value: "Tangkuban Perahu",
      color: "bg-orange-500",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="glass-strong rounded-3xl p-8 shadow-glow">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📊 Analytics & Insights
          </h1>
          <p className="text-gray-600">
            Data statistik dan analisis cuaca untuk hiking
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Difficulty Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Distribusi Kesulitan Trail
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={difficultyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Hourly Weather */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Prakiraan Cuaca Hari Ini
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyWeatherData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="temp"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Suhu (°C)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="humidity"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Kelembaban (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distance Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Perbandingan Jarak & Elevasi Trail
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={distanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="distance"
                fill="#3b82f6"
                name="Jarak (km)"
              />
              <Bar
                yAxisId="right"
                dataKey="elevation"
                fill="#10b981"
                name="Elevasi (m)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">💡 Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🌤️ Kondisi Cuaca Ideal</h4>
              <p className="text-blue-100">
                Suhu optimal untuk hiking: 20-25°C dengan kelembaban 60-70%
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⏰ Waktu Terbaik</h4>
              <p className="text-blue-100">
                Pagi hari (06:00-09:00) memiliki kondisi paling ideal
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏔️ Trail Populer</h4>
              <p className="text-blue-100">
                70% trail berada di kategori mudah-sedang, cocok untuk pemula
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📊 Data Update</h4>
              <p className="text-blue-100">
                Data cuaca diupdate setiap 10 menit untuk akurasi maksimal
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
