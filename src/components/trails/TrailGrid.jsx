// src/components/trails/TrailGrid.jsx
import React from "react";
import { TrailCard } from "./TrailCard";

export const TrailGrid = ({ trails, onCardClick }) => {
  if (!trails || trails.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Tidak ada trail yang cocok.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {trails.map((trail) => (
        <div key={trail.id} onClick={() => onCardClick(trail)}>
          <TrailCard trail={trail} />
        </div>
      ))}
    </div>
  );
};
