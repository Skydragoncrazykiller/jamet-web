// src/hooks/useTrails.js
import { useState, useMemo } from "react";

export const useTrails = (initialTrails) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [distanceRange, setDistanceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState("name-asc"); // default: A-Z

  // Generate daftar lokasi unik untuk filter
  const locations = useMemo(() => {
    const locs = initialTrails.map((t) => t.location);
    return ["all", ...new Set(locs)];
  }, [initialTrails]);

  // Filtering & Sorting utama
  const filteredTrails = useMemo(() => {
    return initialTrails
      .filter((trail) => {
        const matchesSearch =
          trail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trail.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDifficulty =
          selectedDifficulty === "all" ||
          trail.difficulty === selectedDifficulty;

        const matchesLocation =
          selectedLocation === "all" || trail.location === selectedLocation;

        const matchesDistance =
          trail.distance >= distanceRange[0] &&
          trail.distance <= distanceRange[1];

        return (
          matchesSearch &&
          matchesDifficulty &&
          matchesLocation &&
          matchesDistance
        );
      })

      // Sorting Logic Lengkap 🔥
      .sort((a, b) => {
        switch (sortBy) {
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          case "distance-asc":
            return a.distance - b.distance;
          case "distance-desc":
            return b.distance - a.distance;
          case "rating-desc":
            return b.rating - a.rating;
          case "rating-asc":
            return a.rating - b.rating;
          default:
            return 0;
        }
      });
  }, [
    initialTrails,
    searchTerm,
    selectedDifficulty,
    selectedLocation,
    distanceRange,
    sortBy,
  ]);

  return {
    trails: filteredTrails,
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
  };
};

