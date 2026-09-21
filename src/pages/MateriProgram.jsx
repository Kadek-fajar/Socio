import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import VideoPlayer from '../components/VideoPlayer'

const MATERI_DATA = [
  {
    id: 'program-1',
    code: 'Program 1',
    volume: 'Vol.1',
    tag: 'Program 1',
    title: 'Apa Itu Kewirausahaan & Pola Pikir Sukses',
    subtitle: 'Modul Presentasi: Pengenalan Dasar, Karakter, Sektor Bisnis & Langkah Memulai Usaha',
    category: 'Pemberdayaan Mental & Karakter',
    icon: '🚀',
    summary:
      'Materi presentasi komprehensif mengenai konsep dasar kewirausahaan, tujuan dan manfaat, ciri-ciri wirausahawan berkarakter, jenis sektor usaha, serta 5 tahapan praktis memulai bisnis mandiri.',
    desc: 'Modul Program 1 menyajikan materi presentasi interaktif "Apa Itu Kewirausahaan" yang dirancang khusus untuk membangun pola pikir mandiri dan produktif bagi anak binaan Panti Wira Adhi Karya Ungaran. Melalui modul ini, peserta memahami bahwa kewirausahaan bukan sekadar berdagang, melainkan sebuah proses berpikir kreatif dalam mencari peluang, berani mengambil risiko terukur, dan bertanggung jawab.',
    silabus: [
      'Pengertian Dasar: Wirausaha, Kewirausahaan, dan Wirausahawan',
      '6 Tujuan & Manfaat Utama Kewirausahaan bagi Kemandirian Masa Depan',
      '5 Ciri Utama Wirausahawan: Percaya Diri, Kreatif, Disiplin, Berani Risiko & Pantang Menyerah',
      '4 Sektor Jenis Usaha: Perdagangan (Toko/Reseller), Jasa, Produksi (Olahan Pangan/Kerajinan), dan Usaha Digital',
      '5 Langkah Praktis Memulai Usaha: Ide Bisnis, Riset Pasar, Modal, Pemasaran, hingga Evaluasi',
      'Sesi Refleksi & Tanya Jawab Interaktif Rencana Usaha Binaan',
    ],
    outcomes: [
      'Pemahaman jelas mengenai definisi dan manfaat kewirausahaan bagi kehidupan.',
      'Terbentuknya karakter wirausahawan: mandiri, kreatif, percaya diri, dan pantang menyerah.',
      'Kemampuan memetakan ide usaha sesuai potensi sektor (produksi, jasa, perdagangan, digital).',
      'Kesiapan mempraktikkan langkah awal perintisan usaha mandiri di panti.',
    ],
    pptData: {
      title: 'Materi Presentasi PPT : Apa Itu Kewirausahaan',
      fileUrl: '/documents/materi-kewirausahaan-program-1.pdf',
      totalSlides: 8,
      slides: [
        {
          slideNum: 1,
          badge: 'Cover Modul',
          title: 'APA ITU KEWIRAUSAHAAN',
          subtitle: 'Pengenalan Dasar Kewirausahaan bagi Anak Binaan Panti Pelayanan Sosial Anak Wira Adhi Karya Ungaran',
          points: [
            'Program Pembinaan & Pengabdian Masyarakat Restart Social & Entrepreneur Lab',
            'Didukung oleh: Kemendiktisaintek, Belmawa, Simbelmawa, PKM & Universitas Dian Nuswantoro (UDINUS)',
          ],
          icon: '🏪',
          color: 'from-emerald-950 to-[#043d28]',
        },
        {
          slideNum: 2,
          badge: 'Pertanyaan Pemantik',
          title: 'Mengapa Kewirausahaan Itu Penting?',
          subtitle: 'Membuka Peluang Kemandirian Ekonomi & Mengasah Keterampilan Hidup',
          points: [
            'Membekali diri dengan kemampuan bertahan dan mandiri secara finansial.',
            'Melatih cara berpikir kritis dan solutif terhadap permasalahan di lingkungan sekitar.',
            'Memberikan kebebasan dalam berkreasi dan menciptakan dampak sosial positif.',
          ],
          icon: '❓',
          color: 'from-teal-950 to-[#033b2e]',
        },
        {
          slideNum: 3,
          badge: 'Definisi Pokok',
          title: 'Pengertian Wirausaha & Kewirausahaan',
          subtitle: '3 Konsep Utama yang Wajib Dipahami:',
          points: [
            'Wirausaha: Kegiatan membuat, mengelola, dan mengembangkan suatu usaha untuk menghasilkan keuntungan yang halal dan berkelanjutan.',
            'Kewirausahaan: Kemampuan, sikap, dan proses seseorang dalam menciptakan serta mengembangkan usaha dengan berani mengambil risiko terukur dan mencari peluang baru.',
            'Wirausahawan: Sosok individu yang menjalankan kegiatan usaha secara mandiri dan bertanggung jawab penuh atas kelangsungan usahanya.',
          ],
          icon: '📖',
          color: 'from-emerald-950 to-[#064e3b]',
        },
        {
          slideNum: 4,
          badge: 'Manfaat & Nilai Tambah',
          title: 'Tujuan & Manfaat Kewirausahaan',
          subtitle: '6 Dampak Positif Berwirausaha Sejak Dini:',
          points: [
            '1. Menciptakan lapangan pekerjaan baru bagi diri sendiri dan orang lain.',
            '2. Meningkatkan pendapatan dan kesejahteraan ekonomi keluarga.',
            '3. Melatih kemandirian hidup tanpa selalu bergantung pada pihak lain.',
            '4. Mengembangkan daya kreativitas serta inovasi produk.',
            '5. Belajar bertanggung jawab atas proses produksi, keuangan, dan pelayanan.',
            '6. Melatih keberanian dalam mengambil keputusan penting secara bijak.',
          ],
          icon: '🎯',
          color: 'from-green-950 to-[#064e3b]',
        },
        {
          slideNum: 5,
          badge: 'Karakter Wirausaha',
          title: 'Ciri-Ciri Wirausahawan Sukses',
          subtitle: '5 Sikap Mental Juara yang Harus Dimiliki:',
          points: [
            '1. Percaya Diri: Yakin terhadap potensi diri dan ide usaha yang dijalankan.',
            '2. Kreatif & Inovatif: Selalu mencari terobosan baru untuk membedakan produk dari pesaing.',
            '3. Disiplin & Bertanggung Jawab: Konsisten dalam waktu produksi, kejujuran, dan mutu barang.',
            '4. Berani Mengambil Risiko: Tidak takut mencoba hal baru dan siap menghadapi tantangan.',
            '5. Pantang Menyerah: Cepat bangkit dan belajar dari kesalahan saat menemui hambatan.',
          ],
          icon: '🌟',
          color: 'from-emerald-950 to-[#022c22]',
        },
        {
          slideNum: 6,
          badge: 'Pilihan Sektor',
          title: 'Jenis-Jenis Sektor Kewirausahaan',
          subtitle: '4 Bidang Usaha yang Dapat Dimulai:',
          points: [
            '1. Usaha Perdagangan: Membuka toko kelontong, reseller sembako, distributor produk konsumsi.',
            '2. Usaha Jasa: Pangkas rambut (barbershop), jasa desain grafis, servis elektronik, laundry.',
            '3. Usaha Produksi: Pembuatan olahan pangan (es cincau segar, singkong serut), kerajinan tangan.',
            '4. Usaha Digital: Toko online (marketplace), admin media sosial, konten kreator promosi usaha.',
          ],
          icon: '🛍️',
          color: 'from-teal-950 to-[#044e3e]',
        },
        {
          slideNum: 7,
          badge: 'Tahapan Eksekusi',
          title: 'Langkah-Langkah Memulai Usaha',
          subtitle: '5 Langkah Praktis dari Gagasan Menjadi Bisnis Berjalan:',
          points: [
            '1. Menentukan Ide Usaha: Kenali minat keahlian diri dan amati kebutuhan konsumen sekitar.',
            '2. Melakukan Riset Pasar: Cek siapa calon pembeli, lokasi jualan, dan harga pasaran kompetitor.',
            '3. Menyiapkan Modal: Rinci biaya bahan baku, peralatan dasar, dan modal cadangan.',
            '4. Memulai Pemasaran: Pasarkan langsung ke teman, tetangga, dan gunakan media sosial/WhatsApp.',
            '5. Mengevaluasi & Mengembangkan Usaha: Hitung keuntungan, dengarkan masukan pembeli, dan tingkatkan kualitas produk.',
          ],
          icon: '📈',
          color: 'from-emerald-950 to-[#065f46]',
        },
        {
          slideNum: 8,
          badge: 'Sesi Diskusi & Tanya Jawab',
          title: 'Ada yang Mau Bertanya?',
          subtitle: 'Sesi Diskusi Interaktif, Curah Gagasan & Refleksi Ide Bisnis Binaan Panti',
          points: [
            'Diskusikan ide usaha yang paling menarik bagi kalian!',
            'Tanyakan kendala dan keterampilan yang ingin kalian pelajari lebih mendalam.',
            'Mari bersama-sama wujudkan kemandirian wirausaha sosial di Panti Wira Adhi Karya!',
          ],
          icon: '💬',
          color: 'from-slate-950 to-[#064e3b]',
        },
      ],
    },
    video: {
      title: 'Dokumentasi Pelatihan Restart Mindset & Character Class',
      src: '/videos/sekilas-panti.mp4',
      poster: '/images/program-1-photo-2.png',
      desc: 'Sesi motivasi, pembentukan growth mindset, dan pemaparan materi PPT kewirausahaan bagi anak binaan Panti Wira Adhi Karya.',
    },
    photos: [
      { src: '/images/program-1-photo-1.png', caption: 'Pemaparan Materi PPT Kewirausahaan di Hadapan Anak Binaan' },
      { src: '/images/program-1-photo-2.png', caption: 'Sesi Tanya Jawab & Diskusi Interaktif Bersama Tim Pemateri' },
      { src: '/images/program-1-photo-3.png', caption: 'Penyampaian Ide Bisnis Sederhana oleh Peserta Pelatihan' },
      { src: '/images/program-1-photo-4.png', caption: 'Dokumentasi Foto Bersama Usai Pemaparan Materi PPT' },
    ],
  },
  {
    id: 'program-2-vol-1',
    code: 'Program 2 Vol.1',
    volume: 'Vol.1',
    tag: 'Program 2 Vol.1',
    title: 'Pelatihan Calistung Bisnis & Literasi Keuangan Dasar',
    subtitle: 'Modul Presentasi: Membaca Nota, Berhitung HPP, Laba Rugi & Simulasi BEP Dasar',
    category: 'Literasi & Keterampilan Hidup',
    icon: '📚',
    summary:
      'Materi presentasi komprehensif mengenai dasar-dasar membaca transaksi usaha, berhitung Harga Pokok Produksi (HPP), penentuan harga jual, analisis laba bersih, dan perhitungan Break Even Point (BEP) pemula.',
    desc: 'Program 2 Vol.1 menyajikan materi presentasi interaktif "Pelatihan Calistung dan Literasi Keuangan Dasar" dalam rangkaian PKM-PM UDINUS. Melalui modul ini, anak binaan panti dibekali pemahaman praktis mengenai cara menghitung modal, menentukan harga jual yang menguntungkan, memahami titik impas (BEP), serta pentingnya kedisiplinan memisahkan uang pribadi dan modal usaha.',
    silabus: [
      'Pengenalan Komponen Keuangan Usaha: Modal Awal, Biaya Bahan, dan Biaya Operasional',
      'Rumus Perhitungan Harga Pokok Produksi (HPP) per Unit Produk',
      'Penetapan Harga Jual, Perhitungan Omzet, dan Analisis Laba Bersih',
      'Pemahaman Konsep Break Even Point (BEP) / Titik Impas Usaha',
      '4 Alasan Penting Mengetahui BEP (Target Penjualan, Mencegah Rugi, Balik Modal, Strategi Harga)',
      'Studi Kasus Nyata: Simulasi Perhitungan HPP, Laba, dan BEP Produk Olahan Pangan',
      'Edukasi Disiplin Pemisahan Kas Pribadi dan Kas Modal Usaha',
    ],
    outcomes: [
      'Kemampuan membaca dan menghitung transaksi perdagangan harian dengan cermat.',
      'Kemahiran menghitung HPP per unit dan menentukan harga jual yang aman.',
      'Kemampuan menghitung target minimal penjualan (BEP) agar usaha tidak merugi.',
      'Kedisiplinan tinggi dalam pencatatan buku kas dan tata kelola modal mandiri.',
    ],
    pptData: {
      title: 'Materi Presentasi PPT : Calistung & Literasi Keuangan Dasar',
      fileUrl: '/documents/materi-program-2-vol-1.pdf',
      totalSlides: 11,
      slides: [
        {
          slideNum: 1,
          badge: 'Cover Modul',
          title: 'PELATIHAN CALISTUNG & LITERASI KEUANGAN DASAR',
          subtitle: 'Membaca Nota, Berhitung Modal & Mengelola Keuangan Usaha Mandiri',
          points: [
            'Program Pengabdian Masyarakat PKM - PM Universitas Dian Nuswantoro (UDINUS)',
            'Project Restart: Pemberdayaan Keterampilan Finansial Aplikatif bagi Anak Binaan Panti',
          ],
          icon: '📚',
        },
        {
          slideNum: 2,
          badge: 'Konsep Dasar',
          title: 'Mengenal Calistung dalam Dunia Usaha',
          subtitle: 'Keterampilan Membaca, Menulis, dan Berhitung untuk Wirausaha',
          points: [
            'Membaca: Memahami label harga, nota belanja bahan baku, dan kwitansi transaksi.',
            'Menulis: Mencatat buku kas harian, daftar pesanan pelanggan, dan laporan persediaan.',
            'Berhitung: Menghitung modal belanja, uang kembalian, dan total keuntungan penjualan.',
          ],
          icon: '✏️',
        },
        {
          slideNum: 3,
          badge: 'Komponen Biaya',
          title: 'Unsur Biaya dalam Produksi Usaha',
          subtitle: 'Membedakan Jenis Pengeluaran Usaha:',
          points: [
            '1. Biaya Bahan Baku: Pengeluaran untuk bahan utama (misal: daun cincau, singkong, gula, cup kemasan).',
            '2. Biaya Operasional: Pengeluaran pendukung (misal: gas LPG, minyak goreng, es batu, transportasi belanja).',
            '3. Modal Awal: Total dana yang disiapkan untuk membeli seluruh kebutuhan sebelum produksi dimulai.',
          ],
          icon: '💰',
        },
        {
          slideNum: 4,
          badge: 'Rumus HPP',
          title: 'Harga Pokok Produksi (HPP)',
          subtitle: 'Dasar Mengetahui Biaya Modal Asli Setiap Unit Produk',
          points: [
            'Rumus Total Biaya Produksi = Total Biaya Bahan Baku + Total Biaya Operasional.',
            'Rumus HPP per Unit = Total Biaya Produksi dibagi Jumlah Produk yang Dihasilkan.',
            'Mengetahui HPP adalah kunci agar harga jual tidak berada di bawah modal.',
          ],
          icon: '🧮',
        },
        {
          slideNum: 5,
          badge: 'Menentukan Harga & Laba',
          title: 'Penetapan Harga Jual & Rumus Laba Bersih',
          subtitle: 'Meraih Keuntungan Usaha yang Terukur:',
          points: [
            'Harga Jual = HPP per unit + Margin Keuntungan yang Diinginkan.',
            'Pendapatan (Omzet) = Jumlah Unit Terjual dikali Harga Jual.',
            'Laba Bersih = Total Pendapatan (Omzet) dikurangi Total Biaya Produksi.',
          ],
          icon: '💵',
        },
        {
          slideNum: 6,
          badge: 'Studi Kasus Produksi',
          title: 'Studi Kasus: Simulasi Usaha Olahan Pangan',
          subtitle: 'Contoh Perhitungan Riil Produksi 20 Porsi:',
          points: [
            '• Total Biaya Bahan Baku: Rp40.000 | Biaya Operasional & Cup: Rp10.000 -> Total Biaya = Rp50.000.',
            '• Jumlah Hasil Produksi = 20 cup -> HPP per cup = Rp50.000 / 20 = Rp2.500 per cup.',
            '• Ditetapkan Harga Jual = Rp4.000 per cup.',
            '• Jika semua 20 cup terjual -> Total Omzet = 20 x Rp4.000 = Rp80.000.',
            '• Laba Bersih = Rp80.000 - Rp50.000 = Rp30.000 untung bersih!',
          ],
          icon: '🥣',
        },
        {
          slideNum: 7,
          badge: 'Titik Impas (BEP)',
          title: 'Mengenal Break Even Point (BEP)',
          subtitle: 'Kondisi Balik Modal Tanpa Kehilangan Dana',
          points: [
            'Pengertian BEP (Titik Impas): Kondisi di mana total pendapatan yang diterima persis sama dengan total biaya yang dikeluarkan.',
            'Pada titik BEP, usaha belum memperoleh laba, namun tidak mengalami kerugian (modal kembali 100%).',
          ],
          icon: '⚖️',
        },
        {
          slideNum: 8,
          badge: 'Urgensi BEP',
          title: 'Kenapa Mengetahui BEP Sangat Penting?',
          subtitle: '4 Alasan Utama Menghitung BEP:',
          points: [
            '01. Menentukan target penjualan minimal yang harus dicapai setiap hari.',
            '02. Mengetahui batas waktu kapan modal awal akan kembali.',
            '03. Mengurangi dan mengantisipasi risiko kerugian usaha.',
            '04. Membantu pemilik usaha dalam menyusun strategi promosi dan harga diskon yang aman.',
          ],
          icon: '🎯',
        },
        {
          slideNum: 9,
          badge: 'Studi Kasus BEP',
          title: 'Simulasi Perhitungan BEP Unit',
          subtitle: 'Berapa Cup yang Harus Terjual Agar Balik Modal?',
          points: [
            '• Keuntungan per Cup = Harga Jual (Rp4.000) - HPP (Rp2.500) = Rp1.500.',
            '• Jika ada Biaya Tetap / Modal Awal = Rp30.000 -> BEP Unit = Rp30.000 / Rp1.500 = 20 unit.',
            '• Artinya: Setelah penjualan mencapai 20 cup, modal kembali sepenuhnya. Penjualan cup ke-21 dan seterusnya adalah keuntungan bersih!',
          ],
          icon: '📈',
        },
        {
          slideNum: 10,
          badge: 'Manajemen Kas',
          title: 'Disiplin Pemisahan Uang Pribadi & Kas Usaha',
          subtitle: 'Prinsip Emas Menjaga Usaha Tetap Berjalan:',
          points: [
            '1. Jangan pernah mencampur uang saku pribadi dengan dompet uang hasil jualan.',
            '2. Selalu catat setiap pengeluaran sekecil apa pun di buku kas harian.',
            '3. Simpan laba bersih untuk diputar kembali menjadi modal usaha batch berikutnya.',
          ],
          icon: '🔐',
        },
        {
          slideNum: 11,
          badge: 'Penutup & Evaluasi',
          title: 'Kesimpulan & Praktik Terbimbing',
          subtitle: 'Kunci Sukses Wirausaha Mandiri Panti Wira Adhi Karya',
          points: [
            'Dengan menguasai calistung bisnis dan literasi keuangan dasar, anak binaan panti siap mengelola usaha secara cerdas, jujur, dan mandiri.',
            'Project Restart PKM - PM Universitas Dian Nuswantoro (UDINUS)',
          ],
          icon: '✅',
        },
      ],
    },
    video: {
      title: 'Video Pembelajaran Calistung Bisnis Dasar (Program 2 Vol.1)',
      src: '/videos/lv_0_20260719223536 (1) (1).mp4',
      poster: '/images/program-vol-2-1-photo-1.jpg',
      desc: 'Praktik literasi keuangan dasar, perhitungan HPP, penetapan harga jual, dan simulasi BEP oleh anak binaan.',
    },
    photos: [
      { src: '/images/program-vol-2-1-photo-1.jpg', caption: 'Sesi Foto Bersama Banner Program 2 Vol.1: Restart Literacy and Life Skills Training' },
      { src: '/images/program-vol-2-1-photo-2.jpg', caption: 'Praktik Penyelesaian Studi Kasus & Calistung Bisnis Aplikatif' },
      { src: '/images/program-vol-2-1-photo-3.jpg', caption: 'Penyampaian Materi Literasi & Keterampilan Hidup di Kelas' },
      { src: '/images/program-vol-2-1-photo-4.jpg', caption: 'Pendampingan Individu & Perhitungan HPP, Laba Rugi serta BEP' },
    ],
  },
  {
    id: 'program-2-vol-2',
    code: 'Program 2 Vol.2',
    volume: 'Vol.2',
    tag: 'Program 2 Vol.2',
    title: 'Analisis SWOT & Strategi Bisnis Mandiri (Modul Lanjutan)',
    subtitle: 'Modul Presentasi: Evaluasi Kekuatan, Kelemahan, Peluang & Ancaman Bisnis',
    category: 'Literasi & Keterampilan Hidup',
    icon: '💡',
    summary:
      'Materi presentasi komprehensif mengenai konsep Analisis SWOT (Strengths, Weaknesses, Opportunities, Threats), pemetaan faktor internal-eksternal, studi kasus nyata, dan penyusunan strategi bisnis mandiri.',
    desc: 'Program 2 Vol.2 menyajikan materi presentasi interaktif "Analisis SWOT" dalam rangkaian Project Restart PKM-PM UDINUS. Peserta diajarkan teknik perencanaan strategis untuk mengevaluasi kekuatan dan kelemahan internal produk panti, sekaligus menangkap peluang pasar dan mengantisipasi ancaman persaingan secara cerdas.',
    silabus: [
      'Pengertian Dasar Analisis SWOT (Strengths, Weaknesses, Opportunities, Threats)',
      '4 Komponen Utama & Klasifikasi Faktor Internal vs Eksternal Usaha',
      'Tujuan & 4 Manfaat Analisis SWOT (Hemat Modal, Ciri Khas, Daya Saing & Strategi)',
      'Urgensi Analisis SWOT bagi Keberlanjutan Usaha Mandiri',
      'Studi Kasus Nyata: Praktik Analisa Tabel SWOT Unit Usaha Coffee Shop / Minuman',
      'Kesimpulan & Penerapan Analisis SWOT pada Produk Olahan Pangan Panti',
    ],
    outcomes: [
      'Kemampuan memetakan keunggulan dan kekurangan produk panti secara objektif.',
      'Keterampilan menangkap peluang pasar di lingkungan sekitar dan media digital.',
      'Kesiapan menyusun langkah antisipasi terhadap hambatan dan persaingan usaha.',
      'Kemandirian dalam merumuskan strategi pemasaran dan pengembangan bisnis.',
    ],
    pptData: {
      title: 'Materi Presentasi PPT : Analisis SWOT Usaha',
      fileUrl: '/documents/materi-analisis-swot-program-2-vol-2.pdf',
      totalSlides: 12,
      slides: [
        {
          slideNum: 1,
          badge: 'Cover Modul',
          title: 'ANALISIS SWOT',
          subtitle: 'Teknik Perencanaan & Evaluasi Strategi Usaha Mandiri',
          points: [
            'Program Pembinaan PKM - PM Universitas Dian Nuswantoro (UDINUS)',
            'Project Restart: Membangun Kemandirian & Keterampilan Wirausaha Binaan Panti',
          ],
          icon: '📊',
        },
        {
          slideNum: 2,
          badge: 'Pengantar',
          title: 'APA ITU SWOT?',
          subtitle: 'Mengenal Alat Analisis Strategis Usaha',
          points: [
            'Sebuah metode evaluasi komprehensif untuk melihat posisi usaha.',
            'Membantu pelaku usaha mengenali kekuatan internal dan mengantisipasi ancaman eksternal.',
          ],
          icon: '🔍',
        },
        {
          slideNum: 3,
          badge: 'Pengertian Dasar',
          title: 'Pengertian Analisis SWOT',
          subtitle: 'Melihat Gambaran Menyeluruh Kondisi Internal & Eksternal',
          points: [
            'Analisis SWOT adalah cara melihat gambaran menyeluruh tentang apa yang menjadi keunggulan dan kelemahan kita di dalam, serta peluang dan tantangan yang ada di luar.',
            'Suatu teknik atau alat perencanaan untuk mengevaluasi kondisi diri sendiri, bisnis, maupun proyek berdasarkan 4 faktor utama: S (Strengths), W (Weaknesses), O (Opportunities), dan T (Threats).',
          ],
          icon: '📖',
        },
        {
          slideNum: 4,
          badge: 'Komponen Kunci',
          title: '4 Komponen Utama SWOT',
          subtitle: 'Pertanyaan Pemantik untuk Setiap Faktor:',
          points: [
            '01. Strength (Kekuatan): Apa yang paling bagus (ciri khas) dari produk kita?',
            '02. Weakness (Kelemahan): Apa yang masih kurang dan perlu kita latih/perbaiki dari produk kita?',
            '03. Opportunities (Peluang): Kesempatan bagus apa yang ada di sekitar kita?',
            '04. Threats (Ancaman): Tantangan dari luar apa yang bisa mengganggu kita?',
          ],
          icon: '🧩',
        },
        {
          slideNum: 5,
          badge: 'Faktor Internal vs Eksternal',
          title: 'Penjelasan Mendalam Faktor SWOT',
          subtitle: 'Klasifikasi Sumber Pengaruh Usaha:',
          points: [
            '01. Strength: Faktor internal yang menjadi keunggulan (kemampuan khusus, sumber daya kuat, reputasi baik, mutu produk/jasa unggul dibanding pesaing).',
            '02. Weakness: Faktor internal yang menjadi hambatan (keterbatasan sumber daya, minim pengalaman, proses belum efisien, mutu perlu ditingkatkan).',
            '03. Opportunities: Faktor eksternal yang dapat dimanfaatkan (tren pasar positif, kebutuhan baru masyarakat, kemajuan teknologi digital).',
            '04. Threats: Faktor eksternal yang berpotensi merugikan (peningkatan jumlah pesaing, perubahan tren selera, kenaikan harga bahan baku).',
          ],
          icon: '⚖️',
        },
        {
          slideNum: 6,
          badge: 'Tujuan Strategis',
          title: 'Tujuan Analisis SWOT',
          subtitle: '4 Tujuan Utama Penerapan SWOT:',
          points: [
            '1. Mengenali Potensi Diri / Usaha: Mengetahui secara pasti kekuatan utama untuk dijadikan senjata menuju sukses.',
            '2. Mendeteksi Kelemahan Sejak Dini: Mengetahui kekurangan agar segera diperbaiki sebelum menimbulkan masalah besar.',
            '3. Melihat Peluang Emas: Membuka mata terhadap kesempatan baik di pasar yang bisa dimanfaatkan.',
            '4. Menyiapkan Antisipasi Risiko: Mewaspadai hambatan atau bahaya dari luar agar tidak terkejut saat kendala datang.',
          ],
          icon: '🎯',
        },
        {
          slideNum: 7,
          badge: 'Manfaat Nyata',
          title: 'Manfaat Analisis SWOT',
          subtitle: '4 Keuntungan bagi Pelaku Usaha:',
          points: [
            '01. Hemat Modal & Waktu: Mencegah pengeluaran uang untuk strategi jualan yang salah.',
            '02. Punya Ciri Khas (Keunggulan): Membantu produk terlihat unik dan lebih menarik dibanding saingan.',
            '03. Siap Menghadapi Persaingan: Bisnis tidak mudah gulung tikar karena siap merespons gerakan kompetitor.',
            '04. Memudahkan Menyusun Strategi: Menjadi panduan langkah demi langkah bagi pemilik usaha untuk berkembang.',
          ],
          icon: '💡',
        },
        {
          slideNum: 8,
          badge: 'Urgensi',
          title: 'Kenapa SWOT Itu Penting?',
          subtitle: 'Fondasi Utama Keberlangsungan Usaha',
          points: [
            'Tanpa analisis SWOT, usaha berjalan tanpa arah dan rentan mengalami kerugian.',
            'SWOT mengubah ketidakpastian menjadi strategi aksi yang terukur dan terencana.',
          ],
          icon: '❓',
        },
        {
          slideNum: 9,
          badge: 'Pilar Penting',
          title: '4 Alasan SWOT Sangat Krusial',
          subtitle: 'Ringkasan Nilai Penting SWOT:',
          points: [
            '01. Mengenali potensi yang dimiliki secara tepat.',
            '02. Mengetahui kekurangan usaha untuk segera dibenahi.',
            '03. Melihat peluang pasar yang ada di sekitar.',
            '04. Mengantisipasi risiko atau hambatan bisnis di masa depan.',
          ],
          icon: '📌',
        },
        {
          slideNum: 10,
          badge: 'Studi Kasus Nyata',
          title: 'Analisa Tabel SWOT : Coffee Shop / Minuman',
          subtitle: 'Contoh Praktik Pemetaan SWOT Bisnis Minuman:',
          points: [
            '• Strength (Kekuatan): Rasa kopi/minuman enak dan konsisten, lokasi strategis dekat sekolah/kampus.',
            '• Weakness (Kelemahan): Variasi menu kurang banyak, jumlah karyawan masih sedikit.',
            '• Opportunities (Peluang): Budaya nongkrong anak muda meningkat, promosi efektif via Instagram & TikTok.',
            '• Threats (Ancaman): Banyak coffee shop kompetitor bermunculan, tren minuman cepat berubah / daya beli menurun.',
          ],
          icon: '☕',
        },
        {
          slideNum: 11,
          badge: 'Kesimpulan',
          title: 'Kesimpulan Analisis SWOT',
          subtitle: 'Panduan Praktis bagi Usaha Besar Maupun Usaha Kecil Binaan:',
          points: [
            'Analisis SWOT adalah alat untuk memahami kondisi usaha dari sisi kekuatan, kelemahan, peluang, dan ancaman.',
            'Membantu pelaku usaha menyusun strategi yang tepat: kelebihan dioptimalkan, kekurangan diperbaiki, peluang dimaksimalkan, dan ancaman diantisipasi sejak awal.',
            'Sangat bermanfaat tidak hanya untuk bisnis besar, tetapi terutama untuk rintisan usaha kecil binaan panti.',
          ],
          icon: '✅',
        },
        {
          slideNum: 12,
          badge: 'Penutup',
          title: 'Terima Kasih',
          subtitle: 'Project Restart PKM - PM Universitas Dian Nuswantoro (UDINUS)',
          points: [
            'Mari terapkan Analisis SWOT pada produk karya anak binaan Panti Wira Adhi Karya!',
            'Kenali kekuatan produk kita, menangkan pasar, dan capai kemandirian usaha berkelanjutan.',
          ],
          icon: '🙏',
        },
      ],
    },
    video: {
      title: 'Praktik Studi Kasus Analisis SWOT & Strategi Bisnis (Program 2 Vol.2)',
      src: '/videos/lv_0_20260719223536 (1) (1).mp4',
      poster: '/images/program-2-photo-1.jpg',
      desc: 'Simulasi pemetaan tabel SWOT dan penyusunan strategi pemasaran produk karya panti.',
    },
    photos: [
      { src: '/images/program-2-photo-1.jpg', caption: 'Pemaparan Materi & Evaluasi Analisis SWOT Usaha Mandiri' },
      { src: '/images/program-2-photo-2.jpg', caption: 'Penyusunan Lembar Kerja & Laporan Usaha Mandiri Panti' },
      { src: '/images/program-2-photo-3.jpg', caption: 'Praktik Pendalaman Perhitungan BEP & HPP Produk Karya Panti' },
      { src: '/images/program-2-photo-4.jpg', caption: 'Simulasi Penetapan Harga Jual Bersaing & Analisis Laba Rugi' },
    ],
  },
  {
    id: 'program-3-vol-1',
    code: 'Program 3 Vol.1',
    volume: 'Vol.1',
    tag: 'Program 3 Vol.1',
    title: 'Pelatihan & Praktik Produk Olahan Pangan',
    subtitle: 'Sesi Praktik Produksi Es Cincau & Singkong Serut Siap Saji',
    category: 'Produksi & Kewirausahaan Nyata',
    icon: '🥣',
    summary:
      'Praktik pembuatan es cincau dan singkong serut mulai dari persiapan bahan hingga produk siap saji untuk melatih keterampilan produksi pangan sederhana dan wirausaha sosial.',
    desc: 'Kegiatan ini merupakan sesi praktik langsung dalam rangkaian Restart Social and Entrepreneur Lab, di mana peserta mempraktikkan pembuatan es cincau dan singkong serut mulai dari persiapan bahan hingga produk siap saji. Melalui praktik ini, peserta belajar menerapkan konsep kewirausahaan secara nyata sekaligus melatih keterampilan produksi pangan sederhana. Program ini diharapkan mampu menumbuhkan semangat wirausaha sosial peserta dan membekali mereka dengan keterampilan praktis untuk usaha mandiri.',
    silabus: [
      'Standar Higienitas Dapur Produksi & Keselamatan Kerja',
      'Pemilihan & Penyiapan Bahan Baku Berkualitas (Daun Cincau, Singkong, Gula Aren)',
      'Teknik Pengolahan, Perebusan & Pencampuran Rasa yang Pas',
      'Pengemasan Higienis & Standar Penyajian Produk Siap Jual',
    ],
    outcomes: [
      'Keterampilan teknis dalam memproduksi es cincau segar dan keripik singkong serut.',
      'Penerapan standar kebersihan, takaran resep, dan kontrol kualitas pangan.',
      'Tumbuhnya jiwa wirausaha dan rasa bangga menghasilkan produk mandiri.',
    ],
    video: {
      title: 'Dokumentasi Praktik Produksi Es Cincau & Singkong Serut (Program 3 Vol.1)',
      src: '/videos/sekilas-panti.mp4',
      poster: '/images/program-3-photo-1.jpg',
      desc: 'Rangkaian proses pengolahan bahan baku hingga produk siap saji bersama anak binaan panti.',
    },
    photos: [
      { src: '/images/program-3-photo-3.jpg', caption: 'Praktik Pembuatan Olahan Pangan & Es Cincau di Dapur Pelatihan' },
      { src: '/images/program-3-photo-1.jpg', caption: 'Sesi Foto Bersama Hasil Olahan Pangan Bersama Anak Binaan Panti' },
      { src: '/images/program-3-photo-4.jpg', caption: 'Proses Perebusan & Pengolahan Bahan Cincau dan Singkong Serut' },
      { src: '/images/program-3-photo-2.jpg', caption: 'Dokumentasi Produk Siap Saji Es Cincau Bersama Peserta Program' },
    ],
  },
  {
    id: 'program-3-vol-2',
    code: 'Program 3 Vol.2',
    volume: 'Vol.2',
    tag: 'Program 3 Vol.2',
    title: 'Desain Canva, Pembuatan Logo & Poster Usaha',
    subtitle: 'Pelatihan Desain Grafis Digital & Branding Identitas Usaha Mandiri',
    category: 'Desain Grafis & Branding Digital',
    icon: '🎨',
    summary:
      'Pemaparan materi editing Canva mencakup tutorial pembuatan poster dan logo, dilanjutkan dengan praktik langsung membuat poster dan logo usaha mereka sendiri.',
    desc: 'Kegiatan ini merupakan sesi pemaparan materi dan praktik langsung dalam rangkaian Restart Social and Entrepreneur Lab, di mana peserta diberikan materi editing Canva mencakup tutorial pembuatan poster dan logo, dilanjutkan dengan praktik langsung membuat poster dan logo usaha mereka sendiri. Melalui kegiatan ini, peserta belajar menerapkan keterampilan desain digital sederhana sebagai bekal branding untuk mendukung usaha mandiri mereka.',
    silabus: [
      'Pengenalan Aplikasi Canva: Fitur, Template, Elemen Grafis & Tipografi',
      'Prinsip Dasar Desain & Identitas Warna Produk Usaha',
      'Tutorial Langkah Demi Langkah Merancang Logo Usaha Mandiri',
      'Pembuatan Poster Promosi Digital untuk WhatsApp & Media Sosial',
    ],
    outcomes: [
      'Penguasaan penggunaan smartphone untuk kebutuhan desain grafis promosi.',
      'Kemampuan merancang logo unik dan poster promosi yang menarik pembeli.',
      'Peningkatan nilai jual produk panti melalui kemasan dan branding visual yang rapi.',
    ],
    video: {
      title: 'Tutorial Desain Canva & Branding Usaha (Program 3 Vol.2)',
      src: '/videos/sekilas-panti.mp4',
      poster: '/images/program-3-vol-2-photo-1.jpg',
      desc: 'Pemaparan fitur Canva dan pendampingan pembuatan logo usaha mandiri di smartphone.',
    },
    photos: [
      { src: '/images/program-3-vol-2-photo-1.jpg', caption: 'Pemaparan Materi Fitur-Fitur Desain Canva & Branding Usaha di Depan Kelas' },
      { src: '/images/program-3-vol-2-photo-2.jpg', caption: 'Tutorial Langkah Demi Langkah Pembuatan Logo & Poster Melalui Proyektor' },
      { src: '/images/program-3-vol-2-photo-3.jpg', caption: 'Pendampingan Intensif Praktik Editing Desain Canva Bersama Peserta' },
      { src: '/images/program-3-vol-2-photo-4.jpg', caption: 'Praktik Mandiri Pembuatan Logo & Poster Usaha Menggunakan Smartphone' },
    ],
  },
  {
    id: 'program-4-vol-1',
    code: 'Program 4 Vol.1',
    volume: 'Vol.1',
    tag: 'Program 4 Vol.1',
    title: 'Literasi Digital & Serah Terima Website Resmi Panti',
    subtitle: 'Edukasi Pengelolaan Media Digital & Operasional Website Panti',
    category: 'Teknologi & Keberlanjutan Usaha',
    icon: '🌐',
    summary:
      'Pemaparan materi literasi digital seputar website dan serah terima website resmi panti sebagai identitas digital serta sarana promosi dan penjualan produk online.',
    desc: 'Kegiatan ini merupakan sesi pemaparan materi literasi digital seputar website dalam rangkaian Restart Evolution and Sustainability, mencakup pemahaman dasar mengenai fungsi dan pengelolaan website sebagai media digital usaha. Pada program ini juga dilakukan serah terima website resmi panti untuk digunakan sebagai identitas digital sekaligus sarana promosi dan penjualan produk usaha panti secara online. Melalui kegiatan ini, pengelola panti dibekali pemahaman untuk mengoperasikan website tersebut secara mandiri demi keberlanjutan usaha mereka.',
    silabus: [
      'Konsep Dasar Website sebagai Identitas Digital & Media Pemasaran Online',
      'Struktur Menu & Fitur Utama Website Resmi Panti Wira Adhi Karya',
      'Pengelolaan Katalog Produk, Pembaruan Harga & Informasi Kegiatan',
      'Serah Terima Resmi Hak Kelola Website untuk Keberlanjutan Usaha Panti',
    ],
    outcomes: [
      'Pemahaman utuh mengenai fungsi website sebagai media promosi sosial dan komersial.',
      'Kemandirian pengurus dan anak binaan dalam memperbarui data website.',
      'Terbentuknya jembatan digital antara panti, donatur, pembeli, dan masyarakat luas.',
    ],
    video: {
      title: 'Sesi Edukasi Literasi Digital & Serah Terima Website (Program 4 Vol.1)',
      src: '/videos/sekilas-panti.mp4',
      poster: '/images/program-4-vol-1-photo-1.jpg',
      desc: 'Pemaparan fitur-fitur website resmi panti dan serah terima operasional untuk keberlanjutan usaha.',
    },
    photos: [
      { src: '/images/program-4-vol-1-photo-1.jpg', caption: 'Pemaparan Pengelolaan Website Resmi Panti di Layar Proyektor' },
      { src: '/images/program-4-vol-1-photo-2.jpg', caption: 'Sesi Edukasi Literasi Digital & Serah Terima Website Usaha' },
      { src: '/images/program-4-vol-1-photo-3.jpg', caption: 'Pendampingan Pengoperasian Website Panti Bersama Peserta' },
      { src: '/images/program-4-vol-1-photo-4.jpg', caption: 'Uji Coba Eksplorasi Fitur Website & Katalog Produk di Smartphone' },
    ],
  },
]

