import { useState, useEffect } from "react";
import { Loading } from "../components/common/Loading";
import { EmptyState } from "../components/common/EmptyState";
import { useLocation } from "react-router-dom";

export const DummyPages = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      setLoading(false);  // Selesai loading
      setData([]); // Simulasikan tidak ada data
    }, 2000); // Simulasi loading selama 2 detik
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{title} Page</h2>

      {loading ? (
        <Loading label={`Loading ${title} data...`} />
      ) : data.length === 0 ? (
        <EmptyState
          title={`No ${title} data yet`}
          description="Tidak ada data yang ditemukan untuk halaman ini."
        />
      ) : (
        <div>{/* Your data content here */}</div>
      )}

      <p className="mt-4 text-gray-500 text-sm">Current Path: {location.pathname}</p>
    </div>
  );
};
