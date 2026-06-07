import type {
  Service,
  Project,
  Testimonial,
  ProcessStep,
  NavLink,
  Stat,
  FooterLink,
  ContactInfo,
  PricingCategory,
} from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Kontak', href: '/kontak' },
  { label: 'About', href: '/about' },
]

export const SERVICES: Service[] = [
  {
    id: 'uiux',
    icon: 'Palette',
    number: '01',
    title: 'UI/UX Design',
    description:
      'Desain antarmuka yang intuitif, estetis, dan dibangun berdasarkan riset pengguna nyata — bukan asumsi.',
  },
  {
    id: 'webdev',
    icon: 'Code2',
    number: '02',
    title: 'Web Development',
    description:
      'Aplikasi web modern yang cepat, aman, dan skalabel menggunakan teknologi terkini.',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    number: '03',
    title: 'Mobile Apps',
    description:
      'Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna yang mulus di semua perangkat.',
  },
  {
    id: 'strategy',
    icon: 'TrendingUp',
    number: '04',
    title: 'Digital Strategy',
    description:
      'Strategi digital berbasis data untuk mengoptimalkan produk, meningkatkan konversi, dan mendorong pertumbuhan bisnis.',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'anggana-project',
    category: 'Company Profile',
    title: 'Anggana Project',
    description:
      'Website event organizer di Purwokerto yang ahli dalam menangani berbagai event penting seperti wedding, graduation, dan corporate event.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/assets/images/Anggana Project.png',
  },
  {
    id: 'beresin',
    category: 'Company Profile',
    title: 'Beresin',
    description:
      'Website company profile profesional yang menyajikan informasi jasa perbaikan rumah dan layanan kebersihan lingkungan terpadu.',
    tags: ['React', 'Node.js', 'Tailwind CSS'],
    image: '/assets/images/Beresin.png',
  },
  {
    id: 'dapoer-niknik',
    category: 'Landing Page',
    title: 'Dapoer Niknik',
    description:
      'Landing page UMKM kuliner yang menyajikan layanan katering dengan katalog menu makanan khas dan kontak pemesanan cepat.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/assets/images/Dapoer Niknik.png',
  },
  {
    id: 'desa-kalisabuk',
    category: 'Company Profile',
    title: 'Desa Kalisabuk',
    description:
      'Website company profile desa yang terintegrasi dengan Content Management System (CMS) untuk kemudahan pengelolaan berita dan informasi publik.',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'CMS'],
    image: '/assets/images/Desa Kalisabuk.png',
  },
  {
    id: 'seeo',
    category: 'Company Profile',
    title: 'SEEO',
    description:
      'Website company profile resmi organisasi SEEO Universitas Jenderal Soedirman sebagai wadah informasi, riset, dan dokumentasi kegiatan.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/assets/images/SEEO.png',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'adhi',
    name: 'Adhi Wicaksono',
    role: '',
    company: 'Dapoer Niknik - dapoerniknik.netlify.app',
    content:
      "I've been using this service to my UMKM and it is very cool! The website is user friendly and the service quality to hear the instruction is very good job. This should be standard that every web developer had to maintain the customers need. Keep up the good work 👏 🏆",
    rating: 5,
    initials: 'AW',
  },
  {
    id: 'ratih',
    name: 'Ratih Dewi',
    role: '',
    company: 'Kopi Bintang Pringsewu - kopibintangpringsewu-official.com',
    content:
      'Sangat professional dan sesuai harapan. sebagai client saya puas dengan projectnya. Saya akan rekomendasikan ke teman saya yang butuh jasa website juga. Thankyou <3',
    rating: 5,
    initials: 'RD',
  },
  {
    id: 'akmal',
    name: 'Akmal Adhi Nugroho',
    role: 'Founder',
    company: 'Anggana Project · angganaproject.com',
    content:
      'Mantap, Hasilnya memuaskan. Akhirnya punya website buat branding kami!',
    rating: 5,
    initials: 'AN',
  },
  {
    id: 'moreno',
    name: 'Moreno Hilbran',
    role: 'CEO',
    company: 'Larasena · larasena.id',
    content:
      'Website sesuai ekspetasi. Pesan dan tema yang disampaikan juga sudah sesuai.',
    rating: 5,
    initials: 'MH',
  },
  {
    id: 'yunan',
    name: 'Yunan Faila',
    role: 'CEO',
    company: 'SEEO · seeoftunsoed.com',
    content:
      'Keren kak, sekarang organisasi kami jadi punya company profile. Rekomen!',
    rating: 5,
    initials: 'YF',
  },
]


