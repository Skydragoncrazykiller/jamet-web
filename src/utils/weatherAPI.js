import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Fetch current weather data (EXISTING - kept for compatibility)
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise} Weather data
 */
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang: "id",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

// Alias for consistency
export const getCurrentWeather = getWeatherByCoords;

/**
 * Fetch 5-day weather forecast (3-hour intervals)
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise} Forecast data
 */
export const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang: "id",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    throw error;
  }
};

/**
 * Fetch both current weather and forecast
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<{current, forecast}>}
 */
export const getCompleteWeatherData = async (lat, lon) => {
  try {
    const [current, forecast] = await Promise.all([
      getCurrentWeather(lat, lon),
      getWeatherForecast(lat, lon),
    ]);

    return {
      current,
      forecast,
    };
  } catch (error) {
    console.error("Error fetching complete weather data:", error);
    throw error;
  }
};

/**
 * Get weather icon URL from OpenWeatherMap
 * @param {string} iconCode - Icon code from API response
 * @returns {string} Icon URL
 */
export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

/**
 * Analyze forecast for hiking recommendation
 * @param {object} forecast - Forecast data from API
 * @returns {object} Recommendation object
 */
export const analyzeForecastForHiking = (forecast) => {
  if (!forecast || !forecast.list || forecast.list.length === 0) {
    return {
      isRecommended: false,
      reason: "Data cuaca tidak tersedia",
      riskLevel: "unknown",
    };
  }

  // Ambil 24 jam ke depan (8 data point @ 3-hour intervals)
  const next24Hours = forecast.list.slice(0, 8);

  // Hitung statistik
  const avgTemp =
    next24Hours.reduce((sum, item) => sum + item.main.temp, 0) /
    next24Hours.length;
  const maxWind = Math.max(...next24Hours.map((item) => item.wind.speed));
  const totalRain = next24Hours.reduce(
    (sum, item) => sum + (item.rain?.["3h"] || 0),
    0
  );
  const hasStorm = next24Hours.some(
    (item) => item.weather[0].main === "Thunderstorm"
  );

  // Logika rekomendasi
  let isRecommended = true;
  let reason = "Kondisi cuaca mendukung untuk hiking";
  let riskLevel = "low";

  if (hasStorm) {
    isRecommended = false;
    reason = "⚠️ Badai petir diprediksi. Sangat berbahaya!";
    riskLevel = "high";
  } else if (totalRain > 10) {
    isRecommended = false;
    reason = "🌧️ Hujan lebat diprediksi. Jalur licin dan berbahaya.";
    riskLevel = "high";
  } else if (maxWind > 10) {
    isRecommended = false;
    reason = "💨 Angin kencang diprediksi. Tidak aman untuk pendakian.";
    riskLevel = "medium";
  } else if (avgTemp > 30) {
    isRecommended = true;
    reason = "☀️ Cuaca panas. Bawa air yang cukup!";
    riskLevel = "low";
  } else if (totalRain > 0 && totalRain <= 10) {
    isRecommended = true;
    reason = "🌦️ Hujan ringan mungkin terjadi. Bawa jas hujan.";
    riskLevel = "low";
  }

  return {
    isRecommended,
    reason,
    riskLevel,
    stats: {
      avgTemp: Math.round(avgTemp),
      maxWind: Math.round(maxWind),
      totalRain: Math.round(totalRain * 10) / 10,
    },
  };
};

/**
 * Get safety score based on weather conditions
 * @param {object} weather - Current weather data
 * @returns {number} Safety score (0-100)
 */
export const calculateSafetyScore = (weather) => {
  if (!weather) return 50;

  let score = 100;

  // Temperature factor
  const temp = weather.main.temp;
  if (temp > 35 || temp < 10) score -= 20;
  else if (temp > 30 || temp < 15) score -= 10;

  // Wind factor
  const windSpeed = weather.wind.speed;
  if (windSpeed > 15) score -= 30;
  else if (windSpeed > 10) score -= 15;
  else if (windSpeed > 7) score -= 5;

  // Rain factor
  const rain = weather.rain?.["1h"] || 0;
  if (rain > 5) score -= 40;
  else if (rain > 2) score -= 20;
  else if (rain > 0) score -= 10;

  // Weather condition factor
  const condition = weather.weather[0].main;
  if (condition === "Thunderstorm") score -= 50;
  else if (condition === "Rain" || condition === "Snow") score -= 20;
  else if (condition === "Drizzle") score -= 10;

  // Visibility factor
  const visibility = weather.visibility;
  if (visibility < 1000) score -= 20;
  else if (visibility < 3000) score -= 10;

  // Humidity factor
  const humidity = weather.main.humidity;
  if (humidity > 90) score -= 10;
  else if (humidity < 30) score -= 5;

  return Math.max(0, Math.min(100, score));
};
