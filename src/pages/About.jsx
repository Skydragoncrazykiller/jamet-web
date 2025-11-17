import { Github, Mail, Linkedin, Code, Coffee, Heart } from "lucide-react";

export const About = () => {
  const techStack = [
    { name: "React.js", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
    { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
    { name: "Leaflet Maps", icon: "🗺️", color: "bg-green-100 text-green-800" },
    {
      name: "OpenWeatherMap",
      icon: "🌤️",
      color: "bg-orange-100 text-orange-800",
    },
    { name: "Recharts", icon: "📊", color: "bg-purple-100 text-purple-800" },
    { name: "Axios", icon: "🔌", color: "bg-red-100 text-red-800" },
  ];

  const features = [
    {
      title: "Real-Time Weather",
      description: "Data cuaca aktual dari OpenWeatherMap API",
      icon: "🌦️",
    },
    {
      title: "Safety Scoring",
      description: "Algoritma penilaian keamanan otomatis",
      icon: "🛡️",
    },
    {
      title: "Interactive Maps",
      description: "Peta interaktif dengan Leaflet.js",
      icon: "🗺️",
    },
    {
      title: "Analytics Dashboard",
      description: "Visualisasi data dengan grafik interaktif",
      icon: "📈",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <span className="text-6xl">🏔️</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About TrailWeather
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Platform hiking yang menggabungkan data cuaca real-time dengan
          informasi trail untuk pengalaman hiking yang lebih aman
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ihsan - Synoptic Meteorologist */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              🌍
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Ihsan</h3>
            <p className="text-blue-100 text-center mb-4">
              Synoptic Meteorologist
            </p>
            <p className="text-blue-50 text-sm text-center">
              Ahli dalam analisis pola cuaca skala besar dan prediksi sistem
              cuaca regional. Bertanggung jawab atas akurasi prakiraan cuaca
              trail.
            </p>
          </div>

          {/* Ifzal - Aviation Meteorologist */}
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              ✈️
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Ifzal</h3>
            <p className="text-cyan-100 text-center mb-4">
              Aviation Meteorologist
            </p>
            <p className="text-cyan-50 text-sm text-center">
              Spesialis cuaca ketinggian dan visibilitas. Menganalisis kondisi
              atmosfer untuk keamanan hiking di elevasi tinggi.
            </p>
          </div>

          {/* Raia - Climatologist */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              📊
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Raia</h3>
            <p className="text-green-100 text-center mb-4">Climatologist</p>
            <p className="text-green-50 text-sm text-center">
              Menganalisis pola iklim jangka panjang dan tren musiman.
              Menentukan waktu terbaik untuk hiking di setiap trail sepanjang
              tahun.
            </p>
          </div>

          {/* Izza - Research Meteorologist */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              🔬
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Izza</h3>
            <p className="text-purple-100 text-center mb-4">
              Research Meteorologist
            </p>
            <p className="text-purple-50 text-sm text-center">
              Mengembangkan algoritma safety scoring dan model prediksi cuaca
              khusus untuk aktivitas outdoor. Lead researcher tim.
            </p>
          </div>

          {/* Aza - Operational Meteorologist */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              ⚡
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Aza</h3>
            <p className="text-orange-100 text-center mb-4">
              Operational Meteorologist
            </p>
            <p className="text-orange-50 text-sm text-center">
              Monitoring cuaca real-time 24/7 dan mengeluarkan early warning
              untuk kondisi berbahaya seperti badai petir dan angin kencang.
            </p>
          </div>

          {/* Mitha - Forensic Meteorologist */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              🔍
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Mitha</h3>
            <p className="text-pink-100 text-center mb-4">
              Forensic Meteorologist
            </p>
            <p className="text-pink-50 text-sm text-center">
              Menganalisis data historis cuaca untuk memahami insiden hiking
              masa lalu dan mencegah kecelakaan serupa di masa depan.
            </p>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-white text-center mb-6">
          Our Expertise
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div>
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-indigo-100">Years Combined Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">10K+</p>
            <p className="text-indigo-100">Forecasts Analyzed</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">98%</p>
            <p className="text-indigo-100">Accuracy Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-indigo-100">Monitoring</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🛠️ Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`${tech.color} rounded-xl p-4 text-center transition-transform hover:scale-105`}
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <p className="font-semibold text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ✨ Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Code size={28} />
          About This Project
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>TrailWeather</strong> adalah project yang dikembangkan oleh
            tim meteorologist profesional dengan berbagai spesialisasi untuk
            memberikan informasi cuaca hiking yang akurat dan aman.
          </p>
          <p>
            Tim kami menggabungkan keahlian dari berbagai bidang meteorologi -
            dari analisis sinoptik, klimatologi, hingga forensic meteorology -
            untuk menciptakan sistem prediksi cuaca hiking yang paling
            komprehensif.
          </p>
          <p>
            Project ini mengintegrasikan OpenWeatherMap API untuk mendapatkan
            data cuaca real-time, kemudian mengkalkulasi safety score
            berdasarkan algoritma yang dikembangkan oleh tim research kami.
          </p>
          <p>
            Semua data trail adalah data riil dari jalur hiking populer di
            Bandung, dengan koordinat GPS yang akurat untuk integrasi dengan
            peta interaktif.
          </p>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
          <Coffee size={48} className="mx-auto mb-3" />
          <p className="text-3xl font-bold mb-2">∞</p>
          <p className="text-purple-100">Cups of Coffee</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
          <Code size={48} className="mx-auto mb-3" />
          <p className="text-3xl font-bold mb-2">3,500+</p>
          <p className="text-green-100">Lines of Code</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white text-center">
          <Heart size={48} className="mx-auto mb-3" />
          <p className="text-3xl font-bold mb-2">Made with</p>
          <p className="text-red-100">Passion & Science</p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-lg text-blue-100 mb-6">
          Punya pertanyaan tentang meteorologi atau ingin kolaborasi? Tim kami
          siap membantu!
        </p>
        <a
          href="mailto:team@trailweather.com"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          <Mail size={20} />
          Contact Our Team
        </a>
      </div>
    </main>
  );
};
