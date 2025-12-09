import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon untuk trail
const trailIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Icon gunung
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const MapView = ({ trails, onTrailClick }) => {
  // Center map di Bandung
  const bandungCenter = [-6.9175, 107.6191];

  // Fungsi untuk mendapatkan badge warna berdasarkan difficulty
  const getDifficultyBadge = (difficulty) => {
    const badges = {
      mudah: { color: "bg-green-500", text: "Mudah" },
      sedang: { color: "bg-yellow-500", text: "Sedang" },
      sulit: { color: "bg-red-500", text: "Sulit" },
    };
    return badges[difficulty] || badges.mudah;
  };

  // Fungsi untuk mendapatkan badge safety
  const getSafetyBadge = (score) => {
    if (score >= 80) return { color: "bg-green-500", text: "Aman" };
    if (score >= 60) return { color: "bg-yellow-500", text: "Hati-hati" };
    return { color: "bg-red-500", text: "Berbahaya" };
  };

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-mountain">
      <MapContainer
        center={bandungCenter}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        {/* Tile Layer - Menggunakan OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Markers untuk setiap trail */}
        {trails.map((trail) => (
          <Marker
            key={trail.id}
            position={[trail.coordinates.lat, trail.coordinates.lng]}
            icon={trailIcon}
            eventHandlers={{
              click: () => {
                if (onTrailClick) onTrailClick(trail);
              },
            }}
          >
            {/* Tooltip - Nama tempat yang selalu muncul */}
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

            {/* Popup - Detail lengkap saat diklik */}
            <Popup maxWidth={280} className="custom-popup">
              <div className="p-2">
                {/* Header dengan gambar */}
                {trail.image && (
                  <img
                    src={trail.image}
                    alt={trail.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                )}

                {/* Nama Trail */}
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {trail.name}
                </h3>

                {/* Lokasi */}
                <p className="text-sm text-slate-600 mb-3 flex items-center gap-1">
                  📍 {trail.location}
                </p>

                {/* Info Grid */}
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

                {/* Badges */}
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

                {/* Weather Info */}
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

                {/* CTA Button */}
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

      {/* Custom CSS untuk Tooltip & Popup */}
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
  );
};
