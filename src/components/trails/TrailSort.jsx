// src/components/trails/TrailSort.jsx
import { ArrowUpDown } from "lucide-react";

export const TrailSort = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-2 bg-white shadow-sm rounded-lg px-4 py-2">
      <ArrowUpDown size={18} className="text-gray-500" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="text-sm outline-none cursor-pointer bg-transparent"
      >
        <option value="name-asc">Nama (A → Z)</option>
        <option value="name-desc">Nama (Z → A)</option>
        <option value="distance-asc">Jarak Terpendek</option>
        <option value="distance-desc">Jarak Terjauh</option>
        <option value="rating-desc">Rating Tertinggi</option>
        <option value="rating-asc">Rating Terendah</option>
      </select>
    </div>
  );
};

