// src/pages/Analytics.jsx - WITH MORE INSIGHTS
import React from "react";
import { trails } from "../data/trails";
import { VideoBackground } from "../components/layout/VideoBackground";
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
  ScatterChart,
  Scatter,
  ZAxis,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Mountain,
  Calendar,
  ThermometerSun,
  Newspaper,
  Lightbulb,
  ExternalLink,
  Award,
  MapPin,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

export const Analytics = () => {
  // Difficulty Distribution
  const difficultyData = [
    {
      name: "Mudah",
      value: trails.filter((t) => t.difficulty === "easy").length,
      color: "#3b82f6",
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

  const scatterData = trails.map((t) => ({
    name: t.name.substring(0, 15),
    elevation: t.elevation,
    distance: t.distance,
    difficulty: t.difficulty,
    rating: t.rating || 4,
  }));

  const difficultyStats = ["easy", "medium", "hard"].map((level) => {
    const filtered = trails.filter((t) => t.difficulty === level);
    const avgDist = (
      filtered.reduce((sum, t) => sum + t.distance, 0) / filtered.length
    ).toFixed(1);
    const avgElev = Math.round(
      filtered.reduce((sum, t) => sum + t.elevation, 0) / filtered.length
    );
    return {
      difficulty:
        level === "easy" ? "Mudah" : level === "medium" ? "Sedang" : "Sulit",
      avgDistance: parseFloat(avgDist),
      avgElevation: avgElev,
    };
  });

  // Location Distribution
  const locationData = trails.reduce((acc, trail) => {
    acc[trail.location] = (acc[trail.location] || 0) + 1;
    return acc;
  }, {});

  const locationChartData = Object.entries(locationData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, value]) => ({ name, value }));

  const date = new Date();
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const totalTrails = trails.length;
  const totalDistance = trails
    .reduce((sum, t) => sum + t.distance, 0)
    .toFixed(1);
  const avgRating = (
    trails.reduce((sum, t) => sum + (t.rating || 0), 0) / trails.length
  ).toFixed(1);
  const highestPeak = trails.reduce(
    (max, t) => (t.elevation > max ? t.elevation : max),
    0
  );

  // INSIGHTS DATA
  const insights = [
    {
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
      title: "Tren Hiking Meningkat",
      value: "+32%",
      description: "Peningkatan jumlah pendaki dibanding tahun lalu",
    },
    {
      icon: Mountain,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: "Gunung Paling Populer",
      value: "Tangkuban Perahu",
      description: "Dengan 1000+ review dari pendaki",
    },
    {
      icon: AlertTriangle,
      color: "text-amber-600",
      bg: "bg-amber-50",
      title: "Peak Season",
      value: "Juni - Agustus",
      description: "Musim puncak pendakian dengan cuaca optimal",
    },
    {
      icon: ThermometerSun,
      color: "text-red-600",
      bg: "bg-red-50",
      title: "Rata-rata Suhu",
      value: "24-27°C",
      description: "Kondisi cuaca ideal untuk hiking",
    },
  ];

  // News & Tips Data
  const newsItems = [
    {
      title: "5 Gunung di Indonesia yang Erupsi Sepanjang 2024",
      source: "Tempo.co",
      date: "18 Nov 2024",
      url: "https://www.tempo.co/lingkungan/5-gunung-di-indonesia-yang-erupsi-sepanjang-2024-terbaru-gunung-lewotobi-1169660",
      category: "berita",
    },
    {
      title: "Tips Mendaki Gunung untuk Pemula",
      source: "HelloSehat",
      date: "17 Sep 2024",
      url: "https://hellosehat.com/kebugaran/olahraga-lainnya/persiapan-naik-gunung-untuk-pemula/",
      category: "tips",
    },
    {
      title: "Kebakaran Hutan di Gunung Tangkuban Perahu",
      source: "PVMBG",
      date: "4 Sep 2024",
      url: "https://vsi.esdm.go.id/press-release/kebakaran-hutan-di-gunung-tangkuban-parahu-4-september-2024",
      category: "berita",
    },
    {
      title: "Panduan Lengkap Pendakian untuk Pemula",
      source: "Indonesia.go.id",
      date: "2024",
      url: "https://indonesia.go.id/kategori/pariwisata/8666/inilah-7-gunung-untuk-pendaki-pemula",
      category: "tips",
    },
    {
      title: "Peningkatan Aktivitas Gunung Salak dan Gede",
      source: "BMKG",
      date: "Dec 2024",
      url: "#",
      category: "berita",
    },
    {
      title: "10 Perlengkapan Wajib Pendaki Pemula",
      source: "Kompas.com",
      date: "Nov 2024",
      url: "#",
      category: "tips",
    },
  ];

  return (
    <VideoBackground>
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-slate-800/95 backdrop-blur-sm text-white rounded-xl p-8 mb-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
                <p className="text-slate-300 text-lg">
                  Data Hiking & Cuaca Jawa Barat
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
                <Calendar size={24} />
                <div>
                  <p className="text-xs opacity-80 uppercase tracking-wider">
                    Updated
                  </p>
                  <p className="text-lg font-bold">{formattedDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Mountain size={24} className="text-slate-800" />
                <p className="text-sm text-slate-600 font-semibold">
                  Total Trails
                </p>
              </div>
              <p className="text-3xl font-bold text-slate-800">{totalTrails}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={24} className="text-blue-600" />
                <p className="text-sm text-slate-600 font-semibold">
                  Total Jarak
                </p>
              </div>
              <p className="text-3xl font-bold text-slate-800">
                {totalDistance}{" "}
                <span className="text-lg text-slate-500">km</span>
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-2">
                <Award size={24} className="text-amber-600" />
                <p className="text-sm text-slate-600 font-semibold">
                  Rata-rata Rating
                </p>
              </div>
              <p className="text-3xl font-bold text-slate-800">
                {avgRating} <span className="text-lg text-slate-500">/ 5</span>
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={24} className="text-slate-700" />
                <p className="text-sm text-slate-600 font-semibold">
                  Puncak Tertinggi
                </p>
              </div>
              <p className="text-3xl font-bold text-slate-800">
                {highestPeak}{" "}
                <span className="text-lg text-slate-500">mdpl</span>
              </p>
            </div>
          </div>

          {/* INSIGHTS SECTION */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-lg">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-xl">
              <Lightbulb className="text-amber-500" size={24} />
              Key Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {insights.map((insight, idx) => (
                <div
                  key={idx}
                  className={`${insight.bg} border-2 border-${
                    insight.color.split("-")[1]
                  }-200 rounded-lg p-4`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 ${insight.bg} rounded-lg`}>
                      <insight.icon size={20} className={insight.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-600 mb-1">
                        {insight.title}
                      </p>
                      <p className="text-xl font-bold text-slate-800 mb-1">
                        {insight.value}
                      </p>
                      <p className="text-xs text-slate-600">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Difficulty Distribution */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-slate-800 mb-4">
                Distribusi Kesulitan
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={difficultyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {difficultyData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} strokeWidth={0} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Location Distribution */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-slate-800 mb-4">
                Distribusi Lokasi
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={locationChartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e2e8f0"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#64748b" }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 11, fill: "#64748b" }} />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="#3b82f6"
                      name="Jumlah Trail"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* News & Tips Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Newspaper size={20} className="text-red-600" />
                <h3 className="font-bold text-slate-800">Berita Terkini</h3>
              </div>
              <div className="space-y-3">
                {newsItems
                  .filter((item) => item.category === "berita")
                  .map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="p-4 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200 hover:border-red-400">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-red-100 text-red-600">
                            <Newspaper size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-slate-800 group-hover:text-slate-900 transition-colors line-clamp-2">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-slate-500">
                                {item.source}
                              </p>
                              <span className="text-xs text-slate-400">•</span>
                              <p className="text-xs text-slate-500">
                                {item.date}
                              </p>
                            </div>
                          </div>
                          <ExternalLink
                            size={14}
                            className="text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0"
                          />
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={20} className="text-blue-600" />
                <h3 className="font-bold text-slate-800">Tips & Panduan</h3>
              </div>
              <div className="space-y-3">
                {newsItems
                  .filter((item) => item.category === "tips")
                  .map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="p-4 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200 hover:border-blue-400">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                            <Lightbulb size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-slate-800 group-hover:text-slate-900 transition-colors line-clamp-2">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-slate-500">
                                {item.source}
                              </p>
                              <span className="text-xs text-slate-400">•</span>
                              <p className="text-xs text-slate-500">
                                {item.date}
                              </p>
                            </div>
                          </div>
                          <ExternalLink
                            size={14}
                            className="text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0"
                          />
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Scatter Chart */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-slate-800 mb-2">
              Analisis Elevasi vs Jarak Trail
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Visualisasi hubungan antara ketinggian dan jarak tempuh
            </p>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    type="number"
                    dataKey="distance"
                    name="Jarak"
                    unit=" km"
                    tick={{ fontSize: 11, fill: "#64748b" }}
                  />
                  <YAxis
                    type="number"
                    dataKey="elevation"
                    name="Elevasi"
                    unit=" m"
                    tick={{ fontSize: 11, fill: "#64748b" }}
                  />
                  <ZAxis
                    type="number"
                    dataKey="rating"
                    range={[50, 400]}
                    name="Rating"
                  />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend />
                  <Scatter
                    name="Mudah"
                    data={scatterData.filter((d) => d.difficulty === "easy")}
                    fill="#3b82f6"
                  />
                  <Scatter
                    name="Sedang"
                    data={scatterData.filter((d) => d.difficulty === "medium")}
                    fill="#f59e0b"
                  />
                  <Scatter
                    name="Sulit"
                    data={scatterData.filter((d) => d.difficulty === "hard")}
                    fill="#ef4444"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </VideoBackground>
  );
};
