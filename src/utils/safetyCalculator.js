export const calculateSafetyScore = (weather, trail) => {
  if (!weather) return 50;

  let score = 100;

  // Temperature penalties
  const temp = weather.main.temp;
  if (temp > 32) score -= 20; // Terlalu panas
  if (temp < 10) score -= 15; // Terlalu dingin

  // Wind penalties
  const windSpeed = weather.wind.speed;
  if (windSpeed > 10) score -= 15;
  if (windSpeed > 20) score -= 25;

  // Weather condition penalties
  const condition = weather.weather[0].main;
  if (condition === "Rain") score -= 30;
  if (condition === "Thunderstorm") score -= 50;
  if (condition === "Snow") score -= 40;
  if (condition === "Fog" || condition === "Mist") score -= 20;

  // Visibility penalty
  if (weather.visibility < 5000) score -= 15;

  // Trail difficulty adjustment
  if (trail.difficulty === "hard" && score < 70) score -= 10;
  if (trail.difficulty === "medium" && score < 50) score -= 5;

  return Math.max(0, Math.min(100, score));
};

export const getSafetyLabel = (score) => {
  if (score >= 80)
    return {
      label: "Sangat Aman",
      color: "bg-green-500",
      textColor: "text-green-800",
      bgLight: "bg-green-100",
    };
  if (score >= 60)
    return {
      label: "Aman",
      color: "bg-blue-500",
      textColor: "text-blue-800",
      bgLight: "bg-blue-100",
    };
  if (score >= 40)
    return {
      label: "Hati-hati",
      color: "bg-yellow-500",
      textColor: "text-yellow-800",
      bgLight: "bg-yellow-100",
    };
  return {
    label: "Tidak Aman",
    color: "bg-red-500",
    textColor: "text-red-800",
    bgLight: "bg-red-100",
  };
};
