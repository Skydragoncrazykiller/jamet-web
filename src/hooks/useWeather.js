// src/hooks/useWeather.js
import { useState, useEffect } from "react";

// WAJIB GANTI BARIS DI BAWAH INI DENGAN KUNCI API ANDA YANG ASLI!
const OPENWEATHER_API_KEY = "4e7e695505fc5adcff9698618a5b6fd1"; // <-- GANTI BARIS INI!

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const useWeather = (lat, lng) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek jika koordinat tidak valid ATAU API key belum diganti/kosong
    if (!lat || !lng || !OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === "PASTE_KUNCI_API_ANDA_DI_SINI") {
      setLoading(false);
      return;
    }

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?lat=${lat}&lon=${lng}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=id`
        );
        
        // Periksa jika response tidak OK (misalnya, API Key salah)
        if (!res.ok) {
            console.error("Gagal mengambil data cuaca. Cek kembali API Key Anda.");
            setWeather(null); // Penting: set weather ke null
            setLoading(false);
            return;
        }

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setWeather(null);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [lat, lng]);

  return { weather, loading };
};

export default useWeather;