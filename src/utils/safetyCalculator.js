/**
 * Calculate safety score based on weather conditions and trail difficulty
 * @param {object} weather - Weather data from API
 * @param {object} trail - Trail data
 * @returns {number} Safety score (0-100)
 */
export const calculateSafetyScore = (weather, trail) => {
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

  // Trail difficulty factor
  if (trail) {
    const difficulty = trail.difficulty;
    if (difficulty === "sulit" || difficulty === "hard") {
      score -= 5; // Harder trails are slightly riskier
    }

    // Elevation factor
    if (trail.elevation > 2000) score -= 5;
  }

  return Math.max(0, Math.min(100, score));
};

/**
 * Get safety label and color based on score
 * @param {number} score - Safety score (0-100)
 * @returns {object} { label, color, description }
 */
export const getSafetyLabel = (score) => {
  if (score >= 80) {
    return {
      label: "Sangat Aman",
      color: "bg-green-500",
      description: "Kondisi ideal untuk hiking",
    };
  } else if (score >= 60) {
    return {
      label: "Aman",
      color: "bg-blue-500",
      description: "Kondisi baik, tetap waspada",
    };
  } else if (score >= 40) {
    return {
      label: "Hati-hati",
      color: "bg-yellow-500",
      description: "Kondisi kurang ideal, persiapkan diri dengan baik",
    };
  } else if (score >= 20) {
    return {
      label: "Berbahaya",
      color: "bg-orange-500",
      description: "Tidak direkomendasikan untuk hiking",
    };
  } else {
    return {
      label: "Sangat Berbahaya",
      color: "bg-red-500",
      description: "Tunda perjalanan Anda",
    };
  }
};

/**
 * Get detailed safety recommendations
 * @param {object} weather - Weather data
 * @param {number} score - Safety score
 * @returns {array} Array of recommendation strings
 */
export const getSafetyRecommendations = (weather, score) => {
  const recommendations = [];

  if (!weather) return recommendations;

  // Temperature recommendations
  const temp = weather.main.temp;
  if (temp > 30) {
    recommendations.push("🌡️ Suhu tinggi - bawa air minum yang cukup");
  } else if (temp < 15) {
    recommendations.push("🧥 Suhu rendah - bawa jaket dan pakaian hangat");
  }

  // Wind recommendations
  const windSpeed = weather.wind.speed;
  if (windSpeed > 10) {
    recommendations.push("💨 Angin kencang - hindari area terbuka dan tebing");
  }

  // Rain recommendations
  const rain = weather.rain?.["1h"] || 0;
  if (rain > 0) {
    recommendations.push(
      "🌧️ Hujan - bawa jas hujan dan hati-hati di jalur licin"
    );
  }

  // Weather condition
  const condition = weather.weather[0].main;
  if (condition === "Thunderstorm") {
    recommendations.push(
      "⚠️ Badai petir - SANGAT BERBAHAYA, tunda perjalanan!"
    );
  }

  // Visibility
  const visibility = weather.visibility;
  if (visibility < 3000) {
    recommendations.push(
      "🌫️ Jarak pandang terbatas - gunakan GPS dan tetap di jalur"
    );
  }

  // Humidity
  const humidity = weather.main.humidity;
  if (humidity > 85) {
    recommendations.push(
      "💧 Kelembaban tinggi - risiko dehidrasi, bawa elektrolit"
    );
  }

  // General recommendations based on score
  if (score < 40) {
    recommendations.push("🚫 Pertimbangkan untuk menunda pendakian");
  } else if (score < 60) {
    recommendations.push("✓ Pastikan persiapan lengkap sebelum berangkat");
  } else {
    recommendations.push("✓ Kondisi mendukung, nikmati pendakian Anda!");
  }

  return recommendations;
};
