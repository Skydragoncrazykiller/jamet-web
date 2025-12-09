
import { Clock, MapPin, TrendingUp } from "lucide-react";
import { Badge } from "../common/Badge";  // Pastikan Badge sudah ada di components/common

export const Card = ({ trail, className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {/* Gambar */}
      <img
        src={trail.imageUrl}
        alt={trail.name}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      {/* Konten */}
      <div className="p-6 space-y-4">
        {/* Nama Jalur */}
        <h3 className="text-xl font-semibold">{trail.name}</h3>

        {/* Lokasi */}
        <div className="flex items-center gap-2 text-sm text-gray-200">
          <MapPin size={16} />
          <p>{trail.location}</p>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-gray-100">{trail.description}</p>

        {/* Info Durasi, Jarak, dan Keamanan */}
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{trail.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={16} />
            <span>{trail.distance}</span>
          </div>
        </div>

        {/* Badge Keamanan */}
        <div className="mt-4">
          <Badge color={trail.safetyColor}>{trail.safety}</Badge>
        </div>
      </div>
    </div>
  );
};
S
// export const Card = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
//     >
//       {children}
//     </div>
//   );
// };
