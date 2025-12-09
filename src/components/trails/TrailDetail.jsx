// src/components/trails/TrailDetail.jsx

import { MapPin, Mountain, Timer, Star, TrendingUp, Ruler, Shieldcheck, Droplet, Wind, Cloud} from "lucide-react";
import useWeather from "../../hooks/useWeather";
import { getWeatherIcon } from "../../utils/weatherAPI";
import { TrailMap } from "../map/TrailMap";


export const TrailDetail = ({ trail, invisible}) => {
  const [lat, lng] = trail.coordinates ?? [];
  const { weather } = useWeather(lat, lng);

  
  if (!trail) return null;

  return (
    <div className="bg-white rounded-2xl p-5 md:p-8 shadow-xl max-h-[80vh] overflow-y-auto space-y-6">
      
      {/* Gambar */}
      <div className="relative">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-56 md:h-72 object-cover rounded-xl"
        />

        {/* Weather badge kecil */}
        {weather && (
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
            <img
              src={getWeatherIcon(weather.weather?.[0]?.icon)}
              alt="cuaca"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold text-gray-700">
              {Math.round(weather.main.temp)}°C
            </span>
          </div>
        )}
      </div>

      {/* Title + Location */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
          {trail.name}
        </h2>
        <p className="flex items-center gap-2 text-gray-600 mt-1">
          <MapPin size={18} /> {trail.location}
        </p>
      </div>

      {/* Main info chips */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        <InfoChip icon={<Mountain size={18} />} label="Kesulitan" value={trail.difficulty} />
        <InfoChip icon={<TrendingUp size={18} />} label="Elevasi" value={`${trail.elevation} m`} />
        <InfoChip icon={<Timer size={18} />} label="Durasi" value={trail.duration} />
        <InfoChip icon={<Star size={18} className="text-yellow-500" />} label="Rating" value={trail.rating} />
        <InfoChip icon={<Mountain size={18} />} label="Jarak" value={`${trail.distance} km`} />
      </div>

    
{/* BAGIAN 3.5: Detail Cuaca Diperbesar */}
{weather && (
    <div className="pt-4">
        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-1">
             Cuaca Saat Ini
        </h3>
        
        {/* Detail Cuaca Utama (Suhu dan Deskripsi) */}
        <div className="bg-blue-50/80 p-4 rounded-xl mb-4 flex items-center justify-between shadow-inner">
            <div className="flex items-center gap-3">
                {/* Icon cuaca besar */}
                <img
                    src={getWeatherIcon(weather.weather?.[0]?.icon)}
                    alt="cuaca"
                    className="w-10 h-10"
                />
                <div>
                    {/* Suhu diperbesar */}
                    <p className="text-xl font-bold text-black-800">
                        {Math.round(weather.main.temp)}°C
                    </p>
                    {/* Deskripsi cuaca */}
                    <p className="capitalize text-gray-700 text-sm">
                        {weather.weather?.[0]?.description}
                    </p>
                </div>
            </div>
            {/* Info Tambahan Tekanan Udara */}
             <div>
                <p className="text-xl font-bold text-black-800">{weather.main.pressure} hPa</p> 
                 <p className="capitalize text-gray-700 text-sm">Tekanan</p> 
             </div>
        </div>

        {/* Detail Angin, Kelembaban, dan Awan (Grid 3 Kolom dengan Ikon dan Teks Besar) */}
        <div className="grid grid-cols-3 gap-3">
            
            {/* Kecepatan Angin */}
            <div className="bg-white p-3 rounded-lg border border-gray-100 text-center shadow-sm">
                <Wind size={24} className="mx-auto text-blue-500 mb-1" />
                <p className="text-xl font-bold text-gray-800">{weather.wind.speed} m/s</p>
                <p className="text-xs text-gray700">Kecepatan Angin</p>
            </div>
            
            {/* Kelembaban */}
            <div className="bg-white p-3 rounded-lg border border-gray-100 text-center shadow-sm">
                <Droplet size={24} className="mx-auto text-cyan-500 mb-1" />
                <p className="text-xl font-bold text-gray-800">{weather.main.humidity}%</p>
                <p className="text-xs text-gray700">Kelembaban</p>
            </div>
            
            {/* Awan */}
            <div className="bg-white p-3 rounded-lg border border-gray-100 text-center shadow-sm">
                <Cloud size={24} className="mx-auto text-gray-400 mb-1" />
                <p className="text-xl font-bold text-gray-800">{weather.clouds.all}%</p>
                <p className="text-xs text-gray700">Persentase Awan</p>
            </div>
        </div>
    </div>
)}

      {/* Deskripsi */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">Deskripsi</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {trail.description}
        </p>
      </div>

      {/* Tips */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">Tips Keamanan</h3>
        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
          {trail.safetyTips?.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      </div>

      {/* 🌍 Peta Lokasi */}
      {lat && lng && (
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Peta Lokasi</h3>
          <div className="h-64 rounded-xl overflow-hidden shadow-lg"> 
            <TrailMap
              lat={lat}
              lng={lng}
              name={trail.name}
              // Meneruskan seluruh objek trail agar ID-nya bisa dipakai sebagai key/trigger
              trail={trail} 
            />
          </div>
        </div>
      )}
      {/* Akhir Perbaikan Peta Lokasi */}
    </div>
  );
};



const InfoChip = ({ icon, value, label }) => (
  <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-center">
    <div className="flex justify-center text-gray-700 mb-1">{icon}</div>
    <p className="font-bold text-gray-900 text-xs md:text-sm">{value}</p>
    <p className="text-[10px] text-gray-500">{label}</p>
  </div>
);

