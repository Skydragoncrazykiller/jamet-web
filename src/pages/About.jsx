// src/pages/About.jsx - CONSISTENT DESIGN
import { Mountain } from "lucide-react";
import { VideoBackground } from "../components/layout/VideoBackground";

export default function About() {
  const teamMembers = [
    { name: "Ihsan", nim: "12823010", photo: "/images/team/member1.jpeg" },
    { name: "Ifzal", nim: "12823039", photo: "/images/team/member2.jpg" },
    { name: "Aza", nim: "12823045", photo: "/images/team/member3.jpg" },
    { name: "Mitha", nim: "12823054", photo: "/images/team/member4.jpg" },
    { name: "Raia", nim: "12823001", photo: "/images/team/member5.jpg" },
    { name: "Izza", nim: "12823067", photo: "/images/team/member6.jpg" },
  ];

  return (
    <VideoBackground>
      <div className="min-h-screen py-8">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-8">
          <div className="bg-slate-800/95 backdrop-blur-sm rounded-xl p-12 shadow-lg text-white text-center">
            <Mountain className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">TrailWeather</h1>
            <p className="text-xl text-slate-300">
              Real-time weather intelligence untuk hiking yang lebih aman
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* About Section */}
          <div className="mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Tentang TrailWeather
              </h2>
              <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-lg leading-relaxed">
                <p>
                  TrailWeather adalah platform web yang dikembangkan untuk
                  menjawab kebutuhan akan informasi cuaca yang akurat dan
                  spesifik untuk aktivitas hiking di Indonesia, khususnya
                  wilayah Bandung dan sekitarnya.
                </p>
                <p>
                  Dalam beberapa tahun terakhir, tren rekreasi outdoor dan
                  hiking mengalami peningkatan signifikan. Namun, pendaki di
                  Indonesia masih menghadapi tantangan dalam mengakses informasi
                  cuaca dan risiko bencana yang spesifik untuk kondisi gunung.
                  Risiko seperti cuaca ekstrem, kabut mendadak, hujan orografis,
                  angin kencang di puncak, dan potensi jalur longsor sering
                  mengancam keselamatan para pendaki.
                </p>
                <p>
                  Melihat kondisi ini, kami mengembangkan TrailWeather sebagai
                  solusi berbasis teknologi yang mengintegrasikan data cuaca
                  real-time dari OpenWeatherMap API dengan algoritma safety
                  scoring. Platform ini menyediakan informasi komprehensif
                  meliputi kondisi cuaca terkini, forecast 5 hari ke depan, peta
                  interaktif jalur hiking, serta analisis keamanan untuk
                  membantu pendaki membuat keputusan yang lebih bijak sebelum
                  memulai perjalanan mereka.
                </p>
                <p>
                  TrailWeather dirancang dengan teknologi modern seperti
                  React.js, Tailwind CSS, dan Leaflet Maps untuk memberikan
                  pengalaman pengguna yang optimal dalam mengakses informasi
                  vital untuk keselamatan hiking di gunung-gunung Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">
              Tim Pengembang
            </h2>
            <p className="text-slate-600 text-center mb-10">
              Meet the team behind TrailWeather
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border-2 border-slate-200 hover:border-slate-400"
                >
                  <div className="aspect-square bg-slate-200">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&size=400&background=1e293b&color=fff&bold=true`;
                      }}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-slate-600 font-mono text-sm">
                      {member.nim}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
}
