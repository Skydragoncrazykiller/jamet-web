import { useState, useEffect } from "react";
import { getWeatherByCoords } from "../utils/weatherAPI";

/**
 * Custom hook for fetching weather data
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {object} { weather, loading, error }
 */
export const useWeather = (lat, lon) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getWeatherByCoords(lat, lon);
        setWeather(data);
      } catch (err) {
        console.error("Error in useWeather hook:", err);
        setError(err.message || "Failed to fetch weather");
      } finally {
        setLoading(false);
      }
    };

    if (lat && lon) {
      fetchWeather();
    }
  }, [lat, lon]);

  return { weather, loading, error };
};
