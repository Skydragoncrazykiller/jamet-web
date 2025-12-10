import axios from "axios";

const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

// BMKG API endpoints (gratis, tanpa API key)
const BMKG_BASE_URL = "https://api.bmkg.go.id/publik";

/**
 * Get current weather from OpenWeatherMap
 */
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather`, {
      params: {
        lat: lat,
        lon: lon,
        appid: OPENWEATHER_API_KEY,
        units: "metric",
        lang: "id",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather from OpenWeather:", error);
    return null;
  }
};

/**
 * Get 7-day weather forecast from OpenWeatherMap
 */
export const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/forecast`, {
      params: {
        lat: lat,
        lon: lon,
        appid: OPENWEATHER_API_KEY,
        units: "metric",
        lang: "id",
        cnt: 56, // 7 days * 8 (3-hour intervals)
      },
    });

    // Group by day and get daily summary
    const dailyForecast = groupForecastByDay(response.data.list);
    return dailyForecast;
  } catch (error) {
    console.error("Error fetching forecast from OpenWeather:", error);
    return null;
  }
};

/**
 * Get weather warning from BMKG
 * Useful untuk cek peringatan cuaca ekstrem di Indonesia
 */
export const getBMKGWarning = async () => {
  try {
    const response = await axios.get(
      `${BMKG_BASE_URL}/prakiraan-cuaca?adm4=35.78.08.1001` // Contoh untuk Bandung
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching BMKG warning:", error);
    // BMKG API kadang unstable, jadi fallback ke null
    return null;
  }
};

/**
 * Get BMKG weather data by province
 * Parameter provinsi: kode provinsi (contoh: "11" untuk Aceh, "32" untuk Jawa Barat)
 */
export const getBMKGWeatherByProvince = async (provinceCode = "32") => {
  try {
    const response = await axios.get(
      `${BMKG_BASE_URL}/prakiraan-cuaca?adm1=${provinceCode}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching BMKG weather:", error);
    return null;
  }
};

/**
 * Combine data from multiple sources
 * Prioritas: OpenWeather (realtime) + BMKG (warning lokal)
 */
export const getCombinedWeatherData = async (lat, lon, provinceCode = "32") => {
  try {
    const [currentWeather, forecast, bmkgWarning] = await Promise.all([
      getWeatherByCoords(lat, lon),
      getWeatherForecast(lat, lon),
      getBMKGWarning(),
    ]);

    return {
      current: currentWeather,
      forecast: forecast,
      warning: bmkgWarning,
      source: {
        current: "OpenWeatherMap",
        forecast: "OpenWeatherMap",
        warning: "BMKG",
      },
    };
  } catch (error) {
    console.error("Error combining weather data:", error);
    return null;
  }
};

/**
 * Helper: Group 3-hour forecast data into daily summaries
 */
const groupForecastByDay = (forecastList) => {
  const dailyData = {};

  forecastList.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("id-ID");

    if (!dailyData[date]) {
      dailyData[date] = {
        date: date,
        temps: [],
        conditions: [],
        humidity: [],
        windSpeed: [],
        pop: [], // Probability of precipitation
        rawData: [],
      };
    }

    dailyData[date].temps.push(item.main.temp);
    dailyData[date].conditions.push(item.weather[0].main);
    dailyData[date].humidity.push(item.main.humidity);
    dailyData[date].windSpeed.push(item.wind.speed);
    dailyData[date].pop.push(item.pop || 0);
    dailyData[date].rawData.push(item);
  });

  // Calculate daily averages and dominant condition
  return Object.values(dailyData).map((day) => ({
    date: day.date,
    tempMin: Math.min(...day.temps),
    tempMax: Math.max(...day.temps),
    tempAvg: (day.temps.reduce((a, b) => a + b, 0) / day.temps.length).toFixed(1),
    condition: getMostFrequent(day.conditions),
    humidity: Math.round(
      day.humidity.reduce((a, b) => a + b, 0) / day.humidity.length
    ),
    windSpeed: (
      day.windSpeed.reduce((a, b) => a + b, 0) / day.windSpeed.length
    ).toFixed(1),
    rainProbability: Math.max(...day.pop) * 100, // Max probability in %
    icon: day.rawData[Math.floor(day.rawData.length / 2)].weather[0].icon,
  }));
};

/**
 * Helper: Get most frequent item in array
 */
const getMostFrequent = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let mostFrequent = arr[0];

  arr.forEach((item) => {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxFreq) {
      maxFreq = frequency[item];
      mostFrequent = item;
    }
  });

  return mostFrequent;
};

/**
 * Get weather icon URL
 */
export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

/**
 * Translate weather condition to Indonesian
 */
export const translateCondition = (condition) => {
  const translations = {
    Clear: "Cerah",
    Clouds: "Berawan",
    Rain: "Hujan",
    Drizzle: "Gerimis",
    Thunderstorm: "Petir",
    Snow: "Salju",
    Mist: "Kabut",
    Fog: "Kabut Tebal",
    Haze: "Berkabut",
    Smoke: "Berasap",
  };
  return translations[condition] || condition;
};
