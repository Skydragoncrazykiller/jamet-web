// src/utils/weatherAPI.js

/**
 * Mendapatkan URL ikon cuaca dari OpenWeatherMap berdasarkan kode ikon
 * @param {string} iconCode - Kode ikon dari API OpenWeatherMap (misalnya '04d')
 * @returns {string} URL gambar ikon
 */
export const getWeatherIcon = (iconCode) => {
  if (!iconCode) return 'https://openweathermap.org/img/wn/50d@2x.png'; // Default
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};