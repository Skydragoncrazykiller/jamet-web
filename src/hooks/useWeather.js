import { useState, useEffect } from "react";
import { getWeatherByCoords } from "../utils/weatherAPI";

export const useWeather = (lat, lon) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!lat || !lon) return;

      try {
        setLoading(true);
        const data = await getWeatherByCoords(lat, lon);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError("Gagal mengambil data cuaca");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { weather, loading, error };
};
