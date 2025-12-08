// src/components/map/TrailMap.jsx

import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 

// Fix icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


export const TrailMap = ({ lat, lng, name, trackCoordinates }) => {
  const position = useMemo(() => [lat, lng], [lat, lng]);

  // V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V
  // LOGIKA BARU UNTUK MENGHINDARI ERROR POLYLINE
  
  // 1. Cek apakah data trackCoordinates valid (minimal 2 titik untuk rute)
  const hasValidTrack = useMemo(() => {
    return trackCoordinates && 
           Array.isArray(trackCoordinates) && 
           trackCoordinates.length > 1; 
  }, [trackCoordinates]);

  // 2. Siapkan path (hanya menggunakan trackCoordinates jika valid)
  const trailPath = useMemo(() => {
    return hasValidTrack ? trackCoordinates : [];
  }, [trackCoordinates, hasValidTrack]);

  // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^

  // Style untuk garis rute pendakian
  const polylineOptions = {
    color: '#0D6EFD',
    weight: 4,
    opacity: 0.8,
    lineCap: 'round',
  };


  if (!lat || !lng) {
    return <div className="p-4 text-center text-red-500 bg-red-50 rounded-xl">Koordinat Peta tidak tersedia.</div>;
  }


  return (
    <MapContainer 
      center={position} 
      zoom={12} 
      scrollWheelZoom={true} 
      style={{ height: '100%', width: '100%' }}
      key={`${lat}-${lng}`}
    >
      
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* RUTE PENDAKIAN (Polyline) - HANYA RENDER JIKA ADA DATA VALID */}
      {hasValidTrack && (
        <Polyline path={trailPath} options={polylineOptions} />
      )}

      {/* Marker Lokasi Puncak/Start */}
      <Marker position={position}>
        <Popup>
          <strong>{name}</strong>
          <br />
          Titik Pusat/Puncak
        </Popup>
      </Marker>

    </MapContainer>
  );
};
