/**
 * Safety Score Calculator for Hiking in Indonesia
 * Disesuaikan dengan kondisi iklim tropis & karakteristik gunung Indonesia
 */

export const calculateSafetyScore = (weather, trail, forecast = null) => {
  if (!weather) return 50;

  let score = 100;
  let penalties = [];

  // ===== TEMPERATURE (Suhu) =====
  // Indonesia: suhu ideal hiking 15-25°C
  // Gunung tinggi (>2000mdpl): bisa 5-15°C
  // Dataran rendah: 25-32°C
  const temp = weather.main.temp;

  if (temp > 35) {
    score -= 30;
    penalties.push("Suhu sangat panas, risiko heat stroke tinggi");
  } else if (temp > 30) {
    score -= 15;
    penalties.push("Suhu panas, bawa air lebih banyak");
  } else if (temp < 5) {
    score -= 25;
    penalties.push("Suhu sangat dingin, risiko hipotermia");
  } else if (temp < 10) {
    score -= 10;
    penalties.push("Suhu dingin, bawa jaket tebal");
  }

  // ===== WIND SPEED (Kecepatan Angin) =====
  // Angin kencang berbahaya di puncak/punggung gunung
  // Sumber: BMKG & standar mountaineering
  const windSpeed = weather.wind.speed; // m/s

  if (windSpeed > 15) {
    // >50 km/h
    score -= 35;
    penalties.push("Angin sangat kencang, berbahaya di area terbuka");
  } else if (windSpeed > 10) {
    // >36 km/h
    score -= 20;
    penalties.push("Angin kencang, hati-hati di punggung gunung");
  } else if (windSpeed > 7) {
    // >25 km/h
    score -= 10;
    penalties.push("Angin cukup kencang");
  }

  // ===== WEATHER CONDITION (Kondisi Cuaca) =====
  // Indonesia: hujan tropis bisa sangat deras & tiba-tiba
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;

  if (condition === "Thunderstorm") {
    score -= 50;
    penalties.push("⚠️ BAHAYA: Petir! Jangan mendaki, risiko kecelakaan fatal");
  } else if (condition === "Rain") {
    // Cek intensitas hujan
    if (description.includes("heavy")) {
      score -= 40;
      penalties.push("Hujan deras, jalur licin & risiko longsor tinggi");
    } else if (description.includes("moderate")) {
      score -= 25;
      penalties.push("Hujan sedang, jalur licin");
    } else {
      score -= 15;
      penalties.push("Hujan ringan, bawa jas hujan");
    }
  } else if (condition === "Drizzle") {
    score -= 10;
    penalties.push("Gerimis, jalur bisa licin");
  } else if (condition === "Fog" || condition === "Mist") {
    score -= 25;
    penalties.push("Kabut tebal, visibilitas buruk, mudah tersesat");
  } else if (condition === "Haze" || condition === "Smoke") {
    score -= 15;
    penalties.push("Berkabut/berasap, visibilitas terbatas");
  } else if (condition === "Snow") {
    // Jarang di Indonesia, tapi ada di puncak Jaya Wijaya
    score -= 30;
    penalties.push("Bersalju, butuh equipment khusus");
  }

  // ===== HUMIDITY (Kelembaban) =====
  // Indonesia sangat lembab (70-95%), tapi >90% bisa jadi pertanda hujan
  const humidity = weather.main.humidity;

  if (humidity > 90) {
    score -= 10;
    penalties.push("Kelembaban sangat tinggi, kemungkinan hujan besar");
  } else if (humidity < 30) {
    score -= 5;
    penalties.push("Udara kering, risiko dehidrasi");
  }

  // ===== VISIBILITY (Jarak Pandang) =====
  // Penting untuk navigasi & keselamatan
  const visibility = weather.visibility; // dalam meter

  if (visibility < 1000) {
    score -= 30;
    penalties.push("Jarak pandang <1km, sangat berbahaya");
  } else if (visibility < 3000) {
    score -= 20;
    penalties.push("Jarak pandang terbatas, mudah tersesat");
  } else if (visibility < 5000) {
    score -= 10;
    penalties.push("Jarak pandang kurang ideal");
  }

  // ===== TRAIL DIFFICULTY ADJUSTMENT =====
  // Kesulitan jalur mempengaruhi safety
  if (trail.difficulty === "hard") {
    if (score < 70) {
      score -= 15;
      penalties.push("Jalur sulit + cuaca buruk = sangat berisiko");
    } else if (score < 85) {
      score -= 5;
      penalties.push("Jalur sulit, perlu pengalaman & persiapan matang");
    }
  } else if (trail.difficulty === "medium") {
    if (score < 60) {
      score -= 10;
      penalties.push("Jalur sedang tapi cuaca tidak mendukung");
    }
  }

  // ===== FORECAST CHECK (Prakiraan 24 jam) =====
  // Cek apakah cuaca akan memburuk
  if (forecast && forecast.length > 0) {
    const next24h = forecast.slice(0, 8); // 24 jam ke depan (3-hour intervals)

    const willRain = next24h.some((f) => f.rainProbability > 70);
    const willStorm = next24h.some((f) => f.condition === "Thunderstorm");

    if (willStorm) {
      score -= 20;
      penalties.push("⚠️ Prakiraan: Potensi petir dalam 24 jam");
    } else if (willRain) {
      score -= 10;
      penalties.push("Prakiraan: Kemungkinan hujan tinggi");
    }
  }

  // ===== TIME OF DAY (Waktu) =====
  // Tambahan: cek waktu (malam lebih berbahaya)
  const hour = new Date().getHours();
  if (hour < 5 || hour > 18) {
    score -= 5;
    penalties.push("Waktu gelap, lebih berisiko");
  }

  // Ensure score stays in 0-100 range
  const finalScore = Math.max(0, Math.min(100, score));

  return {
    score: finalScore,
    penalties: penalties,
    recommendation: getRecommendation(finalScore, penalties),
  };
};

