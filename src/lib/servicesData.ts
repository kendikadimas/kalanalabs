export interface ServiceDetail {
  id: string
  title: string
  subtitle: string
  description: string
  benefits: { title: string; description: string }[]
  useCases: { title: string; description: string }[]
  targetAudience: string[]
  iconName: string
  priceRange: string
  waText: string
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    subtitle: 'Halaman Promosi Terfokus untuk Konversi Penjualan Maksimal',
    description: 'Landing Page adalah satu halaman web terfokus yang dirancang secara khusus untuk kebutuhan kampanye pemasaran atau periklanan online. Tidak seperti halaman web biasa yang memiliki banyak link navigasi, landing page memandu pengunjung menuju satu tindakan spesifik (Call to Action/CTA) seperti membeli produk, mendaftar event, atau mengisi formulir kontak. Pendekatan terpusat ini terbukti meningkatkan persentase konversi (leads/sales) secara signifikan.',
    benefits: [
      {
        title: 'Konversi Jauh Lebih Tinggi',
        description: 'Menghilangkan semua menu dan tautan yang tidak relevan agar pengunjung hanya berfokus pada penawaran produk atau jasa Anda.'
      },
      {
        title: 'Optimal untuk Iklan Berbayar',
        description: 'Sangat cocok dipadukan dengan Google Ads, Meta Ads (Facebook & Instagram), maupun TikTok Ads untuk mendatangkan ROI maksimal.'
      },
      {
        title: 'Kecepatan Muat Ekstrim',
        description: 'Didesain ringan dan dioptimalkan secara teknis untuk meminimalkan waktu muat halaman, mencegah calon pelanggan pergi akibat loading lambat.'
      },
      {
        title: 'Pelacakan Data yang Akurat',
        description: 'Mempermudah integrasi pixel pelacakan dan analitik untuk memantau perilaku pengunjung dan efektivitas kampanye iklan Anda.'
      }
    ],
    useCases: [
      {
        title: 'Penjualan Produk Tunggal',
        description: 'Memperkenalkan produk fisik atau digital unggulan secara detail lengkap dengan fitur, testimoni, dan tombol pembelian langsung.'
      },
      {
        title: 'Pendaftaran Event atau Webinar',
        description: 'Mengumpulkan data pendaftaran peserta untuk seminar, pelatihan, kelas online, atau peluncuran produk secara teratur.'
      },
      {
        title: 'Pengumpulan Database Calon Pelanggan (Leads)',
        description: 'Menawarkan ebook gratis, konsultasi cuma-cuma, atau kupon diskon sebagai timbal balik atas alamat email atau nomor WhatsApp pengunjung.'
      },
      {
        title: 'Promosi Jasa Profesional',
        description: 'Mempromosikan layanan khusus seperti konsultasi hukum, perawatan medis, jasa arsitektur, dan lain sebagainya.'
      }
    ],
    targetAudience: [
      'Pebisnis online dan praktisi e-commerce yang mengiklankan produk spesifik.',
      'Digital marketer yang menjalankan kampanye berbayar dengan target konversi tinggi.',
      'Penyelenggara acara, seminar, atau webinar yang membutuhkan formulir pendaftaran terdedikasi.',
      'UMKM atau profesional yang ingin menguji pasar dengan produk atau jasa baru.'
    ],
    iconName: 'Laptop',
    priceRange: 'Mulai dari Rp 399.000',
    waText: 'Halo Kalana Labs, saya tertarik untuk mendiskusikan pembuatan Landing Page untuk bisnis saya.'
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    subtitle: 'Representasi Digital Profesional untuk Membangun Kredibilitas Bisnis',
    description: 'Website Company Profile adalah representasi digital resmi dari perusahaan Anda yang memuat identitas, sejarah, visi-misi, daftar layanan, serta portofolio pekerjaan secara komprehensif. Di era digital saat ini, company profile berfungsi layaknya kartu nama perusahaan sekaligus brosur interaktif yang dapat diakses oleh calon klien, investor, dan mitra bisnis kapan saja dan di mana saja untuk memvalidasi kredibilitas bisnis Anda.',
    benefits: [
      {
        title: 'Meningkatkan Kepercayaan Publik',
        description: 'Membangun citra perusahaan yang profesional, solid, dan transparan di mata publik, klien, maupun calon investor.'
      },
      {
        title: 'Katalog Portofolio Terpusat',
        description: 'Menampilkan portofolio proyek terbaik, studi kasus sukses, dan klien yang pernah bekerja sama dalam format visual yang memukau.'
      },
      {
        title: 'Kemudahan Pengajuan Kemitraan',
        description: 'Memudahkan pihak eksternal untuk mempelajari profil bisnis Anda sebelum mengajukan kemitraan, kerjasama, atau tender.'
      },
      {
        title: 'SEO & Visibilitas Global',
        description: 'Membantu perusahaan Anda ditemukan di mesin pencari Google saat calon pelanggan mencari layanan di bidang industri Anda.'
      }
    ],
    useCases: [
      {
        title: 'Branding Perusahaan & Institusi',
        description: 'Menjelaskan visi, misi, nilai core values, struktur organisasi, dan sejarah perjalanan bisnis Anda secara profesional.'
      },
      {
        title: 'Katalog Layanan & Produk Bisnis',
        description: 'Mengelompokkan dan mendetailkan seluruh layanan jasa atau kategori produk yang ditawarkan perusahaan dengan rapi.'
      },
      {
        title: 'Pusat Berita dan Aktivitas Perusahaan',
        description: 'Menyediakan blog resmi untuk publikasi artikel industri, berita internal, dokumentasi CSR, hingga pengumuman lowongan kerja.'
      },
      {
        title: 'Verifikasi Tender & Dokumen Resmi',
        description: 'Menjadi tautan resmi wajib untuk diajukan dalam kelengkapan administrasi tender proyek pemerintah maupun swasta.'
      }
    ],
    targetAudience: [
      'Perusahaan skala kecil, menengah, hingga korporasi besar yang ingin memperkuat branding online.',
      'Instansi pemerintah, yayasan, lembaga pendidikan, dan organisasi nirlaba yang membutuhkan media publikasi resmi.',
      'Kontraktor, konsultan, dan penyedia jasa B2B yang sering mengikuti tender atau pengajuan proposal bisnis.',
      'Startup yang sedang bersiap mempresentasikan bisnis mereka di hadapan calon investor.'
    ],
    iconName: 'Building2',
    priceRange: 'Mulai dari Rp 1.299.000',
    waText: 'Halo Kalana Labs, saya ingin berkonsultasi mengenai pembuatan Website Company Profile.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'Toko Online Mandiri tanpa Komisi untuk Mengendalikan Bisnis Anda',
    description: 'E-Commerce adalah platform toko online khusus untuk brand Anda sendiri, yang dilengkapi dengan sistem katalog produk, keranjang belanja, integrasi pengiriman otomatis, dan gerbang pembayaran (payment gateway) digital. Memiliki platform e-commerce mandiri membebaskan bisnis Anda dari ketergantungan pada marketplace pihak ketiga, meniadakan potongan komisi penjualan yang tinggi, serta memberikan kendali penuh atas data dan pengalaman belanja pelanggan Anda.',
    benefits: [
      {
        title: 'Bebas Potongan Komisi Penjualan',
        description: 'Semua keuntungan penjualan menjadi milik Anda sepenuhnya tanpa adanya potongan biaya per transaksi dari pihak ketiga.'
      },
      {
        title: 'Kepemilikan Data Pelanggan 100%',
        description: 'Anda memegang penuh database pelanggan untuk kebutuhan pemasaran ulang (remarketing), email marketing, dan analisis loyalitas.'
      },
      {
        title: 'Pengalaman Belanja Eksklusif',
        description: 'Menghindarkan produk Anda dari perang harga langsung dengan kompetitor di halaman pencarian marketplace.'
      },
      {
        title: 'Otomatisasi Sistem Operasional',
        description: 'Sistem otomatis menghitung ongkos kirim, menerima pembayaran digital via e-wallet/bank transfer, dan memutakhirkan stok barang.'
      }
    ],
    useCases: [
      {
        title: 'Toko Retail & D2C (Direct-to-Consumer)',
        description: 'Menjual produk fisik seperti pakaian, kosmetik, makanan kemasan, barang elektronik secara langsung kepada konsumen.'
      },
      {
        title: 'Distribusi Produk & Grosir (B2B)',
        description: 'Platform khusus bagi agen atau reseller untuk melakukan pemesanan barang dalam jumlah besar dengan harga khusus.'
      },
      {
        title: 'Penjualan Produk Digital',
        description: 'Menjual dan mendistribusikan file digital seperti e-book, lisensi software, template desain, atau kursus video secara instan.'
      },
      {
        title: 'Manajemen Sistem Langganan (Subscription)',
        description: 'Memfasilitasi transaksi produk atau layanan jasa yang dibayarkan secara berkala/rutin setiap bulan atau tahun.'
      }
    ],
    targetAudience: [
      'Pemilik brand lokal (fashion, kuliner, kecantikan) yang ingin naik kelas dan membangun loyalitas pelanggan.',
      'Pengusaha retail fisik yang ingin memperluas jangkauan pasar secara nasional maupun global tanpa batas geografis.',
      'Produsen atau distributor yang ingin mengotomatiskan pesanan dari reseller, agen, atau dropshipper mereka.',
      'Kreator konten yang menjual produk edukasi atau aset digital secara mandiri.'
    ],
    iconName: 'ShoppingBag',
    priceRange: 'Mulai dari Rp 1.999.000',
    waText: 'Halo Kalana Labs, saya tertarik mendiskusikan pembuatan platform Toko Online / E-Commerce.'
  },
  {
    id: 'sistem-informasi',
    title: 'Sistem Informasi',
    subtitle: 'Aplikasi Manajemen Internal untuk Optimalisasi Operasional Bisnis',
    description: 'Sistem Informasi (SI) adalah aplikasi berbasis web kustom yang dirancang untuk membantu organisasi mengumpulkan, mengolah, menyimpan, dan menganalisis data guna mendukung pengambilan keputusan dan mengotomatiskan operasional internal. Berbeda dari website umum, Sistem Informasi berfokus pada alur kerja (workflow) spesifik perusahaan Anda, seperti manajemen aset, pemrosesan transaksi, pencatatan absensi, pengarsipan dokumen, hingga pelaporan otomatis.',
    benefits: [
      {
        title: 'Efisiensi Operasional Tinggi',
        description: 'Mengurangi beban kerja manual yang repetitif dan menghemat waktu pengerjaan administrasi harian tim Anda.'
      },
      {
        title: 'Pusat Data Terintegrasi',
        description: 'Menghilangkan silo data dengan menyatukan seluruh informasi operasional ke dalam satu basis data yang aman dan terpusat.'
      },
      {
        title: 'Aksesibilitas Multi-Role Aman',
        description: 'Mengatur hak akses data secara ketat berdasarkan tingkat jabatan/peran karyawan (admin, superadmin, staf, manajer).'
      },
      {
        title: 'Laporan Real-Time & Akurat',
        description: 'Menyediakan dasbor statistik visual dan ekspor dokumen PDF/Excel instan tanpa risiko kesalahan rekapitulasi data.'
      }
    ],
    useCases: [
      {
        title: 'Sistem Manajemen Inventaris (Inventory/ERP)',
        description: 'Melacak keluar-masuk barang di gudang, memantau level stok minimum, serta mengelola vendor pasokan secara real-time.'
      },
      {
        title: 'Sistem Manajemen Sumber Daya Manusia (HRIS)',
        description: 'Mencatat absensi karyawan, pengajuan cuti online, evaluasi kinerja, hingga sistem penggajian (payroll) otomatis.'
      },
      {
        title: 'Aplikasi Reservasi & Booking Kustom',
        description: 'Mengelola jadwal janji temu pasien klinik, penyewaan fasilitas gedung, pemesanan tiket, atau reservasi meja restoran.'
      },
      {
        title: 'Sistem Informasi Akademik & Keanggotaan',
        description: 'Mengelola data siswa/mahasiswa, pencatatan nilai, pembayaran SPP sekolah, atau portal administrasi anggota asosiasi.'
      }
    ],
    targetAudience: [
      'Perusahaan atau institusi yang masih mengandalkan pencatatan manual (Excel/kertas) dan ingin bertransformasi digital.',
      'Pemilik bisnis dengan cabang operasional banyak yang membutuhkan pemantauan data terpusat secara real-time.',
      'Organisasi publik, sekolah, rumah sakit, klinik, atau lembaga logistik dengan alur administrasi yang kompleks.',
      'Startup yang memerlukan backend khusus untuk manajemen data bisnis internal.'
    ],
    iconName: 'Database',
    priceRange: 'Mulai dari Rp 1.999.000',
    waText: 'Halo Kalana Labs, saya ingin berkonsultasi tentang pembuatan Sistem Informasi / Dashboard Internal kustom.'
  },
  {
    id: 'website-portofolio',
    title: 'Portofolio Website',
    subtitle: 'CV Digital Interaktif untuk Memperkuat Personal Branding Profesional',
    description: 'Website Portofolio adalah galeri karya digital pribadi yang dirancang untuk menampilkan hasil karya terbaik, riwayat karier, daftar keahlian, serta pencapaian profesional Anda secara visual dan interaktif. Di dunia kerja modern, memiliki portofolio dengan domain nama sendiri (misal: namamu.com) bertindak sebagai resume hidup berkelas tinggi yang membedakan Anda secara instan dari kompetitor di mata klien, kurator, atau perekrut kerja.',
    benefits: [
      {
        title: 'Personal Branding Berkelas Tinggi',
        description: 'Menampilkan profesionalisme Anda dengan identitas digital mandiri yang jauh lebih prestisius daripada profil media sosial biasa.'
      },
      {
        title: 'Galeri Karya Berkualitas Tinggi',
        description: 'Mempresentasikan hasil proyek, desain, tulisan, atau studi kasus dengan tata letak visual terbaik tanpa kompresi kualitas.'
      },
      {
        title: 'Aksesibilitas Tanpa Batas',
        description: 'Memudahkan calon klien atau perekrut kerja menemukan profil, meninjau portofolio, dan mengunduh CV Anda kapan saja.'
      },
      {
        title: 'Peluang Kerja Global (Inbound Leads)',
        description: 'Membuka kesempatan bagi klien luar negeri untuk menemukan jasa Anda secara organik melalui pencarian Google.'
      }
    ],
    useCases: [
      {
        title: 'Showcase Kreatif & Seni',
        description: 'Galeri visual interaktif bagi fotografer, desainer grafis, ilustrator, videografer, dan arsitek untuk memajang karya terbaik.'
      },
      {
        title: 'CV Digital Interaktif & Resume',
        description: 'Halaman profil dinamis bagi software engineer, penulis, konsultan, dan tenaga ahli yang memuat daftar proyek, keahlian, dan riwayat karir.'
      },
      {
        title: 'Portofolio Agensi / Studio Kecil',
        description: 'Memperkenalkan layanan tim kolektif kecil, memamerkan hasil kerja kelompok, dan menyediakan formulir kontak proyek.'
      },
      {
        title: 'Profil Pembicara & Tokoh Publik',
        description: 'Website perkenalan bagi pembicara seminar, penulis buku, konsultan senior untuk mengelola jadwal acara dan publikasi tulisan.'
      }
    ],
    targetAudience: [
      'Freelancer profesional yang ingin meningkatkan nilai jual jasa mereka di mata klien premium.',
      'Profesional industri kreatif (desainer, fotografer, copywriter) yang membutuhkan representasi karya yang estetis.',
      'Mahasiswa, pelajar, atau pencari kerja IT/Software Engineering yang ingin menonjolkan proyek coding mereka.',
      'Konsultan, dokter, arsitek, pengacara yang ingin membangun otoritas keahlian di bidang spesifik mereka.'
    ],
    iconName: 'User',
    priceRange: 'Mulai dari Rp 299.000',
    waText: 'Halo Kalana Labs, saya tertarik membuat Website Portofolio Pribadi untuk personal branding saya.'
  },
  {
    id: 'ui-ux-design',
    title: 'Desain UI/UX',
    subtitle: 'Riset dan Prototipe Antarmuka Produk Digital Berorientasi Pengguna',
    description: 'Jasa Desain UI/UX (User Interface / User Experience) adalah proses riset mendalam, pemetaan alur kerja pengguna (user flow), pembuatan kerangka visual (wireframing), hingga perancangan antarmuka visual akhir untuk aplikasi mobile maupun website menggunakan Figma. Kami memastikan produk digital Anda tidak sekadar tampak estetis secara visual, tetapi juga intuitif, nyaman digunakan, serta selaras dengan tujuan bisnis untuk meningkatkan konversi dan retensi pengguna.',
    benefits: [
      {
        title: 'Meminimalkan Risiko Kegagalan Coding',
        description: 'Membuat prototipe yang dapat diklik untuk diuji langsung oleh pengguna sebelum developer mulai menulis baris kode pertama.'
      },
      {
        title: 'Navigasi Intuitif & Minim Frustrasi',
        description: 'Merancang arsitektur informasi dan tata letak tombol secara logis sehingga pengguna dapat mencapai tujuannya dengan cepat.'
      },
      {
        title: 'Design System Siap Pakai',
        description: 'Menyediakan panduan gaya visual, pustaka komponen (buttons, inputs, cards), dan dokumentasi lengkap yang memudahkan developer.'
      },
      {
        title: 'Meningkatkan Metrik Bisnis',
        description: 'Mengoptimalkan corong konversi (funnel) pada aplikasi untuk menaikkan penjualan, retensi pengguna, dan pendaftaran akun.'
      }
    ],
    useCases: [
      {
        title: 'Riset Pengguna & Analisis Kompetitor',
        description: 'Mengidentifikasi kebutuhan pengguna nyata, merumuskan user persona, serta menganalisis kelemahan produk kompetitor.'
      },
      {
        title: 'Pembuatan Wireframe & User Journey Map',
        description: 'Merancang struktur layout kasar (low-fidelity) dan memetakan langkah-langkah yang dilalui pengguna saat berinteraksi dengan produk.'
      },
      {
        title: 'Desain Antarmuka Visual (High-Fidelity)',
        description: 'Mewujudkan desain tampilan akhir yang memikat lengkap dengan pemilihan warna, tipografi modern, ikon kustom, dan ilustrasi.'
      },
      {
        title: 'Prototipe Interaktif (Interactive Prototyping)',
        description: 'Menyusun alur antar-layar yang dapat diklik di Figma untuk presentasi investor, uji kegunaan (usability testing), dan panduan coding developer.'
      }
    ],
    targetAudience: [
      'Founder startup yang ingin memvalidasi ide aplikasi mereka dalam bentuk visual sebelum mencari pendanaan.',
      'Perusahaan pemilik aplikasi lama yang ingin melakukan peremajaan desain (redesign) agar lebih modern dan mudah digunakan.',
      'Developer mandiri atau tim engineering yang membutuhkan aset desain antarmuka berkualitas siap pakai untuk langsung dikodekan.',
      'Product Manager yang membutuhkan perancangan fitur baru secara cepat dan terstruktur.'
    ],
    iconName: 'Palette',
    priceRange: 'Mulai dari Rp 1.499.000',
    waText: 'Halo Kalana Labs, saya tertarik dengan jasa riset dan Desain UI/UX untuk aplikasi / website saya.'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    subtitle: 'Aplikasi Android & iOS Kustom Berkinerja Tinggi untuk Skalabilitas Bisnis',
    description: 'Jasa Mobile App Development adalah layanan pembuatan aplikasi seluler kustom untuk platform Android dan iOS menggunakan teknologi cross-platform modern (seperti Flutter atau React Native) maupun Native. Dengan aplikasi mobile, bisnis Anda berada langsung di dalam genggaman tangan pelanggan, memungkinkan interaksi yang lebih intensif melalui notifikasi push, akses fitur perangkat (kamera, GPS, sensor), serta performa yang sangat responsif.',
    benefits: [
      {
        title: 'Kehadiran Langsung di HP Pelanggan',
        description: 'Memperkuat branding dan aksesibilitas bisnis dengan menempatkan ikon aplikasi Anda di layar utama perangkat pelanggan.'
      },
      {
        title: 'Keterlibatan Pengguna via Push Notification',
        description: 'Mengirimkan pengingat, promo terbaru, dan pembaruan informasi secara real-time langsung ke bilah notifikasi pengguna.'
      },
      {
        title: 'Integrasi Fitur Perangkat Keras (Hardware)',
        description: 'Mengoptimalkan pengalaman pengguna dengan memanfaatkan GPS untuk tracking lokasi, kamera untuk scan QR, dan sidik jari.'
      },
      {
        title: 'Performa Mulus & Responsif',
        description: 'Menghadirkan transisi antar-layar yang sangat lancar dan opsi pengoperasian offline (tanpa koneksi internet stabil).'
      }
    ],
    useCases: [
      {
        title: 'Otentikasi & Manajemen Pengguna',
        description: 'Sistem login multi-metode (email, Google, Apple), pendaftaran pengguna, manajemen profil, dan kontrol akses berbasis peran yang aman dan mudah digunakan.'
      },
      {
        title: 'Notifikasi Push & Pembaruan Real-time',
        description: 'Mengirim pemberitahuan langsung ke perangkat pengguna untuk pengingat, promo, pembaruan status, atau informasi penting lainnya secara instan dan real-time.'
      },
      {
        title: 'Dashboard & Analitik Internal',
        description: 'Pantau aktivitas pengguna, data penjualan, dan metrik bisnis utama melalui dashboard visual yang interaktif dan informatif.'
      },
      {
        title: 'Pengaturan & Manajemen Konten',
        description: 'Kelola konten aplikasi, preferensi pengguna, pengaturan notifikasi, dan konfigurasi aplikasi secara mandiri melalui panel admin yang intuitif.'
      }
    ],
    targetAudience: [
      'Startup digital inovatif yang memerlukan aplikasi seluler sebagai produk atau layanan bisnis utama mereka.',
      'Perusahaan ritel atau layanan jasa yang ingin meningkatkan retensi pelanggan melalui sistem loyalitas seluler.',
      'Perusahaan distribusi, transportasi, atau logistik yang membutuhkan aplikasi pelacakan armada lapangan.',
      'Pemilik ide bisnis kreatif yang ingin menghadirkan solusi teknologi dalam bentuk aplikasi HP.'
    ],
    iconName: 'Smartphone',
    priceRange: 'Mulai dari Rp 9.999.000',
    waText: 'Halo Kalana Labs, saya ingin berkonsultasi mengenai rencana pembuatan Aplikasi Mobile Android / iOS.'
  }
]
