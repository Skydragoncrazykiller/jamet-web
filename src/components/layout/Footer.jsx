// src/components/layout/Footer.jsx

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">🏔️ TrailWeather</p>
        <p className="text-gray-400 text-sm">
          Hiking aman dengan info cuaca real-time • Made with ❤️ for hikers
        </p>
        <p className="text-gray-500 text-xs mt-4">
          © 2024 TrailWeather. Data cuaca dari OpenWeatherMap.
        </p>
      </div>
    </footer>
  );
};
