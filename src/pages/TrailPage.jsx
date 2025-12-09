// src/pages/TrailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { trails } from "../data/trails";
import { TrailDetail } from "../components/trails/TrailDetail";

export const TrailPage = () => {
  const { id } = useParams();
  const trail = trails.find((t) => String(t.id) === String(id));

  if (!trail) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-500">Trail tidak ditemukan.</p>
          <Link to="/trails" className="text-blue-600 underline">Kembali ke daftar</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/trails" className="text-blue-600 underline">← Kembali</Link>
      </div>
      <TrailDetail trail={trail} />
    </main>
  );
};

