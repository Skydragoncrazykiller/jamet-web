import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export const MapView = ({ trails, onTrailClick }) => {
  const bandungCenter = [-6.9175, 107.6191];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={bandungCenter}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {trails.map((trail) => (
          <Marker
            key={trail.id}
            position={trail.coordinates}
            eventHandlers={{
              click: () => onTrailClick && onTrailClick(trail),
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-1">{trail.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{trail.location}</p>
                <p className="text-xs text-gray-500">
                  {trail.distance} km • {trail.duration}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
