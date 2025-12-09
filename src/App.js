import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/Hero";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { About } from "./pages/About";
import { Trails } from "./pages/Trails";      // ⬅ Import Trails
import { TrailPage } from "./pages/TrailPage"; // ⬅ Import Trail Detail
import { TrailDetailPage } from "./pages/TrailDetailPage";


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />

          <Route path="/trails" element={<Trails />} />
          <Route path="/trails/:id" element={<TrailPage />} />
          <Route path="/trails/:id" element={<TrailDetailPage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/trail/:id" element={<TrailPage />} />
        </Routes>

        {/* Footer */}
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
      </div>
    </Router>
  );
}

export default App;