export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'briefing',
    number: '01',
    icon: 'MessageSquare',
    title: 'Konsultasi & Briefing Kebutuhan',
    description:
      'Sampaikan kebutuhan bisnis Anda kepada kami, mulai dari jenis platform yang ingin dibuat, fitur-fitur utama yang dibutuhkan, hingga target audiens yang ingin dicapai.',
  },
  {
    id: 'recommendation',
    number: '02',
    icon: 'Lightbulb',
    title: 'Rekomendasi Solusi & Paket',
    description:
      'Tim kami akan menganalisis kebutuhan Anda dan menyarankan jenis website/aplikasi serta paket investasi terbaik yang paling tepat guna dan efisien untuk bisnis Anda.',
  },
  {
    id: 'agreement',
    number: '03',
    icon: 'Handshake',
    title: 'Deal & Pengisian Informasi',
    description:
      'Setelah menyetujui proposal, Anda melakukan pembayaran Down Payment (DP) sebesar 50%. Selanjutnya, Anda mengisi data informasi lengkap serta menyerahkan aset (logo, teks, gambar) yang ingin ditampilkan.',
  },
  {
    id: 'delivery',
    number: '04',
    icon: 'Rocket',
    title: 'Pengerjaan & Serah Terima',
    description:
      'Kami memproses pengerjaan dengan update berkala. Setelah proyek selesai diuji dan disetujui, Anda melakukan pelunasan sisa 50% sebelum website diserahterimakan seutuhnya.',
  },
]

export const STATS: Stat[] = [
  { value: '100%', label: 'Garansi Handover' },
  { value: '1-3 Hari', label: 'Rilis Landing Page' },
  { value: 'Gratis', label: 'Domain & Hosting' },
  { value: 'Respon Cepat', label: 'Dukungan Siaga' },
]

export const FOOTER_NAV: FooterLink[] = [
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Proses Kerja', href: '/#proses' }, // Keeping proses on homepage
  { label: 'Kontak', href: '/kontak' },
]

export const FOOTER_SERVICES: FooterLink[] = [
  { label: 'Landing Page', href: '/layanan/landing-page' },
  { label: 'Company Profile', href: '/layanan/company-profile' },
  { label: 'E-Commerce', href: '/layanan/ecommerce' },
  { label: 'Sistem Informasi', href: '/layanan/sistem-informasi' },
  { label: 'Website Portofolio', href: '/layanan/website-portofolio' },
  { label: 'Desain UI/UX', href: '/layanan/ui-ux-design' },
  { label: 'Mobile Apps', href: '/layanan/mobile-app' },
]

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'kalanalabs@gmail.com',
    href: 'mailto:kalanalabs@gmail.com',
  },
  {
    icon: 'Phone',
    label: 'WhatsApp',
    value: '+62 851 9681 1722',
    href: 'https://wa.me/6285196811722',
  },
  {
    icon: 'MapPin',
    label: 'Lokasi',
    value: 'Purwokerto, Jawa Tengah, Indonesia',
    href: '#',
  },
]

