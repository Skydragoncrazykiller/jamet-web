// src/components/trails/TrailFilter.jsx
import { Search, Filter } from "lucide-react";

export const TrailFilter = ({
  searchTerm,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedLocation,
  onLocationChange,
  distanceRange,
  onDistanceRangeChange,
  locations = ["all"], // ✅ DEFAULT VALUE
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative md:col-span-2">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari gunung / lokasi..."
            value={searchTerm || ""} // ✅ TAMBAHIN INI JUGA
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-250"
          />
        </div>

        {/* Difficulty */}
        <div className="relative">
          <Filter
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <select
            value={selectedDifficulty || "all"} // ✅ DAN INI
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-250"
          >
            <option value="all">Semua Tingkat</option>
            <option value="easy">Mudah</option>
            <option value="medium">Sedang</option>
            <option value="hard">Sulit</option>
          </select>
        </div>

        {/* Location */}
        <div className="relative">
          <Filter
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <select
            value={selectedLocation || "all"} // ✅ DAN INI
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-250"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === "all" ? "Semua Lokasi" : loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Distance Slider */}
      <div className="mt-4">
        <label className="text-sm font-semibold text-gray-700">
          Maks Jarak: {distanceRange?.[1] || 25} km
        </label>
        <input
          type="range"
          min={0}
          max={25}
          value={distanceRange?.[1] || 25}
          onChange={(e) => onDistanceRangeChange([0, Number(e.target.value)])}
          className="w-full mt-2"
        />
      </div>
    </div>
  );
};
