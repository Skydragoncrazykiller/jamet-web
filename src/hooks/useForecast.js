// src/hooks/useForecast.js

import { useState, useEffect } from "react";

// Ganti ini dengan Kunci API Anda yang ASLI
const OPENWEATHER_API_KEY = "PASTE_KUNCI_API_ANDA_DI_SINI"; 
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const useForecast = (lat, lng) => {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!lat || !lng || !OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === "PASTE_KUNCI_API_ANDA_DI_SINI") {
            setLoading(false);
            return;
        }

        const fetchForecast = async () => {
            try {
                // OpenWeatherMap 5-day / 3-hour forecast
                const res = await fetch(
                    `${FORECAST_URL}?lat=${lat}&lon=${lng}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=id`
                );
                
                if (!res.ok) {
                    console.error("Gagal mengambil ramalan cuaca:", res.status);
                    setForecast(null);
                    setLoading(false);
                    return;
                }
                
                const data = await res.json();
                
                // Biasanya, kita perlu memproses data ini untuk mendapatkan satu data per hari.
                // Untuk sementara, kita simpan data mentahnya.
                setForecast(data); 

            } catch (err) {
                console.error("Error fetching forecast:", err);
                setForecast(null);
            }
            setLoading(false);
        };

        fetchForecast();
    }, [lat, lng]);

    return { forecast, loading };
};

export default useForecast;