import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// FIX Leaflet icon issue - menggunakan CDN
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom marker icon untuk trail
const trailIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Marker icon untuk distance measurement points
const measureIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

// Component untuk handle distance measurement
function DistanceMeasurement({ measureMode, onMeasure }) {
  const [points, setPoints] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);

  // Function untuk menghitung jarak antara dua koordinat (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius bumi dalam km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useMapEvents({
    click(e) {
      if (!measureMode) return;

      const newPoint = [e.latlng.lat, e.latlng.lng];
      const newPoints = [...points, newPoint];
      setPoints(newPoints);

      // Hitung total jarak
      if (newPoints.length > 1) {
        let distance = 0;
        for (let i = 1; i < newPoints.length; i++) {
          distance += calculateDistance(
            newPoints[i - 1][0],
            newPoints[i - 1][1],
            newPoints[i][0],
            newPoints[i][1]
          );
        }
        setTotalDistance(distance);
        onMeasure(distance);
      }
    },
    dblclick() {
      if (!measureMode) return;
      // Reset measurement
      setPoints([]);
      setTotalDistance(0);
      onMeasure(0);
    },
  });

  // Reset saat mode berubah
  useEffect(() => {
    if (!measureMode) {
      setPoints([]);
      setTotalDistance(0);
    }
  }, [measureMode]);

  return (
    <>
      {/* Render markers untuk setiap titik */}
      {points.map((point, idx) => (
        <Marker key={idx} position={point} icon={measureIcon}>
          <Popup>
            <div className="text-sm">
              <strong>Titik {idx + 1}</strong>
              {idx > 0 && (
                <div className="mt-1">
                  Jarak dari titik sebelumnya:{" "}
                  {calculateDistance(
                    points[idx - 1][0],
                    points[idx - 1][1],
                    point[0],
                    point[1]
                  ).toFixed(2)}{" "}
                  km
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Render polyline yang menghubungkan titik-titik */}
      {points.length > 1 && (
        <Polyline
          positions={points}
          pathOptions={{
            color: "red",
            weight: 3,
            dashArray: "10, 10",
            opacity: 0.8,
          }}
        />
      )}

      {/* Total distance popup di titik terakhir */}
      {points.length > 1 && (
        <Popup
          position={points[points.length - 1]}
          autoClose={false}
          closeButton={false}
        >
          <div className="text-sm font-semibold text-red-600">
            Total Jarak: {totalDistance.toFixed(2)} km
          </div>
        </Popup>
      )}
    </>
  );
}

export const MapView = ({ trails, onTrailClick, measureMode }) => {
  const [measuredDistance, setMeasuredDistance] = useState(0);
  const bandungCenter = [-6.9175, 107.6191];

  // FILTER trails yang punya koordinat valid
  const validTrails = trails.filter(
    (trail) =>
      trail.coordinates &&
      trail.coordinates.lat &&
      trail.coordinates.lng &&
      !isNaN(trail.coordinates.lat) &&
      !isNaN(trail.coordinates.lng)
  );

  const getDifficultyBadge = (difficulty) => {
    const badges = {
      mudah: { color: "bg-green-500", text: "Mudah" },
      sedang: { color: "bg-yellow-500", text: "Sedang" },
      sulit: { color: "bg-red-500", text: "Sulit" },
    };
    return badges[difficulty] || badges.mudah;
  };

  const getSafetyBadge = (score) => {
    if (score >= 80) return { color: "bg-green-500", text: "Aman" };
    if (score >= 60) return { color: "bg-yellow-500", text: "Hati-hati" };
    return { color: "bg-red-500", text: "Berbahaya" };
  };

  return (
    <div className="relative">
      {/* Warning jika ada trails tanpa koordinat */}
      {trails.length > validTrails.length && (
        <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ {trails.length - validTrails.length} jalur tidak ditampilkan
            karena koordinat belum lengkap. Silakan lengkapi data di{" "}
            <code>trails.js</code>
          </p>
        </div>
      )}

      {/* Distance Display */}
      {measureMode && measuredDistance > 0 && (
        <div className="absolute top-4 right-4 z-[1000] bg-white p-4 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">Total Jarak Diukur:</p>
          <p className="text-2xl font-bold text-red-600">
            {measuredDistance.toFixed(2)} km
          </p>
          <p className="text-xs text-gray-500 mt-1">Double-click untuk reset</p>
        </div>
      )}

      <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={bandungCenter}
          zoom={11}
          style={{ height: "100%", width: "100%", zIndex: 1 }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Distance Measurement Component */}
          <DistanceMeasurement
            measureMode={measureMode}
            onMeasure={setMeasuredDistance}
          />

          {/* Trail Markers */}
          {validTrails.map((trail) => (
            <Marker
              key={trail.id}
              position={[trail.coordinates.lat, trail.coordinates.lng]}
              icon={trailIcon}
              eventHandlers={{
                click: () => {
                  if (!measureMode && onTrailClick) onTrailClick(trail);
                },
              }}
            >
              <Tooltip
                permanent
                direction="top"
                offset={[0, -32]}
                className="custom-tooltip"
                opacity={0.9}
              >
                <div className="text-center">
                  <span className="font-bold text-sm text-slate-800">
                    {trail.name}
                  </span>
                </div>
              </Tooltip>

              <Popup maxWidth={280} className="custom-popup">
                <div className="p-2">
                  {trail.image && (
                    <img
                      src={trail.image}
                      alt={trail.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                  )}

                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {trail.name}
                  </h3>

                  <p className="text-sm text-slate-600 mb-3 flex items-center gap-1">
                    📍 {trail.location}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-xs">
                      <span className="text-slate-500">Ketinggian:</span>
                      <p className="font-semibold text-slate-700">
                        {trail.elevation} mdpl
                      </p>
                    </div>
                    <div className="text-xs">
                      <span className="text-slate-500">Durasi:</span>
                      <p className="font-semibold text-slate-700">
                        {trail.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-3">
                    <span
                      className={`${
                        getDifficultyBadge(trail.difficulty).color
                      } text-white text-xs px-2 py-1 rounded-full font-medium`}
                    >
                      {getDifficultyBadge(trail.difficulty).text}
                    </span>
                    <span
                      className={`${
                        getSafetyBadge(trail.safetyScore).color
                      } text-white text-xs px-2 py-1 rounded-full font-medium`}
                    >
                      Safety: {trail.safetyScore}%
                    </span>
                  </div>

                  {trail.weather && (
                    <div className="bg-blue-50 p-2 rounded-lg mb-3">
                      <p className="text-xs text-slate-600 mb-1">
                        Cuaca saat ini:
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">
                          {Math.round(trail.weather.main.temp)}°C
                        </span>
                        <span className="text-xs text-slate-600 capitalize">
                          {trail.weather.weather[0].description}
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => onTrailClick && onTrailClick(trail)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Lihat Detail & Prediksi
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <style>{`
          .custom-tooltip {
            background-color: rgba(255, 255, 255, 0.95) !important;
            border: 2px solid #E67E22 !important;
            border-radius: 8px !important;
            padding: 4px 8px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
          }
          
          .custom-tooltip::before {
            border-top-color: #E67E22 !important;
          }

          .leaflet-popup-content-wrapper {
            border-radius: 12px !important;
            padding: 0 !important;
          }

          .leaflet-popup-content {
            margin: 0 !important;
            width: 280px !important;
          }
        `}</style>
      </div>
    </div>
  );
};
