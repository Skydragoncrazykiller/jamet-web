// src/pages/MapPage.jsx
import { useState, useMemo } from "react";
import { trails } from "../data/trails";
import { MapView } from "../components/map/MapView";
import { TrailFilter } from "../components/trails/TrailFilter";
import { Modal } from "../components/common/Modal";
import { TrailDetail } from "../components/trails/TrailDetail";
import { Button } from "../components/common/Button";
import { Ruler, X } from "lucide-react";

export const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedSafety, setSelectedSafety] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [measureMode, setMeasureMode] = useState(false);

  // Get unique locations
  const locations = useMemo(() => {
    const locs = trails.map((t) => t.location);
    return ["all", ...new Set(locs)];
  }, []);

  // DYNAMIC MAX DISTANCE - berdasarkan trail terjauh
  const maxDistance = useMemo(() => {
    const distances = trails
      .map((t) => t.distance)
      .filter((d) => d && !isNaN(d));
    return distances.length > 0 ? Math.max(...distances) : 50;
  }, []);

  // Initialize distance range dengan max yang dinamis
  const [distanceRange, setDistanceRange] = useState([0, maxDistance]);

  // Filtering trails - FIXED FILTERING LOGIC
  const filteredTrails = useMemo(() => {
    return trails.filter((trail) => {
      const matchesSearch =
        trail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trail.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDifficulty =
        selectedDifficulty === "all" || trail.difficulty === selectedDifficulty;

      const matchesSafety =
        selectedSafety === "all" || trail.safety === selectedSafety;

      const matchesLocation =
        selectedLocation === "all" || trail.location === selectedLocation;

      // FIX: Distance filter - pastikan trail.distance ada
      const matchesDistance =
        !trail.distance ||
        (trail.distance >= distanceRange[0] &&
          trail.distance <= distanceRange[1]);

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesSafety &&
        matchesLocation &&
        matchesDistance
      );
    });
  }, [
    searchTerm,
    selectedDifficulty,
    selectedSafety,
    selectedLocation,
    distanceRange,
  ]);

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header - CLEAN tanpa border */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Peta Jalur Hiking
          </h1>

          {/* Distance Measurement Toggle */}
          <Button
            variant={measureMode ? "primary" : "outline"}
            onClick={() => setMeasureMode(!measureMode)}
            className="flex items-center gap-2"
          >
            <Ruler size={20} />
            {measureMode ? "Mode Ukur Aktif" : "Ukur Jarak"}
          </Button>
        </div>

        {/* Info Box - CLEAN design */}
        {measureMode && (
          <div className="mb-4 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
            <div className="flex-1">
              <p className="text-sm text-blue-800">
                <strong>Mode Ukur Jarak:</strong> Klik pada peta untuk
                menambahkan titik. Double-click untuk reset pengukuran.
              </p>
            </div>
            <button
              onClick={() => setMeasureMode(false)}
              className="text-blue-600 hover:text-blue-800"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Filter Section */}
        <TrailFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          selectedSafety={selectedSafety}
          onSafetyChange={setSelectedSafety}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          locations={locations}
          distanceRange={distanceRange}
          onDistanceRangeChange={setDistanceRange}
        />

        {/* Stats - CLEAN tanpa border */}
        <div className="mb-4 text-gray-700">
          Menampilkan <strong>{filteredTrails.length}</strong> dari{" "}
          <strong>{trails.length}</strong> jalur hiking
        </div>

        {/* Map Component dengan Distance Measurement */}
        <MapView
          trails={filteredTrails}
          onTrailClick={setSelectedTrail}
          measureMode={measureMode}
        />

        {/* Modal Detail */}
        <Modal isOpen={!!selectedTrail} onClose={() => setSelectedTrail(null)}>
          {selectedTrail && <TrailDetail trail={selectedTrail} />}
        </Modal>
      </div>
    </main>
  );
};