export const SERVICE_OPTIONS = [
  'UI/UX Design',
  'Web Development',
  'Mobile Apps',
  'Lainnya',
]

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    title: 'Landing Page',
    subtitle: 'Promosi Produk, Event dan Jasa Profesional',
    packages: [
      {
        name: 'Basic',
        subtitle: 'Cocok untuk skala UMKM/Personal',
        price: '399',
        suffix: 'ribu',
        bestValue: false,
        benefits: [
          'Domain .com 1 Tahun',
          '1 Halaman Responsif',
          'SEO Basic (meta tag, title, sitemap)',
          'Integrasi Whatsapp CTA',
          'Revisi 2x',
          'Support Maintenance 1 Bulan',
        ],
      },
      {
        name: 'Medium',
        subtitle: 'Cocok untuk bisnis berkelanjutan',
        price: '599',
        suffix: 'ribu',
        bestValue: true,
        benefits: [
          'Semua benefit basic',
          'Hingga 3 section tambahan',
          'Formulir Kontak',
          'Google Analytics & Search Console',
          'Optimasi Kecepatan',
          'Revisi 4x',
          'Support Maintenance 2 Bulan',
        ],
      },
      {
        name: 'Premium',
        subtitle: 'Untuk konversi maksimal',
        price: '999',
        suffix: 'ribu',
        bestValue: false,
        benefits: [
          'Semua benefit medium',
          'Hingga 5 section tambahan',
          'Custom Animasi dan Interaktif',
          'Integrasi Pixel FB dan Tiktok Ads',
          'Live Chat Widget',
          'Revisi 7x',
          'Support Maintenance 3 Bulan',
        ],
      },
    ],
  },
  {
    id: 'company-profile',
    name: 'Company Profile',
    title: 'Company Profile',
    subtitle: 'Branding Perusahaan, Identitas Profesional',
    packages: [
      {
        name: 'Basic',
        subtitle: 'Cocok untuk usaha menengah',
        price: '1.299',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Domain .com plus hosting 1 Tahun',
          'Hingga 5 halaman (Home, About, Service, Contact, Gallery/Catalog)',
          'Desain Premium',
          'SEO On Page Basic',
          'Responsif Mobile + Tablet',
          'Revisi 3x',
          'Support Maintenance 1 Bulan',
        ],
      },
      {
        name: 'Bisnis',
        subtitle: 'Cocok untuk bisnis berkembang',
        price: '2.199',
        suffix: 'k',
        bestValue: true,
        benefits: [
          'Semua benefit Basic',
          'Hingga 12 halaman custom',
          'Blog/Artikel (CMS)',
          'SEO + Google Analytics',
          'Google Maps embed + formulir',
          'Integrasi Media Sosial',
          'Revisi 5x',
          'Support Maintenance 2 Bulan',
        ],
      },
      {
        name: 'Korporat',
        subtitle: 'Untuk perusahaan besar',
        price: '4.499',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Semua benefit Bisnis',
          'Hingga 25 halaman custom',
          'Multi Bahasa',
          'Admin Panel',
          'Performance + SEO Audit',
          'Source code diserahkan',
          'Revisi 10x',
          'Support Maintenance 3 Bulan',
        ],
      },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    title: 'E-commerce',
    subtitle: 'Toko Online Khusus Brand Tanpa Potongan',
    packages: [
      {
        name: 'Basic',
        subtitle: 'Produk hingga 30 item',
        price: '1.999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Domain .com + hosting 1 tahun',
          'Input hingga 30 produk',
          'Integrasi Payment Gateway',
          'Manajemen Stok',
          'Laporan Penjualan',
          'Revisi 3x',
          'Support Maintenance 1 Bulan',
        ],
      },
      {
        name: 'Active',
        subtitle: 'Produk hingga 100 item',
        price: '3.499',
        suffix: 'k',
        bestValue: true,
        benefits: [
          'Semua benefit Basic',
          'Input hingga 100 produk',
          'Fitur promo, voucher, diskon',
          'Integrasi ongkir otomatis',
          'Dashboard Laporan Penjualan',
          'Revisi 5x',
          'Support Maintenance 2 Bulan',
        ],
      },
      {
        name: 'Pro',
        subtitle: 'Fitur Lengkap dan Scalable',
        price: '6.499',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Semua benefit Active',
          'Produk tidak terbatas',
          'Dashboard analitik penjualan',
          'SEO produk dan Google Shopping',
          'Live chat + notifikasi Whatsapp',
          'Source code diserahkan',
          'Revisi 7x',
          'Support Maintenance 4 Bulan',
        ],
      },
    ],
  },
  {
    id: 'sistem-informasi',
    name: 'Sistem Informasi',
    title: 'Sistem Informasi',
    subtitle: 'Digitalisasi dan Efisiensi Operasional',
    packages: [
      {
        name: 'Basic',
        subtitle: 'CRUD Sederhana',
        price: '1.999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Contoh: sistem inventaris barang, absensi, data anggota',
          'Login dan 2 role/peran (admin & user/pengguna)',
          'Tambah, edit, hapus, cari data',
          'Export Excel & PDF',
          'Berbasis Web dan Responsif',
          'Dokumentasi penggunaan',
          'Support Maintenance 1 Bulan',
        ],
      },
      {
        name: 'Standar',
        subtitle: 'Cocok untuk bisnis berkembang',
        price: '3.599',
        suffix: 'k',
        bestValue: true,
        benefits: [
          'Semua benefit Basic',
          'Hingga 3 modul (misal booking, laporan, stok)',
          'Multi role lebih dari 2',
          'Dashboard Statistik',
          'Notifikasi WA + Email',
          'Revisi 5x',
          'Support Maintenance 2 Bulan',
        ],
      },
      {
        name: 'Korporat',
        subtitle: 'Untuk perusahaan besar',
        price: '7.999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Semua benefit Standar',
          'Up to 10 modul',
          'Integrasi API pihak eksternal',
          'Server VPS',
          'Laporan lanjutan + Insight',
          'Source code diserahkan',
          'Revisi 7x',
          'Support Maintenance 4 Bulan',
        ],
      },
    ],
  },
  {
    id: 'website-portofolio',
    name: 'Portofolio',
    title: 'Portofolio Website',
    subtitle: 'Upgrade Branding Diri jadi Profesional',
    packages: [
      {
        name: 'Personal',
        subtitle: 'Freelancer, mahasiswa, pelajar',
        price: '299',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Domain .my.id 1 tahun',
          '1 halaman responsif',
          'Biodata, skill, kontak',
          'Integrasi sosmed dan Whatsapp',
          'Revisi 3x',
          'Support Maintenance 1 Bulan',
        ],
      },
      {
        name: 'Profesional',
        subtitle: 'Tenaga ahli, dokter, konsultan',
        price: '549',
        suffix: 'k',
        bestValue: true,
        benefits: [
          'Domain .com 1 tahun',
          'Hingga 3 Halaman (Home, Project, Contact/About)',
          'Galeri Karya (12 item)',
          'Fitur Download CV',
          'SEO Basic',
          'Revisi 3x',
          'Support Maintenance 1 Bulan',
        ],
      },
      {
        name: 'Branding',
        subtitle: 'Brand personal yang ingin tampil serius',
        price: '999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Semua benefit Professional',
          'Desain custom sesuai identitas',
          'Blog/Artikel pribadi',
          'Galeri tak terbatas',
          'Testimonial Section',
          'Google Analytics',
          'Revisi 5x',
          'Support Maintenance 2 Bulan',
        ],
      },
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'Desain UI/UX',
    title: 'Desain UI/UX',
    subtitle: 'Riset dan Desain Antarmuka Produk Digital',
    packages: [
      {
        name: 'Basic',
        subtitle: 'Wireframing & konsep dasar',
        price: '1.499',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Wireframe UX Flow (hitam putih)',
          'Hingga 5 Halaman / Screen',
          'UI Style Guide Sederhana (warna & tipografi)',
          'File Sumber Figma (.fig)',
          'Revisi Maksimal 3x',
          'Dukungan Dukungan 1 Bulan',
        ],
      },
      {
        name: 'Standard',
        subtitle: 'Desain UI/UX interaktif & responsive',
        price: '2.999',
        suffix: 'k',
        bestValue: true,
        benefits: [
          'Semua benefit Basic',
          'Hingga 12 Halaman / Screen',
          'Prototype Interaktif Figma (Klik-able)',
          'Design System Dasar (komponen siap pakai)',
          'Responsif Web & Mobile layout',
          'Revisi Maksimal 5x',
          'Dukungan Dukungan 2 Bulan',
        ],
      },
      {
        name: 'Premium',
        subtitle: 'Riset & full design system korporasi',
        price: '5.999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Semua benefit Standard',
          'Hingga 25 Halaman / Screen',
          'High-fidelity interactive prototype & animation',
          'Full Design System (Auto-layout, custom icons, token)',
          'Riset Pengguna Sederhana & Usability Testing',
          'Revisi Maksimal 10x',
          'Dukungan Dukungan 3 Bulan',
        ],
      },
    ],
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    title: 'Mobile App Development',
    subtitle: 'Pembuatan Aplikasi iOS & Android Berkualitas',
    packages: [
      {
        name: 'Basic',
        subtitle: 'Aplikasi MVP / Sederhana',
        price: '9.999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Single Platform (Android ATAU iOS)',
          'Flutter / React Native Hybrid Tech',
          'Fitur dasar (Login, CRUD, User Profile)',
          'Database integrasi (Firebase/Supabase)',
          'Revisi Maksimal 3x',
          'Dukungan Dukungan 1 Bulan',
        ],
      },
      {
        name: 'Standard',
        subtitle: 'Aplikasi Custom Cross-Platform',
        price: '19.999',
        suffix: 'k',
        bestValue: true,
        benefits: [
          'Multi Platform (Android & iOS)',
          'Integrasi Custom API Backend',
          'Fitur menengah (Push Notifications, Maps, Payment Gateway basic)',
          'CMS Admin Panel (Web-based)',
          'Revisi Maksimal 5x',
          'Dukungan Dukungan 2 Bulan',
        ],
      },
      {
        name: 'Premium',
        subtitle: 'Aplikasi Enterprise & Kompleks',
        price: '39.999',
        suffix: 'k',
        bestValue: false,
        benefits: [
          'Multi Platform (Android & iOS)',
          'Custom API & Database Enterprise',
          'Fitur kompleks (Realtime chat, geolocation tracking, advanced analytics)',
          'Full Dashboard Admin (Role-based access, reports)',
          'Bantuan Upload ke Play Store & App Store',
          'Revisi Maksimal 7x',
          'Dukungan Dukungan 3 Bulan',
        ],
      },
    ],
  },
]

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Berapa lama waktu pengerjaan proyek?',
    answer:
      'Tergantung jenis layanannya. Landing page biasanya selesai dalam 3–5 hari kerja. Company profile 7–14 hari. E-commerce dan sistem informasi 2–6 minggu. Mobile app minimal 4–8 minggu tergantung kompleksitas. Kami selalu memberikan estimasi waktu sebelum proyek dimulai.',
  },
  {
    id: 'faq-2',
    question: 'Apakah ada biaya revisi?',
    answer:
      'Tidak. Setiap paket sudah termasuk kuota revisi yang tercantum. Revisi dapat diajukan selama masa pengerjaan dan support. Untuk revisi di luar kuota atau di luar masa support, akan ada biaya tambahan yang disepakati bersama.',
  },
  {
    id: 'faq-3',
    question: 'Domain dan hosting sudah termasuk dalam paket?',
    answer:
      'Ya, semua paket sudah termasuk domain dan hosting untuk tahun pertama (kecuali paket yang disebutkan berbeda). Setelah tahun pertama, biaya perpanjangan ditanggung klien sesuai provider yang digunakan.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana cara memulai proyek bersama Kalana Labs?',
    answer:
      'Sangat mudah. Hubungi kami via WhatsApp atau isi form konsultasi. Kami akan mengadakan sesi briefing gratis untuk memahami kebutuhan Anda, lalu mengirimkan proposal dan estimasi harga. Proyek dimulai setelah kesepakatan dan DP pertama.',
  },
  {
    id: 'faq-5',
    question: 'Apakah bisa request fitur di luar paket yang ada?',
    answer:
      'Tentu bisa. Kami melayani permintaan custom di luar paket standar. Cukup ceritakan kebutuhan Anda dan kami akan memberikan penawaran harga khusus. Tidak ada fitur yang terlalu spesifik untuk kami kerjakan.',
  },
  {
    id: 'faq-6',
    question: 'Metode pembayaran apa yang tersedia?',
    answer:
      'Kami menerima transfer bank (BCA, BRI, BNI, Mandiri), dompet digital (GoPay, OVO, Dana), dan QRIS. Sistem pembayaran kami terbagi menjadi DP 50% di awal dan pelunasan setelah proyek selesai dan disetujui.',
  },
  {
    id: 'faq-7',
    question: 'Apakah saya akan mendapatkan source code proyeknya?',
    answer:
      'Penyerahan source code tersedia di paket tertentu (biasanya paket Korporat/Premium) seperti yang tercantum di benefit paket masing-masing. Untuk paket lainnya, Anda tetap memiliki akses penuh ke website/aplikasi yang kami buat.',
  },
  {
    id: 'faq-8',
    question: 'Apakah Kalana Labs melayani klien dari luar Purwokerto?',
    answer:
      'Tentu. Kami sudah melayani klien dari berbagai kota di Indonesia secara remote. Semua proses — konsultasi, briefing, revisi, hingga serah terima — bisa dilakukan secara online melalui WhatsApp, Zoom, atau platform lain yang Anda prefer.',
  },
]
