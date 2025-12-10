// src/data/trails.js
export const trails = [
  {
    id: 1,
    name: "Gunung Talaga Bodas",
    location: "Garut",
    coordinates: [-7.3167, 107.8533],
    difficulty: "medium",
    distance: 6.5,
    elevation: 2084,
    duration: "4-6 jam",
    description:
      "Talaga Bodas adalah gunung berkarakter vulkanik dengan kawah yang membentuk danau air puncak. Jalur pendakian relatif pendek namun berbatu, membawa pendaki melewati padang rumput tinggi dan lembah berpasir vulkanik. Keunikan Talaga Bodas adalah pemandangan kawah yang dramatis serta panorama pegunungan Garut di sekitarnya. Secara historis area ini juga dikenal oleh masyarakat lokal karena sumber air panas dan aktivitas geotermal. Untuk pendaki, Talaga Bodas menawarkan kombinasi trekking moderate dan pengalaman fotografi yang sangat baik — sunrise dan layer kabut di pagi hari sering menjadi momen terbaik.",
    destinations: ["Kawah Talaga Bodas", "Pemandian Air Panas", "Spot Sunrise bukit kecil"],
    rules: [
      "Dilarang meninggalkan sampah",
      "Tidak boleh menyalakan api sembarangan",
      "Ikuti arahan petugas setempat"
    ],
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSPplIzfUZt2DmxSINtQDH4lIkNC4Mnm0On95DoqTcFWC3OD11e2E6TJURcurws3mkvhJcBsDrJWf0975mXV3q6QDk&s=19",
    features: ["kawah", "danau", "spot_sunrise"],
    bestTime: ["pagi", "sore"],
    season: "dry_months",
    rating: 4.3,
    reviewsCount: 124,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 6,
    popularity: "medium",
    safetyTips: ["Bawa jaket tebal", "Hati-hati pada tanah berpasir"],

    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Talaga Bodas adalah gunung berkarakter vulkanik dengan kawah yang membentuk danau air puncak. Jalur pendakian relatif pendek namun berbatu, membawa pendaki melewati padang rumput tinggi dan lembah berpasir vulkanik. Keunikan Talaga Bodas adalah pemandangan kawah yang dramatis serta panorama pegunungan Garut di sekitarnya. Secara historis area ini juga dikenal oleh masyarakat lokal karena sumber air panas dan aktivitas geotermal. Untuk pendaki, Talaga Bodas menawarkan kombinasi trekking moderate dan pengalaman fotografi yang sangat baik — sunrise dan layer kabut di pagi hari sering menjadi momen terbaik.",
    historicalFact: "Danau di kawah gunung ini dikenal memiliki warna air yang dapat berubah-ubah, seringkali antara putih, hijau, atau biru muda, tergantung pada kondisi belerang di dalamnya.",
    calorieEstimate: 1800, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Talaga+Bodas+Photo+1",
        "https://via.placeholder.com/300x200?text=Talaga+Bodas+Photo+2",
        "https://via.placeholder.com/300x200?text=Talaga+Bodas+Photo+3",
    ],
    trackCoordinates: [
         [-7.3177, 107.8523], [-7.3169, 107.8528], [-7.3167, 107.8533] 
    ],
    reviews: [
        { id: 101, user: "Ria P.", rating: 5, date: "2024-10-10", comment: "Kawahnya indah sekali, jalur cocok untuk pendaki santai." },
        { id: 102, user: "Andi S.", rating: 4, date: "2024-09-25", comment: "Pemandian air panasnya menenangkan, sayang jalurnya agak berbatu." },
    ]
  },

  {
    id: 2,
    name: "Gunung Cakrabuana",
    location: "Ciamis",
    coordinates: [-7.4289, 108.2400],
    difficulty: "hard",
    distance: 12.0,
    elevation: 1650,
    duration: "8-10 jam",
    description:
      "Cakrabuana merupakan pendakian yang menantang dengan jalur terjal dan panjang. Hutan tropis yang lebat di bagian bawah berubah menjadi punggung bukit berangin dan pemandangan lepas saat mendekati puncak. Cakrabuana populer di kalangan pendaki yang mencari rute multi-day atau long day hike dengan panorama luas ke dataran tinggi Sunda. Karena medan yang sulit, persiapan fisik dan navigasi yang baik sangat dianjurkan.",
    destinations: ["Punggung Panorama", "Camp Ground Puncak", "Spot sunrise"],
    rules: ["Tidak mendaki sendiri", "Bawa peralatan outdoor lengkap"],
    image: "data:image/jpeg;base64,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",
    features: ["panorama", "hutan", "camping"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.5,
    reviewsCount: 88,
    permitNeeded: true,
    parking: false,
    trailType: "outandback",
    difficultyScore: 8,
    popularity: "low",
    safetyTips: ["Siapkan fisik prima", "Cek prakiraan cuaca"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Cakrabuana merupakan pendakian yang menantang dengan jalur terjal dan panjang. Hutan tropis yang lebat di bagian bawah berubah menjadi punggung bukit berangin dan pemandangan lepas saat mendekati puncak. Cakrabuana populer di kalangan pendaki yang mencari rute multi-day atau long day hike dengan panorama luas ke dataran tinggi Sunda. Karena medan yang sulit, persiapan fisik dan navigasi yang baik sangat dianjurkan.",
    historicalFact: "Gunung ini melintasi tiga wilayah kabupaten (Sumedang, Majalengka, dan Ciamis/Tasikmalaya). Puncaknya sering disebut Puncak Cakra.",
    calorieEstimate: 2800, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Cakrabuana+Photo+1",
        "https://via.placeholder.com/300x200?text=Cakrabuana+Photo+2",
        "https://via.placeholder.com/300x200?text=Cakrabuana+Photo+3",
    ],
    trackCoordinates: [
         [-7.4300, 108.2410], [-7.4295, 108.2405], [-7.4289, 108.2400]
    ],
    reviews: [
        { id: 201, user: "Rudi H.", rating: 5, date: "2024-11-01", comment: "Jalur panjang dan menguras energi, tapi pemandangan puncaknya sepadan!" },
        { id: 202, user: "Sari M.", rating: 4, date: "2024-10-15", comment: "Perlu stamina ekstra. Kurangnya sumber air di beberapa pos." },
    ]
  },

  {
    id: 3,
    name: "Gunung Sanggabuana",
    location: "Garut",
    coordinates: [-7.3490, 107.7800],
    difficulty: "medium",
    distance: 7.2,
    elevation: 1200,
    duration: "4-6 jam",
    description:
      "Sanggabuana menawarkan jalur yang asri, memasuki hutan dan padang terbuka yang cantik. Cocok untuk pendaki kelas menengah dan kelompok keluarga yang berpengalaman. Pada puncak dan punggung bukit, ada beberapa spot foto dan padang rumput yang luas. Kondisi jalur bervariasi: tanah, akar, serta beberapa anak tangga alam, membuat perjalanan terasa menyenangkan namun tetap menantang di bagian tertentu.",
    destinations: ["Padang Rumput Puncak", "Spot Foto Pemandangan Kota Garut"],
    rules: ["Jaga kebersihan", "Tidak memetik tanaman langka"],
    image: "https://salsawisata.com/wp-content/uploads/2023/02/Gunung-Sanggabuana-Karawang-PhotoRoom.jpg",
    features: ["hutan", "padang", "camping"],
    bestTime: ["pagi", "siang"],
    season: "year_round",
    rating: 4.2,
    reviewsCount: 60,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 6,
    popularity: "medium",
    safetyTips: ["Bawa air cukup", "Jaga kebersihan area"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Sanggabuana menawarkan jalur yang asri, memasuki hutan dan padang terbuka yang cantik. Cocok untuk pendaki kelas menengah dan kelompok keluarga yang berpengalaman. Pada puncak dan punggung bukit, ada beberapa spot foto dan padang rumput yang luas. Kondisi jalur bervariasi: tanah, akar, serta beberapa anak tangga alam, membuat perjalanan terasa menyenangkan namun tetap menantang di bagian tertentu.",
    historicalFact: "Sering dianggap sebagai gunung suci atau keramat oleh masyarakat sekitar, terkait dengan mitos lokal dan cerita rakyat. Lokasi ini juga memiliki situs-situs bersejarah.",
    calorieEstimate: 1600, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Sanggabuana+Photo+1",
        "https://via.placeholder.com/300x200?text=Sanggabuana+Photo+2",
        "https://via.placeholder.com/300x200?text=Sanggabuana+Photo+3",
    ],
    trackCoordinates: [
         [-7.3500, 107.7810], [-7.3495, 107.7805], [-7.3490, 107.7800]
    ],
    reviews: [
        { id: 301, user: "Dina F.", rating: 4, date: "2024-09-10", comment: "Jalur loop yang menyenangkan. Hutan masih sangat asri dan sejuk!" },
        { id: 302, user: "Gilang R.", rating: 5, date: "2024-08-20", comment: "Cocok untuk latihan fisik dan membawa keluarga yang sudah berpengalaman." },
    ]
  },

  {
    id: 4,
    name: "Gunung Patuha",
    location: "Ciwidey",
    coordinates: [-7.1665, 107.3733],
    difficulty: "easy",
    distance: 3.0,
    elevation: 2000,
    duration: "2-3 jam",
    description:
      "Patuha terkenal karena Kawah Putih, tujuan wisata yang sangat populer. Jalur pendakian relatif pendek dan mudah, cocok untuk keluarga dan pendaki pemula yang ingin kombinasi trekking ringan dan wisata kawah. Pemandangan kawah dengan air yang khas serta padang rumput sekitarnya menjadi daya tarik utama. Lokasi ini sering ramai pada akhir pekan sehingga persiapan waktu kunjungan penting.",
    destinations: ["Kawah Putih", "Pemandangan Kawah", "Wisata Edukasi Geologi"],
    rules: ["Jangan mendekati area yang diberi pagar", "Tidak merusak vegetasi"],
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQcKkn42Ir3wip4ONNIlKCkAWHh0yIiiBID_pe4-TgjKLWh44jEEPOA4NmKzpWZoQ2XviNfJ8BgMFwPm0prCnLFdWs&s=19",
    features: ["kawah", "pemandangan", "parkir"],
    bestTime: ["pagi"],
    season: "year_round",
    rating: 4.6,
    reviewsCount: 210,
    permitNeeded: false,
    parking: true,
    trailType: "oneway",
    difficultyScore: 3,
    popularity: "high",
    safetyTips: ["Patuhi rambu pengunjung", "Bawa masker jika perlu"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Patuha terkenal karena Kawah Putih, tujuan wisata yang sangat populer. Jalur pendakian relatif pendek dan mudah, cocok untuk keluarga dan pendaki pemula yang ingin kombinasi trekking ringan dan wisata kawah. Pemandangan kawah dengan air yang khas serta padang rumput sekitarnya menjadi daya tarik utama. Lokasi ini sering ramai pada akhir pekan sehingga persiapan waktu kunjungan penting.",
    historicalFact: "Nama Patuha berasal dari kata 'tua' yang berarti gunung yang sudah tua, tempat berkumpulnya para leluhur. Puncaknya terdapat kawah yang ikonik, Kawah Putih.",
    calorieEstimate: 1000, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Kawah+Patuha+Photo+1",
        "https://via.placeholder.com/300x200?text=Kawah+Patuha+Photo+2",
        "https://via.placeholder.com/300x200?text=Kawah+Patuha+Photo+3",
    ],
    trackCoordinates: [
         [-7.1675, 107.3738], [-7.1670, 107.3735], [-7.1665, 107.3733]
    ],
    reviews: [
        { id: 401, user: "Budi J.", rating: 5, date: "2024-11-20", comment: "Kawah Putih selalu menakjubkan. Jalur mudah untuk wisata keluarga." },
        { id: 402, user: "Lia T.", rating: 4, date: "2024-10-05", comment: "Banyak turis, tapi pemandangannya worth it. Jangan lupa bawa masker." },
    ]
  },

  {
    id: 5,
    name: "Gunung Munara",
    location: "Sumedang",
    coordinates: [-6.8030, 107.8830],
    difficulty: "medium",
    distance: 8.5,
    elevation: 900,
    duration: "4-5 jam",
    description:
      "Munara merupakan pilihan hiking yang indah untuk melihat pemandangan kota Sumedang dari ketinggian. Jalur melewati hutan sekunder dan kebun, kemudian naik ke punggung bukit dengan panorama kota dan pedesaan. Trek cukup bervariasi sehingga memberikan tantangan kecil namun cocok untuk pendaki menengah.",
    destinations: ["Puncak Panorama Kota", "Hutan Sekunder", "Camp Spot"],
    rules: ["Antarkan kendaraan di area parkir resmi"],
    image: "https://travelspromo.com/wp-content/uploads/2021/09/Pemandangan-dari-puncak-Gunung-Munara-Bayu-Agung.jpg",
    features: ["hutan", "panorama"],
    bestTime: ["pagi", "sore"],
    season: "year_round",
    rating: 4.0,
    reviewsCount: 34,
    permitNeeded: false,
    parking: true,
    trailType: "outandback",
    difficultyScore: 5,
    popularity: "low",
    safetyTips: ["Siapkan pelindung serangga"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Munara merupakan pilihan hiking yang indah untuk melihat pemandangan kota Sumedang dari ketinggian. Jalur melewati hutan sekunder dan kebun, kemudian naik ke punggung bukit dengan panorama kota dan pedesaan. Trek cukup bervariasi sehingga memberikan tantangan kecil namun cocok untuk pendaki menengah.",
    historicalFact: "Terdapat makam keramat di puncak yang sering menjadi tujuan ziarah, dikenal oleh masyarakat lokal sebagai tempat bersejarah.",
    calorieEstimate: 1500, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Munara+Photo+1",
        "https://via.placeholder.com/300x200?text=Munara+Photo+2",
        "https://via.placeholder.com/300x200?text=Munara+Photo+3",
    ],
    trackCoordinates: [
         [-6.8040, 107.8840], [-6.8035, 107.8835], [-6.8030, 107.8830]
    ],
    reviews: [
        { id: 501, user: "Asep R.", rating: 4, date: "2024-07-28", comment: "Pemandangan kota Sumedang saat senja indah sekali." },
        { id: 502, user: "Cici V.", rating: 3, date: "2024-06-12", comment: "Jalur cukup landai, cocok untuk pemula. Parkir luas." },
    ]
  },

  {
    id: 6,
    name: "Gunung Manglayang",
    location: "Sumedang",
    coordinates: [-6.8550, 107.8920],
    difficulty: "medium",
    distance: 9.0,
    elevation: 1818,
    duration: "5-7 jam",
    description:
      "Manglayang terkenal dengan puncak yang sering menjadi spot sunrise populer. Jalur variatif menuntut stamina sedang, melewati hutan, padang rumput, dan beberapa ruas berbatu. Pemandangan matahari terbit dari puncak memberikan pengalaman yang memuaskan bagi pendaki yang bangun dini hari.",
    destinations: ["Sunrise Point", "Padang Rumput Puncak", "Camp Area"],
    rules: ["Tidak meninggalkan sampah", "Jaga ekosistem padang rumput"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mont_Manglayang.jpg",
    features: ["sunrise_view", "camping", "forest"],
    bestTime: ["subuh", "pagi"],
    season: "dry_months",
    rating: 4.4,
    reviewsCount: 150,
    permitNeeded: false,
    parking: true,
    trailType: "oneway",
    difficultyScore: 6,
    popularity: "high",
    safetyTips: ["Berangkat subuh untuk sunrise"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Manglayang terkenal dengan puncak yang sering menjadi spot sunrise populer. Jalur variatif menuntut stamina sedang, melewati hutan, padang rumput, dan beberapa ruas berbatu. Pemandangan matahari terbit dari puncak memberikan pengalaman yang memuaskan bagi pendaki yang bangun dini hari.",
    historicalFact: "Bagian dari rangkaian pegunungan Bandung Utara. Dinamakan Manglayang karena bentuknya yang 'melayang' (terlihat mengambang) dari kejauhan.",
    calorieEstimate: 2000, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Manglayang+Sunrise+Photo",
        "https://via.placeholder.com/300x200?text=Manglayang+Forest+Photo",
        "https://via.placeholder.com/300x200?text=Manglayang+Puncak+Photo",
    ],
    trackCoordinates: [
         [-6.8560, 107.8930], [-6.8555, 107.8925], [-6.8550, 107.8920]
    ],
    reviews: [
        { id: 601, user: "Rini K.", rating: 5, date: "2024-11-25", comment: "Sunrise di Manglayang tidak pernah mengecewakan. Wajib coba!" },
        { id: 602, user: "Dedi S.", rating: 4, date: "2024-10-18", comment: "Medan menantang tapi masih tergolong sedang. Cocok untuk nge-camp." },
    ]
  },

  {
    id: 7,
    name: "Gunung Kancana",
    location: "Tasikmalaya",
    coordinates: [-7.4020, 108.2190],
    difficulty: "hard",
    distance: 14.0,
    elevation: 1700,
    duration: "8-10 jam",
    description:
      "Kancana merupakan pendakian panjang dan menantang dengan medan terjal. Jalur-nya relatif remote sehingga lebih cocok untuk pendaki berpengalaman. Selama perjalanan, pendaki akan menemukan pemandangan alam lepas dan pengalaman hiking yang menenangkan jauh dari keramaian.",
    destinations: ["Puncak Panorama", "Ridge Line Views"],
    rules: ["Dilarang mendaki sendirian", "Siapkan navigasi dan peralatan lengkap"],
    image: "https://wisato.id/wp-content/uploads/2020/04/gunung-kencana-3-1068x720.jpg",
    features: ["puncak", "forest", "remote"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.1,
    reviewsCount: 22,
    permitNeeded: true,
    parking: false,
    trailType: "outandback",
    difficultyScore: 8,
    popularity: "low",
    safetyTips: ["Bawa GPS/kompas", "Siapkan obat-obatan"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Kancana merupakan pendakian panjang dan menantang dengan medan terjal. Jalur-nya relatif remote sehingga lebih cocok untuk pendaki berpengalaman. Selama perjalanan, pendaki akan menemukan pemandangan alam lepas dan pengalaman hiking yang menenangkan jauh dari keramaian.",
    historicalFact: "Dipercaya sebagai tempat penyimpanan harta karun (kancana) atau emas di masa lalu, oleh sebab itu namanya Kancana.",
    calorieEstimate: 2900, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Kancana+Photo+1",
        "https://via.placeholder.com/300x200?text=Kancana+Photo+2",
        "https://via.placeholder.com/300x200?text=Kancana+Photo+3",
    ],
    trackCoordinates: [
         [-7.4030, 108.2200], [-7.4025, 108.2195], [-7.4020, 108.2190]
    ],
    reviews: [
        { id: 701, user: "Herman T.", rating: 5, date: "2024-09-08", comment: "Sepi dan menantang. Cocok untuk yang suka petualangan sejati." },
        { id: 702, user: "Vina W.", rating: 4, date: "2024-08-15", comment: "Jalur panjang dan licin, navigasi harus kuat." },
    ]
  },

  {
    id: 8,
    name: "Gunung Bukit Tunggul",
    location: "Bandung",
    coordinates: [-6.9000, 107.6200],
    difficulty: "easy",
    distance: 2.2,
    elevation: 450,
    duration: "1-2 jam",
    description:
      "Bukit Tunggul adalah bukit pendek dengan jalur yang mudah dan pemandangan kota dari puncak. Sangat cocok untuk family outing dan pendaki pemula yang ingin pengalaman singkat namun memuaskan. Jalur tanjakan pendek serta beberapa area foto membuat lokasi ini populer di kalangan fotografer amatir.",
    destinations: ["Viewpoint Kota", "Spot Foto"],
    rules: ["Jaga kebersihan", "Tidak merusak vegetasi"],
    image: "https://bandungbergerak.id/cdn/3/0/3/1/3031.jpg",
    features: ["short_hike", "city_view", "photo_spot"],
    bestTime: ["sore"],
    season: "year_round",
    rating: 4.0,
    reviewsCount: 98,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 3,
    popularity: "medium",
    safetyTips: ["Hati-hati di titik pandang"],
  
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Bukit Tunggul adalah bukit pendek dengan jalur yang mudah dan pemandangan kota dari puncak. Sangat cocok untuk family outing dan pendaki pemula yang ingin pengalaman singkat namun memuaskan. Jalur tanjakan pendek serta beberapa area foto membuat lokasi ini populer di kalangan fotografer amatir.",
    historicalFact: "Merupakan sisa-sisa dari dinding kaldera utara Gunung Sunda Purba yang sangat besar, bersama dengan Gunung Burangrang dan Tangkuban Perahu.",
    calorieEstimate: 800, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Bukit+Tunggul+Photo+1",
        "https://via.placeholder.com/300x200?text=Bukit+Tunggul+Photo+2",
        "https://via.placeholder.com/300x200?text=Bukit+Tunggul+Photo+3",
    ],
    trackCoordinates: [
         [-6.9010, 107.6210], [-6.9005, 107.6205], [-6.9000, 107.6200]
    ],
    reviews: [
        { id: 801, user: "Fam Z.", rating: 4, date: "2024-11-12", comment: "Pendakian singkat yang menyenangkan. Pemandangan kota Bandung bagus." },
        { id: 802, user: "Rani A.", rating: 3, date: "2024-10-01", comment: "Sangat mudah, cocok untuk pemanasan sebelum ke gunung yang lebih besar." },
    ]
  },

  {
    id: 9,
    name: "Gunung Burangrang",
    location: "Bandung Barat",
    coordinates: [-6.7890, 107.5120],
    difficulty: "hard",
    distance: 10.5,
    elevation: 2068,
    duration: "7-9 jam",
    description:
      "Burangrang adalah gunung yang menantang dengan trek berbatu dan beberapa tebing. Pemandangan dari puncak luas dan dramatis, memperlihatkan jajaran pegunungan di Bandung Barat. Jalur ini cocok bagi pendaki yang mencari pengalaman teknis dan kepuasan melihat panorama tinggi.",
    destinations: ["Puncak Tebing", "Ridge Views", "Spot Panorama"],
    rules: ["Gunakan peralatan keselamatan pada jalur terjal"],
    image: "https://cdn1-production-images-kly.akamaized.net/AiBAPju9n4YxW8KXqHyYxXnNPxM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4601503/original/096173900_1696589026-WhatsApp_Image_2023-10-06_at_17.39.44.jpeg",
    features: ["tebing", "rocky", "panorama"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.2,
    reviewsCount: 44,
    permitNeeded: true,
    parking: false,
    trailType: "oneway",
    difficultyScore: 8,
    popularity: "medium",
    safetyTips: ["Gunakan sepatu berkait kuat"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Burangrang adalah gunung yang menantang dengan trek berbatu dan beberapa tebing. Pemandangan dari puncak luas dan dramatis, memperlihatkan jajaran pegunungan di Bandung Barat. Jalur ini cocok bagi pendaki yang mencari pengalaman teknis dan kepuasan melihat panorama tinggi.",
    historicalFact: "Burangrang merupakan salah satu 'anak' dari Gunung Sunda Purba, yang terbentuk setelah letusan hebat di masa lampau.",
    calorieEstimate: 2700, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Burangrang+Photo+1",
        "https://via.placeholder.com/300x200?text=Burangrang+Photo+2",
        "https://via.placeholder.com/300x200?text=Burangrang+Photo+3",
    ],
    trackCoordinates: [
         [-6.7900, 107.5130], [-6.7895, 107.5125], [-6.7890, 107.5120]
    ],
    reviews: [
        { id: 901, user: "Eka P.", rating: 4, date: "2024-09-19", comment: "Trek batuannya menantang. Pemandangan tebingnya dramatis!" },
        { id: 902, user: "Fajar G.", rating: 3, date: "2024-08-29", comment: "Perlu fokus tinggi di beberapa tanjakan terjal." },
    ]
  },

  {
    id: 10,
    name: "Gunung Bongkok",
    location: "Cibadak",
    coordinates: [-6.7740, 106.9000],
    difficulty: "medium",
    distance: 6.0,
    elevation: 900,
    duration: "4-5 jam",
    description:
      "Bongkok menyuguhkan jalur hutan dan padang yang tenang, cocok untuk pendaki yang menginginkan suasana alam tanpa keramaian. Trek yang seimbang antara tanjakan dan dataran membuatnya pilihan bagi kelompok kecil dan pecinta camping di alam terbuka.",
    destinations: ["Padang Camping", "Viewpoint Bukit"],
    rules: ["Tidak membuat kebisingan berlebihan", "Tinggalkan lokasi rapi"],
    image: "https://sumedangtandang.com/upload/foto/gunung_tampomas_gunung_bongkok.jpg",
    features: ["forest", "panorama", "camping"],
    bestTime: ["pagi"],
    season: "year_round",
    rating: 3.9,
    reviewsCount: 30,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 5,
    popularity: "low",
    safetyTips: ["Bawa penerangan jika pulang malam"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Bongkok menyuguhkan jalur hutan dan padang yang tenang, cocok untuk pendaki yang menginginkan suasana alam tanpa keramaian. Trek yang seimbang antara tanjakan dan dataran membuatnya pilihan bagi kelompok kecil dan pecinta camping di alam terbuka.",
    historicalFact: "Dinamakan Bongkok (bungkuk) karena bentuk puncaknya yang menyerupai punggung orang yang sedang membungkuk jika dilihat dari kejauhan.",
    calorieEstimate: 1500, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Bongkok+Photo+1",
        "https://via.placeholder.com/300x200?text=Bongkok+Photo+2",
        "https://via.placeholder.com/300x200?text=Bongkok+Photo+3",
    ],
    trackCoordinates: [
         [-6.7750, 106.9010], [-6.7745, 106.9005], [-6.7740, 106.9000]
    ],
    reviews: [
        { id: 1001, user: "Udin B.", rating: 4, date: "2024-07-05", comment: "Tempat camping yang asyik, tidak terlalu ramai." },
        { id: 1002, user: "Tia S.", rating: 4, date: "2024-06-25", comment: "Jalur hutan yang tenang. Cocok untuk lari pagi." },
    ]
  },

  {
    id: 11,
    name: "Gunung Wayang",
    location: "Bandung",
    coordinates: [-6.9, 107.63],
    difficulty: "easy",
    distance: 2.5,
    elevation: 300,
    duration: "1-2 jam",
    description:
      "Wayang adalah gunung pendek yang sangat ramah bagi pendaki pemula dan keluarga. Jalur pendek dan mudah membuatnya pilihan populer untuk outing singkat dan fotografi pemandangan kota dari ketinggian. Di puncaknya terdapat beberapa batu besar yang menjadi spot foto favorit.",
    destinations: ["Viewpoint Kota", "Spot Foto Batu Besar"],
    rules: ["Jaga kebersihan", "Awasi anak-anak di tebing kecil"],
    image: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/28/Ilustrasi-Fakta-Gunung-Wayang-Eksplorasi-Menakjubkan-di-Tengah-Keindahan-Alam-3135199983.jpg",
    features: ["short_hike", "photo_spot", "family_friendly"],
    bestTime: ["sore"],
    season: "year_round",
    rating: 3.9,
    reviewsCount: 65,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 2,
    popularity: "medium",
    safetyTips: ["Awasi anak-anak di titik tebing kecil"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Wayang adalah gunung pendek yang sangat ramah bagi pendaki pemula dan keluarga. Jalur pendek dan mudah membuatnya pilihan populer untuk outing singkat dan fotografi pemandangan kota dari ketinggian. Di puncaknya terdapat beberapa batu besar yang menjadi spot foto favorit.",
    historicalFact: "Gunung ini sering dikaitkan dengan legenda Sangkuriang, sebagai sisa material letusan besar yang membentuk cekungan Bandung.",
    calorieEstimate: 700, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Wayang+Photo+1",
        "https://via.placeholder.com/300x200?text=Wayang+Photo+2",
        "https://via.placeholder.com/300x200?text=Wayang+Photo+3",
    ],
    trackCoordinates: [
         [-6.9010, 107.6310], [-6.9005, 107.6305], [-6.9000, 107.6300]
    ],
    reviews: [
        { id: 1101, user: "Keluarga J.", rating: 4, date: "2024-12-01", comment: "Pendakian sore yang santai, anak-anak suka dengan pemandangan kotanya." },
        { id: 1102, user: "Rima S.", rating: 4, date: "2024-11-05", comment: "Jalur yang sangat *friendly* untuk *short hike*." },
    ]
  },

  {
    id: 12,
    name: "Gunung Tilu",
    location: "Sumedang",
    coordinates: [-6.8000, 107.9000],
    difficulty: "medium",
    distance: 7.5,
    elevation: 1200,
    duration: "4-6 jam",
    description:
      "Tilu menyajikan kombinasi hutan dan punggung bukit yang indah. Jalur tidak terlalu panjang namun menawarkan pemandangan luas di puncak. Cocok untuk pendaki menengah yang mencari trek seimbang antara level fisik dan pemandangan.",
    destinations: ["Puncak Padang Rumput", "Rute Hutan"],
    rules: ["Cek cuaca sebelum berangkat"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjNNHCl16keKp6cOTgE-R1UDqYWFphUpDyw&s",
    features: ["camping", "forest"],
    bestTime: ["pagi"],
    season: "year_round",
    rating: 4.1,
    reviewsCount: 29,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 6,
    popularity: "low",
    safetyTips: ["Bawa perbekalan cukup"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Tilu menyajikan kombinasi hutan dan punggung bukit yang indah. Jalur tidak terlalu panjang namun menawarkan pemandangan luas di puncak. Cocok untuk pendaki menengah yang mencari trek seimbang antara level fisik dan pemandangan.",
    historicalFact: "Tilu berarti 'tiga', merujuk pada tiga puncak utama yang terlihat dari kejauhan, memberikan pemandangan yang unik.",
    calorieEstimate: 1700, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Tilu+Photo+1",
        "https://via.placeholder.com/300x200?text=Tilu+Photo+2",
        "https://via.placeholder.com/300x200?text=Tilu+Photo+3",
    ],
    trackCoordinates: [
         [-6.8010, 107.9010], [-6.8005, 107.9005], [-6.8000, 107.9000]
    ],
    reviews: [
        { id: 1201, user: "Soni R.", rating: 4, date: "2024-09-01", comment: "Pemandangan dari salah satu puncaknya sangat luas dan indah." },
        { id: 1202, user: "Reni A.", rating: 4, date: "2024-08-10", comment: "Jalur yang menantang namun sangat *worth it*." },
    ]
  },

  {
    id: 13,
    name: "Gunung Malabar",
    location: "Garut",
    coordinates: [-7.2440, 107.8970],
    difficulty: "medium",
    distance: 9.0,
    elevation: 2000,
    duration: "6-8 jam",
    description:
      "Malabar ialah gunung populer dengan trek panjang dan pemandangan sunrise. Halaman punggung bukitnya menawarkan panorama indah ke lembah sekitarnya. Trek cukup menantang di beberapa titik, namun pemandangannya sepadan dengan usaha.",
    destinations: ["Sunrise Ridge", "Camp Ground", "Spot Foto"],
    rules: ["Jangan merusak habitat langka"],
    image: "https://bandungbergerak.id/cdn/2/3/3/0/gunung_puncak_besar_malabar_2_840x576.jpg",
    features: ["sunrise", "forest"],
    bestTime: ["subuh"],
    season: "dry_months",
    rating: 4.5,
    reviewsCount: 180,
    permitNeeded: false,
    parking: true,
    trailType: "oneway",
    difficultyScore: 7,
    popularity: "high",
    safetyTips: ["Berangkat dini hari untuk puncak sunrise"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Malabar ialah gunung populer dengan trek panjang dan pemandangan sunrise. Halaman punggung bukitnya menawarkan panorama indah ke lembah sekitarnya. Trek cukup menantang di beberapa titik, namun pemandangannya sepadan dengan usaha.",
    historicalFact: "Puncak Malabar terdapat makam seorang tokoh yang sangat berpengaruh dalam dunia perkebunan Kina di Indonesia, yakni Karel Albert Rudolf Bosscha.",
    calorieEstimate: 2400, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Malabar+Photo+1",
        "https://via.placeholder.com/300x200?text=Malabar+Photo+2",
        "https://via.placeholder.com/300x200?text=Malabar+Photo+3",
    ],
    trackCoordinates: [
         [-7.2450, 107.8980], [-7.2445, 107.8975], [-7.2440, 107.8970]
    ],
    reviews: [
        { id: 1301, user: "Adi W.", rating: 5, date: "2024-11-08", comment: "Pemandangan kebun tehnya luar biasa. Puncak yang tenang." },
        { id: 1302, user: "Mega S.", rating: 4, date: "2024-10-22", comment: "Jalur cukup panjang tapi teduh oleh pepohonan." },
    ]
  },

  {
    id: 14,
    name: "Gunung Halimun",
    location: "Bogor",
    coordinates: [-6.6980, 106.9045],
    difficulty: "hard",
    distance: 20.0,
    elevation: 1426,
    duration: "10-12 jam",
    description:
      "Halimun adalah bagian dari Taman Nasional Halimun-Salak — kawasan yang kaya flora dan fauna. Pendakian panjang dengan hutan lebat dan jalur yang menantang, cocok bagi pendaki yang ingin merasakan alam liar dan keanekaragaman hayati. Sebagai taman nasional, diperlukan izin tertentu dan kepatuhan terhadap peraturan konservasi.",
    destinations: ["Taman Nasional Halimun-Salak", "Area Flora & Fauna"],
    rules: ["Butuh izin taman nasional", "Jangan beri makan satwa"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/North-east_view_over_forest_valley_from_Gunung_Salak_1_Halimun_Salak_National_Park.jpg",
    features: ["taman_nasional", "hutan_lebat"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.4,
    reviewsCount: 65,
    permitNeeded: true,
    parking: false,
    trailType: "trekking",
    difficultyScore: 9,
    popularity: "medium",
    safetyTips: ["Jaga jarak dengan satwa", "Bawa perbekalan lebih"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Halimun adalah bagian dari Taman Nasional Halimun-Salak — kawasan yang kaya flora dan fauna. Pendakian panjang dengan hutan lebat dan jalur yang menantang, cocok bagi pendaki yang ingin merasakan alam liar dan keanekaragaman hayati. Sebagai taman nasional, diperlukan izin tertentu dan kepatuhan terhadap peraturan konservasi.",
    historicalFact: "Halimun berarti 'kabut', mencerminkan kondisi hutan yang hampir selalu diselimuti kabut dan basah, menjadikannya salah satu hutan hujan tropis terbaik di Jawa.",
    calorieEstimate: 3200, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Halimun+Photo+1",
        "https://via.placeholder.com/300x200?text=Halimun+Photo+2",
        "https://via.placeholder.com/300x200?text=Halimun+Photo+3",
    ],
    trackCoordinates: [
         [-6.6990, 106.9055], [-6.6985, 106.9050], [-6.6980, 106.9045]
    ],
    reviews: [
        { id: 1401, user: "Rudi M.", rating: 5, date: "2024-10-28", comment: "Pengalaman trekking hutan hujan sejati. Flora dan faunanya sangat kaya!" },
        { id: 1402, user: "Sinta F.", rating: 4, date: "2024-09-15", comment: "Butuh persiapan fisik dan izin yang matang. Sangat menantang." },
    ]
  },

  {
    id: 15,
    name: "Gunung Guntur",
    location: "Garut",
    coordinates: [-7.2450, 107.8630],
    difficulty: "medium",
    distance: 6.0,
    elevation: 2240,
    duration: "5-7 jam",
    description:
      "Guntur adalah gunung aktif kecil dengan jalur pendakian jelas dan pemandangan luas. Keunikan berupa area kawah di sekitarnya dan panorama gunung-gunung di kejauhan. Karena status aktivitas vulkanik, pendaki diimbau mengikuti info terkini dari otoritas setempat.",
    destinations: ["Kawah Sekitar Puncak", "Viewpoint 360°"],
    rules: ["Cek status aktivitas gunung", "Ikuti arahan petugas jika ada"],
    image: "https://awsimages.detik.net.id/community/media/visual/2022/08/10/kaki-gunung-guntur_169.jpeg?w=1200",
    features: ["kawah", "panorama"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.2,
    reviewsCount: 140,
    permitNeeded: true,
    parking: true,
    trailType: "oneway",
    difficultyScore: 7,
    popularity: "high",
    safetyTips: ["Hindari area kawah aktif"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Guntur adalah gunung aktif kecil dengan jalur pendakian jelas dan pemandangan luas. Keunikan berupa area kawah di sekitarnya dan panorama gunung-gunung di kejauhan. Karena status aktivitas vulkanik, pendaki diimbau mengikuti info terkini dari otoritas setempat.",
    historicalFact: "Nama Guntur (petir) diberikan karena sering terdengar suara gemuruh yang keras dari kawahnya di masa lalu, mirip suara petir yang menggelegar.",
    calorieEstimate: 2300, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Guntur+Photo+1",
        "https://via.placeholder.com/300x200?text=Guntur+Photo+2",
        "https://via.placeholder.com/300x200?text=Guntur+Photo+3",
    ],
    trackCoordinates: [
         [-7.2460, 107.8640], [-7.2455, 107.8635], [-7.2450, 107.8630]
    ],
    reviews: [
        { id: 1501, user: "Rendi A.", rating: 4, date: "2024-11-29", comment: "Jalur yang terbuka, panas di siang hari. Tapi *view*nya keren!" },
        { id: 1502, user: "Wulan P.", rating: 3, date: "2024-10-10", comment: "Pendakian cukup terjal di bagian atas, hati-hati dengan pasirnya." },
    ]
  },

  {
    id: 16,
    name: "Gunung Cikuray",
    location: "Garut",
    coordinates: [-7.3497, 107.8570],
    difficulty: "hard",
    distance: 18.0,
    elevation: 2821,
    duration: "10-14 jam",
    description:
      "Cikuray termasuk puncak tinggi di Jawa Barat dengan rute panjang dan medan menantang. Puncaknya memberi panorama 360 derajat dan cuaca yang cepat berubah, sehingga pendaki harus mempersiapkan perlengkapan untuk kondisi dingin dan hujan. Cikuray cocok untuk pendakian serius dan pengalaman alam yang intens.",
    destinations: ["Puncak 360°", "Rute Tebing", "Camp High"],
    rules: ["Jangan mendaki saat cuaca buruk", "Bawa peralatan 4 musim jika diperlukan"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgIlqXdud7FYRpE3de8bh0Bvc8uKaGsbnew&s",
    features: ["high_peak", "cold", "technical"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.6,
    reviewsCount: 210,
    permitNeeded: true,
    parking: false,
    trailType: "expedition",
    difficultyScore: 10,
    popularity: "high",
    safetyTips: ["Pengalaman gunung tinggi diperlukan"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Cikuray termasuk puncak tinggi di Jawa Barat dengan rute panjang dan medan menantang. Puncaknya memberi panorama 360 derajat dan cuaca yang cepat berubah, sehingga pendaki harus mempersiapkan perlengkapan untuk kondisi dingin dan hujan. Cikuray cocok untuk pendakian serius dan pengalaman alam yang intens.",
    historicalFact: "Dikenal memiliki tanjakan yang tiada henti atau 'tanpa bonus'. Di puncaknya terdapat bekas menara pemancar TV yang ikonik.",
    calorieEstimate: 4000, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Cikuray+Photo+1",
        "https://via.placeholder.com/300x200?text=Cikuray+Photo+2",
        "https://via.placeholder.com/300x200?text=Cikuray+Photo+3",
    ],
    trackCoordinates: [
         [-7.3507, 107.8580], [-7.3502, 107.8575], [-7.3497, 107.8570]
    ],
    reviews: [
        { id: 1601, user: "Jaka P.", rating: 5, date: "2024-11-01", comment: "Gunung sejati bagi yang cari tantangan fisik. Pemandangan puncaknya memang juara." },
        { id: 1602, user: "Lita M.", rating: 4, date: "2024-10-20", comment: "Tanjakannya gila! Tapi puas setelah sampai di atas." },
    ]
  },

  {
    id: 17,
    name: "Gunung Ciremai",
    location: "Kuningan",
    coordinates: [-7.2386, 108.5547],
    difficulty: "hard",
    distance: 16.0,
    elevation: 3078,
    duration: "10-12 jam",
    description:
      "Ciremai adalah puncak tertinggi di Jawa Barat dan menawarkan pendakian panjang yang menantang namun sangat memuaskan. Rute pendakian melalui hutan, padang rumput tinggi, dan area berbatu. Pada hari cerah, pemandangan dari puncak sangat luas—dari Jawa Barat hingga bagian Jawa Tengah.",
    destinations: ["Puncak Ciremai", "Padang Edelweiss", "Camp High"],
    rules: ["Izin taman atau jalur resmi mungkin diperlukan", "Jangan menebang pohon"],
    image: "https://radarcirebon.disway.id/upload/2468cb945dccf6586c79d0aca0665881.jpg",
    features: ["high_peak", "sunrise", "edelweiss"],
    bestTime: ["subuh"],
    season: "dry_months",
    rating: 4.7,
    reviewsCount: 400,
    permitNeeded: true,
    parking: false,
    trailType: "expedition",
    difficultyScore: 10,
    popularity: "very_high",
    safetyTips: ["Siapkan fisik dan perlengkapan lengkap"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Ciremai adalah puncak tertinggi di Jawa Barat dan menawarkan pendakian panjang yang menantang namun sangat memuaskan. Rute pendakian melalui hutan, padang rumput tinggi, dan area berbatu. Pada hari cerah, pemandangan dari puncak sangat luas—dari Jawa Barat hingga bagian Jawa Tengah.",
    historicalFact: "Sebagai gunung tertinggi di Jawa Barat, Ciremai sering dianggap sebagai atap Jawa Barat dan memiliki kawah yang masih aktif.",
    calorieEstimate: 4200, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Ciremai+Photo+1",
        "https://via.placeholder.com/300x200?text=Ciremai+Photo+2",
        "https://via.placeholder.com/300x200?text=Ciremai+Photo+3",
    ],
    trackCoordinates: [
         [-7.2396, 108.5557], [-7.2391, 108.5552], [-7.2386, 108.5547]
    ],
    reviews: [
        { id: 1701, user: "Rangga D.", rating: 5, date: "2024-12-05", comment: "Puncak tertinggi di Jabar! Pemandangan 360 derajat yang luar biasa. Wajib didaki." },
        { id: 1702, user: "Citra H.", rating: 4, date: "2024-11-18", comment: "Medan panjang dan dingin. Persiapan air sangat penting." },
    ]
  },

  {
    id: 18,
    name: "Gunung Tangkuban Perahu",
    location: "Bandung Barat",
    coordinates: [-6.7697, 107.6098],
    difficulty: "easy",
    distance: 2.5,
    elevation: 2084,
    duration: "1-2 jam",
    description:
      "Tangkuban Perahu adalah ikon vulkanik dekat Bandung yang terkenal dengan kawahnya yang mudah diakses. Karena infrastrukturnya cukup baik, lokasi ini sering ramai turis. Pendakian relatif singkat namun kawasan kawah menawarkan pemandangan menakjubkan dan pengalaman geologi yang menarik.",
    destinations: ["Kawah Ratu", "Kawah Domas", "Pusat Wisata"],
    rules: ["Tidak mendekati area yang berbahaya", "Patuhi petunjuk wisata"],
    image: "https://rainbowrentcar.com/wp-content/uploads/2023/06/Melihat-Keajaiban-Alam-Tangkuban-Perahu-Landmark-Bersejarah-di-Bandung-1024x681.webp",
    features: ["kawah", "tourist_spot", "parkir"],
    bestTime: ["pagi"],
    season: "year_round",
    rating: 4.6,
    reviewsCount: 1000,
    permitNeeded: false,
    parking: true,
    trailType: "tourism",
    difficultyScore: 2,
    popularity: "very_high",
    safetyTips: ["Waspadai area beruap"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Tangkuban Perahu adalah ikon vulkanik dekat Bandung yang terkenal dengan kawahnya yang mudah diakses. Karena infrastrukturnya cukup baik, lokasi ini sering ramai turis. Pendakian relatif singkat namun kawasan kawah menawarkan pemandangan menakjubkan dan pengalaman geologi yang menarik.",
    historicalFact: "Terkait erat dengan legenda Sangkuriang, konon merupakan perahu yang ditendang hingga terbalik, membentuk cekungan kawah yang besar.",
    calorieEstimate: 500, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Tangkuban+Photo+1",
        "https://via.placeholder.com/300x200?text=Tangkuban+Photo+2",
        "https://via.placeholder.com/300x200?text=Tangkuban+Photo+3",
    ],
    trackCoordinates: [
         [-6.7707, 107.6108], [-6.7702, 107.6103], [-6.7697, 107.6098]
    ],
    reviews: [
        { id: 1801, user: "Wisatawan B.", rating: 5, date: "2024-12-01", comment: "Kawahnya besar dan sangat unik. Cocok untuk *sightseeing*." },
        { id: 1802, user: "Pelajar F.", rating: 4, date: "2024-11-10", comment: "Bau belerang cukup kuat. Pemandangan kawah Ratu sangat impresif." },
    ]
  },

  {
    id: 19,
    name: "Gunung Tampomas",
    location: "Sumedang",
    coordinates: [-6.7650, 107.9010],
    difficulty: "medium",
    distance: 7.0,
    elevation: 1684,
    duration: "5-6 jam",
    description:
      "Tampomas adalah gunung dengan jalur alami yang memberi pemandangan perbukitan dan spot sunrise yang indah. Trek cukup menantang pada beberapa segmen namun cocok untuk pendaki menengah. Panorama dari puncak menampilkan lanskap pedesaan yang luas.",
    destinations: ["Sunrise Viewpoint", "Trek Hutan"],
    rules: ["Jangan membuang sampah", "Hormati tanda larangan setempat"],
    image: "https://cdn1-production-images-kly.akamaized.net/y7o81iNGaiuDm9SsOI4nM4fX7Fg=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4809588/original/021881100_1713828380-WhatsApp_Image_2024-04-23_at_06.14.50.jpeg",
    features: ["sunrise", "forest", "panorama"],
    bestTime: ["subuh"],
    season: "dry_months",
    rating: 4.0,
    reviewsCount: 54,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 6,
    popularity: "medium",
    safetyTips: ["Berangkat pagi untuk kondisi terbaik"],
    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Tampomas adalah gunung dengan jalur alami yang memberi pemandangan perbukitan dan spot sunrise yang indah. Trek cukup menantang pada beberapa segmen namun cocok untuk pendaki menengah. Panorama dari puncak menampilkan lanskap pedesaan yang luas.",
    historicalFact: "Tampomas berarti 'emas', diyakini gunung ini menyimpan kandungan emas atau harta karun sehingga menjadi nama gunung ini.",
    calorieEstimate: 2100, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Tampomas+Photo+1",
        "https://via.placeholder.com/300x200?text=Tampomas+Photo+2",
        "https://via.placeholder.com/300x200?text=Tampomas+Photo+3",
    ],
    trackCoordinates: [
         [-6.7660, 107.9020], [-6.7655, 107.9015], [-6.7650, 107.9010]
    ],
    reviews: [
        { id: 1901, user: "Hadi S.", rating: 4, date: "2024-10-05", comment: "Jalur yang pas untuk *weekend hiking*. Pemandangan Sumedang dari atas cantik." },
        { id: 1902, user: "Dewi P.", rating: 3, date: "2024-09-18", comment: "Beberapa bagian trek cukup terjal dan licin saat hujan." },
    ]
  },

 {
    id: 20,
    name: "Gunung Salak",
    location: "Bogor",
    coordinates: [-6.7081, 106.7514],
    difficulty: "hard",
    distance: 12.0,
    elevation: 2211,
    duration: "8-10 jam",
    description:
      "Salak terkenal dengan rute yang bervariasi dan cuaca yang cepat berubah. Hutan lebat dan jalur yang curam membuat pendakian menantang; namun kekayaan flora dan fauna serta pemandangan dari puncak menjadi daya tarik utama. Rute ke Salak harus dihadapi dengan persiapan serius dan perhatian terhadap keselamatan.",
    destinations: ["Puncak Salak", "Rute Hutan", "Spot Panorama"],
    rules: ["Cek prakiraan cuaca", "Ikuti jalur resmi"],
    image: "https://asset.kompas.com/crops/BDbr-itiPR-xkoH3eJik0Xrp3yI=/0x79:2048x1444/1200x800/data/photo/2021/06/07/60bdbdec7c91e.jpeg",
    features: ["forest", "rain", "technical"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.3,
    reviewsCount: 320,
    permitNeeded: true,
    parking: false,
    trailType: "trekking",
    difficultyScore: 9,
    popularity: "very_high",
    safetyTips: ["Bawa peta & navigasi"],

    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Gunung Salak terkenal dengan rute pendakian yang menantang dan cuaca yang tidak terduga, sering ditutupi kabut tebal. Jalur yang dilalui bervariasi dari hutan hujan lebat, sungai, hingga jalur teknikal yang membutuhkan *scrambling*. Pendakian ini sangat menguji fisik dan mental, menjadikannya favorit di kalangan pendaki berpengalaman.",
    historicalFact: "Nama 'Salak' dipercaya berasal dari kata 'Salaka' dalam bahasa Sanskerta yang berarti perak, bukan buah salak. Gunung ini juga dikenal dengan kisah mistis dan mitos lokal yang lekat.",
    calorieEstimate: 2600, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Salak+Forest+View",
        "https://via.placeholder.com/300x200?text=Salak+Technical+Trail",
        "https://via.placeholder.com/300x200?text=Salak+Summit+Panorama",
    ],
    trackCoordinates: [
          [-6.7091, 106.7524], [-6.7085, 106.7519], [-6.7081, 106.7514]
    ],
    reviews: [
        { id: 2001, user: "Rudi A.", rating: 5, date: "2024-11-20", comment: "Sangat menantang, persis seperti yang kubayangkan. Jalur teknikalnya seru!" },
        { id: 2002, user: "Fia N.", rating: 4, date: "2024-10-15", comment: "Cuaca sering hujan, tapi pemandangannya saat cerah sangat indah. Wajib bawa jas hujan tebal." },
    ]
  },

  {
    id: 21,
    name: "Gunung Papandayan",
    location: "Garut",
    coordinates: [-7.3310, 107.4810],
    difficulty: "medium",
    distance: 8.0,
    elevation: 2665,
    duration: "6-8 jam",
    description:
      "Papandayan terkenal dengan hamparan edelweiss, kawah belerang, dan padang luas. Trek menawarkan kombinasi pemandangan alpen tropis dan fitur vulkanik unik. Kondisi jalur bervariasi, namun banyak spot camping dan pemandangan spektakuler, terutama saat cuaca cerah.",
    destinations: ["Padang Edelweiss", "Kawah Papandayan", "Camp Ground"],
    rules: ["Jangan memetik bunga edelweiss", "Registrasi sebelum naik"],
    image: "https://asset.kompas.com/crops/t5Dg5nmJNgL3PxX6zp3KmXIOTFI=/0x0:999x666/1200x800/data/photo/2021/08/25/61263bf38df6c.jpg",
    features: ["edelweiss", "kawah", "camping"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.5,
    reviewsCount: 420,
    permitNeeded: true,
    parking: true,
    trailType: "oneway",
    difficultyScore: 7,
    popularity: "very_high",
    safetyTips: ["Jangan merusak padang bunga"],

    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Papandayan menawarkan pendakian dengan pemandangan yang sangat bervariasi. Mulai dari hutan mati, kawah belerang aktif, hingga Padang Edelweiss Tegal Alun yang menakjubkan. Jalur ini populer untuk camping karena banyaknya area datar yang disediakan. Tingkat tanjakan yang cukup curam namun jaraknya yang pendek membuat pendakian ini selesai dalam waktu relatif cepat.",
    historicalFact: "Gunung ini aktif dan terkenal dengan letusan besarnya pada tahun 1772, yang mengubah bentuk kawahnya secara drastis. Kawah yang masih aktif hingga kini menjadi daya tarik utama.",
    calorieEstimate: 1900, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Papandayan+Edelweiss+Field",
        "https://via.placeholder.com/300x200?text=Papandayan+Crater",
        "https://via.placeholder.com/300x200?text=Papandayan+Campground",
    ],
    trackCoordinates: [
          [-7.3320, 107.4820], [-7.3315, 107.4815], [-7.3310, 107.4810]
    ],
    reviews: [
        { id: 2101, user: "Sari M.", rating: 5, date: "2024-11-01", comment: "Sangat *recommended* untuk pemandangan padang edelweissnya. Fasilitas camping sangat baik." },
        { id: 2102, user: "Denny H.", rating: 4, date: "2024-10-25", comment: "Bau belerang cukup kuat di area kawah, tapi treknya tidak terlalu berat. Cocok untuk pemula-menengah." },
    ]
  },

  {
    id: 22,
    name: "Gunung Pangrango",
    location: "Bogor",
    coordinates: [-6.8011, 106.9123],
    difficulty: "hard",
    distance: 18.0,
    elevation: 3019,
    duration: "10-12 jam",
    description:
      "Pangrango sering dipasangkan dengan Gede untuk rute dua puncak; puncaknya tinggi dan kondisi udara dingin. Trek panjang dan kondisi medan variatif membuatnya cocok untuk pendaki berpengalaman. Pemandangan dari puncak termasuk salah satu yang terbaik di Jawa Barat.",
    destinations: ["Puncak Pangrango", "Jalur Gede-Pangrango"],
    rules: ["Izin pendakian dan registrasi", "Jangan menyalakan api sembarangan"],
    image: "https://asset.kompas.com/crops/20_aQ0D6Q2pOi2lSXV26DL5mXVw=/5x0:1000x663/1200x800/data/photo/2020/10/20/5f8eb67f00b85.jpg",
    features: ["high_peak", "trekking", "cold"],
    bestTime: ["subuh"],
    season: "dry_months",
    rating: 4.6,
    reviewsCount: 500,
    permitNeeded: true,
    parking: false,
    trailType: "expedition",
    difficultyScore: 10,
    popularity: "very_high",
    safetyTips: ["Siapkan perlengkapan musim dingin"],

    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Pangrango adalah pendakian ekspedisi yang membutuhkan fisik prima. Puncak Mandalanwangi (3019 mdpl) sering diselimuti suhu beku dan kabut tebal. Jalur pendakiannya panjang, menantang, dan melewati hutan hujan yang sangat lembap. Ini adalah trek untuk pendaki yang mencari tantangan sejati dan pengalaman di atas 3000 mdpl.",
    historicalFact: "Puncak Pangrango, Mandalanwangi, adalah tempat yang memiliki nilai sejarah penting bagi tokoh konservasi Indonesia, seperti Dr. C. G. G. J. van Steenis dan Soe Hok Gie.",
    calorieEstimate: 3500, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Pangrango+Mandalanwangi",
        "https://via.placeholder.com/300x200?text=Pangrango+Cold+Summit",
        "https://via.placeholder.com/300x200?text=Pangrango+Long+Trek",
    ],
    trackCoordinates: [
          [-6.8021, 106.9133], [-6.8015, 106.9128], [-6.8011, 106.9123]
    ],
    reviews: [
        { id: 2201, user: "Bima S.", rating: 5, date: "2024-11-15", comment: "Trek paling menantang dan paling memuaskan. Dinginnya luar biasa!" },
        { id: 2202, user: "Rina F.", rating: 5, date: "2024-10-20", comment: "Pengalaman ekspedisi sejati. Tidak direkomendasikan untuk pemula. Persiapan sangat matang diperlukan." },
    ]
  },

  {
    id: 23,
    name: "Gunung Galunggung",
    location: "Tasikmalaya",
    coordinates: [-7.2919, 108.0361],
    difficulty: "medium",
    distance: 6.5,
    elevation: 2167,
    duration: "5-6 jam",
    description:
      "Galunggung memiliki kawah dan area panas bumi, ditambah panorama yang luas. Kawasan ini juga dikenal sejarah letusan besar yang membentuk lanskap saat ini. Jalur relatif pendek namun pemandangan kawah dan lerengnya membuat pendakian ini populer di kalangan wisatawan dan pendaki.",
    destinations: ["Kawah Galunggung", "Hot Springs", "Viewpoint Kawah"],
    rules: ["Jangan mendekati area beruap panas", "Patuhi jalur terlarang"],
    image: "https://travelspromo.com/wp-content/uploads/2022/12/Anak-tangga-menuju-kawah-Gunung-Galunggung-Tasikmalaya-1200x900.webp",
    features: ["kawah", "hot_springs", "view"],
    bestTime: ["pagi"],
    season: "dry_months",
    rating: 4.2,
    reviewsCount: 210,
    permitNeeded: false,
    parking: true,
    trailType: "oneway",
    difficultyScore: 7,
    popularity: "high",
    safetyTips: ["Jangan mendekati area beruap"],

    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Gunung Galunggung menawarkan pendakian yang didominasi oleh anak tangga di awal rute, menguras energi namun memberikan akses cepat ke kawah yang indah. Kawah Galunggung kini membentuk danau dengan warna air hijau kebiruan yang dramatis. Jalur ini populer bagi wisatawan dan pendaki harian yang ingin menikmati keindahan geologis dalam waktu singkat.",
    historicalFact: "Gunung ini meletus secara dahsyat pada tahun 1822 dan 1982. Letusan 1982 menghasilkan fenomena *lahar* yang merusak dan membentuk morfologi kawah yang dapat dilihat sekarang.",
    calorieEstimate: 1600, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=Galunggung+Crater+Lake",
        "https://via.placeholder.com/300x200?text=Galunggung+Stairs",
        "https://via.placeholder.com/300x200?text=Galunggung+Hot+Springs",
    ],
    trackCoordinates: [
          [-7.2929, 108.0371], [-7.2924, 108.0366], [-7.2919, 108.0361]
    ],
    reviews: [
        { id: 2301, user: "Tono P.", rating: 4, date: "2024-11-28", comment: "Anak tangganya lumayan menantang, tapi kawahnya indah. Cocok untuk wisata sekaligus olahraga." },
        { id: 2302, user: "Wulan D.", rating: 4, date: "2024-10-05", comment: "Pemandangan dari atas kawah spektakuler. Fasilitas parkir dan hot springsnya bagus." },
    ]
  },

  {
    id: 24,
    name: "Gunung Putri Lembang",
    location: "Bandung Barat",
    coordinates: [-6.7244, 107.6100],
    difficulty: "easy",
    distance: 2.8,
    elevation: 1587,
    duration: "1-2 jam",
    description:
      "Gunung Putri Lembang (kadang disebut Gunung Putri) adalah tujuan hiking populer di sekitar Lembang yang menawarkan jalur pendek, mudah, dan pemandangan indah ke lembah. Sangat cocok bagi pemula dan keluarga yang ingin trekking singkat tanpa harus bepergian jauh. Di beberapa titik ada spot foto dan area observasi yang bagus saat cuaca cerah. Karena lokasinya yang dekat Bandung, area ini sering ramai pada akhir pekan.",
    destinations: ["Viewpoint Lembang", "Spot Foto Bukit", "Area Camping Kecil"],
    rules: ["Tidak membuang sampah", "Hormati penduduk lokal"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    features: ["short_hike", "viewpoint"],
    bestTime: ["sore", "pagi"],
    season: "year_round",
    rating: 4.0,
    reviewsCount: 88,
    permitNeeded: false,
    parking: true,
    trailType: "loop",
    difficultyScore: 3,
    popularity: "medium",
    safetyTips: ["Bawa air dan topi untuk terik matahari"],

    // --- DATA BARU UNTUK DETAIL LENGKAP ---
    fullDescription: "Gunung Putri Lembang menawarkan pendakian singkat yang ideal untuk melihat *sunrise* atau *sunset* dengan panorama lembah Lembang dan kota Bandung dari ketinggian. Jalur relatif mudah diakses dan cocok untuk semua level kebugaran, menjadikannya destinasi favorit untuk rekreasi cepat dan fotografi alam.",
    historicalFact: "Di puncaknya terdapat sisa-sisa benteng pengintai peninggalan Belanda bernama **Benteng Gunung Putri**. Tempat ini juga memiliki nilai sejarah terkait perjuangan kemerdekaan di masa lalu.",
    calorieEstimate: 800, // Kcal
    gallery: [
        "https://via.placeholder.com/300x200?text=G.+Putri+Lembang+Sunrise",
        "https://via.placeholder.com/300x200?text=G.+Putri+Lembang+Viewpoint",
        "https://via.placeholder.com/300x200?text=G.+Putri+Lembang+Fort",
    ],
    trackCoordinates: [
          [-6.7254, 107.6110], [-6.7249, 107.6105], [-6.7244, 107.6100]
    ],
    reviews: [
        { id: 2401, user: "Keluarga C.", rating: 4, date: "2024-11-05", comment: "Pendakian keluarga yang sangat ramah anak dan cepat. Pemandangan sorenya bagus." },
        { id: 2402, user: "Yoga T.", rating: 3, date: "2024-09-18", comment: "Jalur yang sangat padat di akhir pekan, tapi ideal untuk latihan lari bukit singkat." },
    ]
  }
];