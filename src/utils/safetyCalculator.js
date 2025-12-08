// src/utils/safetyCalculator.js

/**
 * Menghitung skor keamanan (0-100) berdasarkan cuaca dan karakteristik trail.
 * @param {object} weather - Objek cuaca dari OpenWeatherMap
 * @param {object} trail - Objek data trail
 * @returns {number} Safety Score
 */
export const calculateSafetyScore = (weather, trail) => {
  if (!weather || !trail) return 0;

  let score = 100;
  const temp = weather.main.temp; // Suhu (°C)
  const humidity = weather.main.humidity; // Kelembaban (%)
  const weatherId = weather.weather[0].id; // ID Cuaca
  const difficulty = trail.difficulty;

  // 1. Suhu (Ideal 20-25°C)
  if (temp < 15 || temp > 30) score -= 15;
  if (temp < 10 || temp > 35) score -= 25;

  // 2. Kelembaban (Ideal 60-80%)
  if (humidity > 90 || humidity < 50) score -= 10;
  
  // 3. Kondisi Cuaca (Rain/Thunder/Snow)
  if (weatherId >= 200 && weatherId < 600) { // Thunderstorm, Drizzle, Rain
      score -= 30; 
  } else if (weatherId >= 600 && weatherId < 700) { // Snow
      score -= 40;
  } else if (weatherId >= 700 && weatherId < 800) { // Atmosphere (Fog, Mist)
      score -= 10; 
  }

  // 4. Faktor Kesulitan Trail
  if (difficulty === 'medium') score -= 5;
  if (difficulty === 'hard') score -= 10;
  
  // Pastikan skor tidak di bawah 0
  return Math.max(0, score); 
};


/**
 * Mendapatkan label keamanan berdasarkan skor.
 * @param {number} score - Safety Score
 * @returns {{label: string, color: string}}
 */
export const getSafetyLabel = (score) => {
  if (score >= 80) {
    return { label: "Sangat Aman", color: "bg-green-600" };
  } else if (score >= 60) {
    return { label: "Aman", color: "bg-yellow-600" };
  } else if (score >= 40) {
    return { label: "Perlu Hati-hati", color: "bg-orange-600" };
  } else {
    return { label: "Tidak Direkomendasikan", color: "bg-red-600" };
  }
};