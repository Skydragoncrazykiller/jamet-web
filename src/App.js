
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/Hero";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { About } from "./pages/About";
import { Footer } from "./components/layout/Footer";
import { DummyPages } from "./pages/DummyPages";  // Import DummyPages

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        <Routes>
          {/* Route untuk Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />
          
          {/* Route untuk DummyPages (dinamis) */}
          <Route
            path="/dummy/:title"
            element={<DummyPages />}
          />
          
          {/* Routes untuk halaman lainnya */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;




        {/* Footer
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
} */}

{/* export default App; */}
