import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { Trails } from "./pages/Trails";
import { TrailPage } from "./pages/TrailPage";
import { MapPage } from "./pages/MapPage";
import { Analytics } from "./pages/Analytics";
import About from "./pages/About";
import { Footer } from "./components/layout/Footer";
import { DummyPages } from "./pages/DummyPages";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          {/* Route untuk Home - Clean Landing Page (Hero sudah include di dalam) */}
          <Route path="/" element={<Home />} />

          {/* Route untuk Trails Page */}
          <Route path="/trails" element={<Trails />} />

          {/* Route untuk Trail Detail Page */}
          <Route path="/trails/:id" element={<TrailPage />} />

          {/* Route untuk Map Page */}
          <Route path="/map" element={<MapPage />} />

          {/* Route untuk DummyPages (dinamis) */}
          <Route path="/dummy/:title" element={<DummyPages />} />

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
