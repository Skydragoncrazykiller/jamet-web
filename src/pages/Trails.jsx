// src/pages/Trails.jsx
import React, { useState } from "react";
import { trails as initialTrails } from "../data/trails";
import { useTrails } from "../hooks/useTrails";
import { TrailGrid } from "../components/trails/TrailGrid";
import { TrailFilter } from "../components/trails/TrailFilter";
import { TrailSort } from "../components/trails/TrailSort";
import { Modal } from "../components/common/Modal";
import { TrailDetail } from "../components/trails/TrailDetail";
import { Link } from "react-router-dom";

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

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Jalur Hiking - Jawa Barat</h1>

        <div className="flex items-center gap-2">
          <TrailSort sortBy={sortBy} setSortBy={setSortBy} />
          <Link to="/analytics" className="text-sm text-blue-600 underline hidden md:inline">
            Analytics
          </Link>
        </div>
      </div>

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

      <div className="mb-4 text-gray-700">
        Menampilkan <strong>{trails.length}</strong> jalur.
      </div>

      <TrailGrid trails={trails} onCardClick={(t) => setSelectedTrail(t)} />

      <Modal isOpen={!!selectedTrail} onClose={() => setSelectedTrail(null)}>
        {selectedTrail && (
          <div className="space-y-4">
            <TrailDetail trail={selectedTrail} />
            <div className="text-right">
              <Link
                to={`/trails/${selectedTrail.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={() => setSelectedTrail(null)}
              >
                Lihat Halaman Detail
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};