// Komponen Slide Deck Presentasi Interaktif untuk Program 1
function PptSlideViewer({ pptData }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const slides = pptData.slides
  const currentSlide = slides[currentSlideIndex]

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    }
  }

  return (
    <div className="mt-8 rounded-3xl border-2 border-emerald-400/40 bg-gradient-to-br from-[#021810] via-[#042d1f] to-[#021810] p-5 sm:p-8 text-white shadow-2xl">
      {/* Header Presentasi */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl border border-emerald-400/40 shadow-inner">
            📊
          </span>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
              Media Pembelajaran Presentasi (Slide Deck)
            </span>
            <h4 className="font-display text-base sm:text-lg font-bold text-white">
              {pptData.title}
            </h4>
          </div>
        </div>

        <a
          href={pptData.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="materi-kewirausahaan-program-1.pdf"
          className="btn-primary !py-2 !px-4 text-xs !bg-emerald-400 !text-slate-950 font-bold hover:!bg-emerald-300 shadow-md inline-flex items-center gap-1.5"
        >
          <span>📥</span>
          <span>Unduh PPT (PDF)</span>
        </a>
      </div>

      {/* Tampilan Konten Slide */}
      <div className="mt-6">
        <div className="relative min-h-[320px] sm:min-h-[360px] rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-6 sm:p-8 flex flex-col justify-between shadow-inner">
          {/* Baris Atas: Badge & Nomor Slide */}
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold text-emerald-300">
              {currentSlide.badge}
            </span>
            <span className="font-mono text-xs font-bold text-emerald-400/90 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
              Slide {currentSlide.slideNum} dari {slides.length}
            </span>
          </div>

          {/* Isi Pokok Slide */}
          <div className="my-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl sm:text-4xl">{currentSlide.icon}</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                {currentSlide.title}
              </h3>
            </div>

            {currentSlide.subtitle && (
              <p className="text-xs sm:text-sm font-semibold text-emerald-300 mb-4">
                {currentSlide.subtitle}
              </p>
            )}

            <div className="space-y-2.5 rounded-xl bg-black/40 p-4 sm:p-5 border border-emerald-500/20">
              {currentSlide.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90 leading-relaxed text-justify">
                  <span className="text-emerald-400 font-bold mt-0.5">▪</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Slide Bawah */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-emerald-500/20 pt-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition flex items-center gap-1.5 ${
                currentSlideIndex === 0
                  ? 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                  : 'bg-emerald-950 text-emerald-200 hover:bg-emerald-500 hover:text-white border border-emerald-500/30'
              }`}
            >
              <span>&larr;</span>
              <span>Slide Sebelumnya</span>
            </button>

            {/* Indikator Titik Slide */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentSlideIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all ${
                    dotIdx === currentSlideIndex
                      ? 'w-6 bg-emerald-400 shadow-sm shadow-emerald-400'
                      : 'w-2.5 bg-emerald-950 border border-emerald-500/40 hover:bg-emerald-600'
                  }`}
                  aria-label={`Buka slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentSlideIndex === slides.length - 1}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition flex items-center gap-1.5 ${
                currentSlideIndex === slides.length - 1
                  ? 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                  : 'bg-emerald-950 text-emerald-200 hover:bg-emerald-500 hover:text-white border border-emerald-500/30'
              }`}
            >
              <span>Slide Berikutnya</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MateriProgram() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('all')
  const [activePhoto, setActivePhoto] = useState(null)
  const [selectedMateri, setSelectedMateri] = useState(MATERI_DATA[0])

  useEffect(() => {
    if (id) {
      const found = MATERI_DATA.find((m) => m.id === id)
      if (found) {
        setActiveTab(found.id)
        setSelectedMateri(found)
      } else if (id === 'program-2') {
        setActiveTab('program-2-vol-1')
        setSelectedMateri(MATERI_DATA[1])
      } else if (id === 'program-3') {
        setActiveTab('program-3-vol-1')
        setSelectedMateri(MATERI_DATA[3])
      } else if (id === 'program-4') {
        setActiveTab('program-4-vol-1')
        setSelectedMateri(MATERI_DATA[5])
      }
    }
  }, [id])

  const filteredMateri =
    activeTab === 'all'
      ? MATERI_DATA
      : MATERI_DATA.filter((m) => m.id === activeTab)

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Kurikulum & Pembelajaran"
          title="Materi Program Pembinaan"
          subtitle="Modul presentasi PPT, silabus pelatihan, dokumentasi video edukasi, dan materi praktik kewirausahaan mandiri Panti Wira Adhi Karya Ungaran."
        />

        {/* TAB FILTER MODUL MATERI */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveTab('all')
              setSelectedMateri(MATERI_DATA[0])
            }}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition ${
              activeTab === 'all'
                ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300'
                : 'bg-slate-900/80 text-emerald-100/90 hover:bg-emerald-500/20 hover:text-white border border-emerald-500/30'
            }`}
          >
            📋 Semua Materi ({MATERI_DATA.length})
          </button>

          {MATERI_DATA.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(item.id)
                setSelectedMateri(item)
              }}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activeTab === item.id
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300'
                  : 'bg-slate-900/80 text-emerald-100/90 hover:bg-emerald-500/20 hover:text-white border border-emerald-500/30'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.tag}</span>
            </button>
          ))}
        </div>

        {/* SECTION PEMUTAR VIDEO DOKUMENTASI MATERI */}
        <div className="mt-10 rounded-3xl border border-emerald-500/40 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-500/20 pb-4 mb-6">
            <div>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold text-emerald-300">
                {selectedMateri.code} &middot; {selectedMateri.volume}
              </span>
              <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-white">
                🎥 Video Pembelajaran: {selectedMateri.title}
              </h3>
            </div>
            <span className="text-xs font-medium text-emerald-300">
              {selectedMateri.category}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <VideoPlayer
                key={selectedMateri.id}
                src={selectedMateri.video.src}
                poster={selectedMateri.video.poster}
                title={selectedMateri.video.title}
                description={selectedMateri.video.desc}
              />
            </div>

            {/* DAFTAR PILIHAN VIDEO MATERI */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-emerald-300">
                Pilih Modul Video Pembelajaran:
              </h4>

              <div className="flex flex-col gap-2 overflow-y-auto max-h-[420px] pr-1">
                {MATERI_DATA.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedMateri(item)
                      setActiveTab(item.id)
                    }}
                    className={`flex gap-3 rounded-xl p-3 text-left transition border ${
                      selectedMateri.id === item.id
                        ? 'bg-emerald-950/90 border-emerald-400 text-white shadow-lg ring-1 ring-emerald-400/50'
                        : 'bg-slate-950/60 border-emerald-500/20 text-emerald-100/80 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="relative shrink-0 w-20 h-14 rounded-lg bg-black overflow-hidden flex items-center justify-center border border-emerald-500/30">
                      <img
                        src={item.video.poster}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between overflow-hidden">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        {item.tag}
                      </span>
                      <h5 className="text-xs font-semibold line-clamp-2 leading-snug text-white">
                        {item.title}
                      </h5>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LIST KARTU DETAIL MATERI PROGRAM */}
        <div className="mt-12 space-y-12">
          {filteredMateri.map((materi) => (
            <div
              key={materi.id}
              id={materi.id}
              className="group relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-md shadow-2xl transition hover:border-emerald-400/70"
            >
              {/* Header Materi Card */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-emerald-500/20 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-3xl border border-emerald-400/30 shadow-inner">
                    {materi.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-emerald-400 text-slate-950 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider">
                        {materi.code}
                      </span>
                      <span className="text-xs font-bold text-emerald-300">
                        {materi.volume} &middot; {materi.category}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl md:text-3xl font-black text-white">
                      {materi.title}
                    </h3>
                  </div>
                </div>

                <Link
                  to={`/program/${materi.id}`}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-950/60 px-4 py-2 text-xs font-bold text-emerald-300 transition hover:bg-emerald-500 hover:text-white"
                >
                  Lihat Detail Program &rarr;
                </Link>
              </div>

              {/* Deskripsi Materi */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Ringkasan & Tujuan Pembelajaran:
                </h4>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-emerald-100/90 text-justify">
                  {materi.desc}
                </p>
              </div>

              {/* EMBED SLIDE DECK VIEWER (KHUSUS PROGRAM 1 JIKA ADA DATA PPT) */}
              {materi.pptData && (
                <PptSlideViewer pptData={materi.pptData} />
              )}

              {/* Grid 2 Kolom: Silabus & Capaian (Outcomes) */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* Silabus Pembahasan */}
                <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-5">
                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-white">
                    <span>📖</span>
                    <span>Poin Silabus & Pokok Bahasan:</span>
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {materi.silabus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-100/80">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hasil Capaian Pembelajaran */}
                <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-5">
                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-white">
                    <span>🎯</span>
                    <span>Hasil Capaian Anak Binaan:</span>
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {materi.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-100/80">
                        <span className="text-emerald-400 font-bold">★</span>
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Galeri Foto Dokumentasi Modul Materi */}
              {materi.photos && materi.photos.length > 0 && (
                <div className="mt-8 border-t border-emerald-500/20 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                    📸 Dokumentasi Sesi Pelatihan {materi.code}:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {materi.photos.map((foto, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActivePhoto(foto)}
                        className="group/photo relative overflow-hidden rounded-xl border border-emerald-500/30 bg-black/50 cursor-pointer transition hover:scale-[1.03] hover:border-emerald-400 shadow-md"
                      >
                        <img
                          src={foto.src}
                          alt={foto.caption}
                          className="h-28 sm:h-36 w-full object-cover transition-transform duration-300 group-hover/photo:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity p-2 flex items-end">
                          <span className="text-[10px] text-emerald-200 font-medium line-clamp-1">
                            🔍 Perbesar
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LIGHTBOX POPUP PERBESAR FOTO */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl p-4 sm:p-6 border border-emerald-500/40 shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-rose-500 transition"
              >
                ✕
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                className="max-h-[75vh] w-auto mx-auto rounded-xl object-contain shadow-2xl"
              />
              <p className="mt-4 text-xs sm:text-sm font-semibold text-emerald-300">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