/**
 * Get safety label with color coding
 */
export const getSafetyLabel = (score) => {
  if (score >= 80)
    return {
      label: "Sangat Aman",
      color: "bg-green-500",
      textColor: "text-green-800",
      bgLight: "bg-green-100",
      borderColor: "border-green-500",
    };
  if (score >= 65)
    return {
      label: "Aman",
      color: "bg-blue-500",
      textColor: "text-blue-800",
      bgLight: "bg-blue-100",
      borderColor: "border-blue-500",
    };
  if (score >= 50)
    return {
      label: "Hati-hati",
      color: "bg-yellow-500",
      textColor: "text-yellow-800",
      bgLight: "bg-yellow-100",
      borderColor: "border-yellow-500",
    };
  if (score >= 30)
    return {
      label: "Tidak Aman",
      color: "bg-orange-500",
      textColor: "text-orange-800",
      bgLight: "bg-orange-100",
      borderColor: "border-orange-500",
    };
  return {
    label: "Sangat Berbahaya",
    color: "bg-red-500",
    textColor: "text-red-800",
    bgLight: "bg-red-100",
    borderColor: "border-red-500",
  };
};

/**
 * Get hiking recommendation based on score
 */
const getRecommendation = (score, penalties) => {
  if (score >= 80) {
    return "Kondisi ideal untuk mendaki. Tetap waspada dan ikuti prosedur keselamatan standar.";
  }

  if (score >= 65) {
    return "Kondisi cukup aman. Pastikan membawa perlengkapan lengkap dan tetap waspada terhadap perubahan cuaca.";
  }

  if (score >= 50) {
    return "⚠️ Berhati-hati! Pertimbangkan untuk menunda jika tidak berpengalaman. Pastikan tim lengkap dan komunikasi lancar.";
  }

  if (score >= 30) {
    return "❌ Tidak direkomendasikan mendaki. Tunggu cuaca membaik. Risiko kecelakaan tinggi.";
  }

  return "🚫 BERBAHAYA! Jangan mendaki dalam kondisi ini. Risiko fatal sangat tinggi. Tunggu hingga kondisi aman.";
};

/**
 * Get specific hiking tips based on weather conditions
 */
export const getHikingTips = (weather, trail) => {
  const tips = [
    "✅ Bawa air minum minimal 2 liter per orang",
    "✅ Informasikan rencana perjalanan ke keluarga/teman",
    "✅ Cek kondisi jalur sebelum berangkat",
    "✅ Bawa P3K dan obat-obatan pribadi",
  ];

  if (weather.main.temp > 28) {
    tips.push("🌡️ Suhu panas: Bawa air ekstra, pakai sunscreen & topi");
  }

  if (weather.main.temp < 15) {
    tips.push("🧥 Suhu dingin: Bawa jaket tebal & sleeping bag hangat");
  }

  if (weather.weather[0].main === "Rain" || weather.main.humidity > 85) {
    tips.push("☔ Bawa jas hujan, cover bag, & sepatu anti-slip");
  }

  if (weather.wind.speed > 7) {
    tips.push("💨 Angin kencang: Hindari area terbuka, amankan tenda dengan kuat");
  }

  if (weather.visibility < 5000) {
    tips.push("🌫️ Kabut: Bawa GPS/kompas, jangan mendaki sendirian");
  }

  if (trail.difficulty === "hard") {
    tips.push("⛰️ Jalur sulit: Gunakan guide berpengalaman, cek fisik sebelum mendaki");
  }

  return tips;
};
