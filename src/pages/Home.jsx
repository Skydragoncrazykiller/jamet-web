import { useState, useMemo } from "react";
import { trails } from "../data/trails";
import { TrailCard } from "../components/trails/TrailCard";
import { TrailFilter } from "../components/trails/TrailFilter";
import { TrailDetail } from "../components/trails/TrailDetail";
import { MapView } from "../components/map/MapView";
import { Modal } from "../components/common/Modal";
import { Map, Grid } from "lucide-react";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedSafety, setSelectedSafety] = useState("all");
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  const filteredTrails = useMemo(() => {
    return trails.filter((trail) => {
      const matchesSearch =
        trail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trail.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty =
        selectedDifficulty === "all" || trail.difficulty === selectedDifficulty;
      return matchesSearch && matchesDifficulty;
    });
  }, [searchTerm, selectedDifficulty]);

  return (
    <main className="container mx-auto px-4 py-8">
      <TrailFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
        selectedSafety={selectedSafety}
        onSafetyChange={setSelectedSafety}
      />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {filteredTrails.length} Jalur Hiking Tersedia
        </h2>

        <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              viewMode === "grid"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Grid size={20} />
            <span className="hidden md:inline">Grid</span>
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              viewMode === "map"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Map size={20} />
            <span className="hidden md:inline">Peta</span>
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrails.map((trail) => (
            <div key={trail.id} onClick={() => setSelectedTrail(trail)}>
              <TrailCard trail={trail} />
            </div>
          ))}
        </div>
      ) : (
        <MapView trails={filteredTrails} onTrailClick={setSelectedTrail} />
      )}

      {filteredTrails.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            Tidak ada trail yang sesuai filter Anda
          </p>
        </div>
      )}

      <Modal isOpen={!!selectedTrail} onClose={() => setSelectedTrail(null)}>
        {selectedTrail && <TrailDetail trail={selectedTrail} />}
      </Modal>
    </main>
  );
};
