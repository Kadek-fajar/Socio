// Struktur navigasi terpusat.
// Dipakai oleh Navbar (menu utama) dan Footer (tautan cepat) agar konsisten.

export const mainNav = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Panti', path: '/tentang' },
  {
    label: 'Program Kami',
    path: '/program',
    children: [
      { label: 'Semua Program Kami', path: '/program' },
      { label: 'Program 1', path: '/program/program-1' },
      {
        label: 'Program 2',
        path: '/program/program-2',
        subChildren: [
          { label: 'Program 2 Vol.1', path: '/program/program-2-vol-1' },
          { label: 'Program 2 Vol.2', path: '/program/program-2-vol-2' },
        ],
      },
      {
        label: 'Program 3',
        path: '/program/program-3',
        subChildren: [
          { label: 'Program 3 Vol.1', path: '/program/program-3-vol-1' },
          { label: 'Program 3 Vol.2', path: '/program/program-3-vol-2' },
        ],
      },
      {
        label: 'Program 4',
        path: '/program/program-4',
        subChildren: [
          { label: 'Program 4 Vol.1', path: '/program/program-4-vol-1' },
          { label: 'Program 4 Vol.2', path: '/program/program-4-vol-2' },
        ],
      },
    ],
  },
  { label: 'Produk', path: '/produk' },
  {
    label: 'Literasi Keuangan',
    path: '/literasi-keuangan',
    children: [
      { label: 'Ringkasan Literasi Keuangan', path: '/literasi-keuangan' },
      { label: 'Kalkulator HPP', path: '/literasi-keuangan/kalkulator-hpp' },
      { label: 'Kalkulator Laba Rugi', path: '/literasi-keuangan/kalkulator-laba-rugi' },
      { label: 'Kalkulator Arus Kas', path: '/literasi-keuangan/kalkulator-arus-kas' },
    ],
  },
  {
    label: 'Materi Program',
    path: '/materi-program',
    children: [
      { label: 'Semua Materi Program', path: '/materi-program' },
      { label: 'Materi Program 1', path: '/materi-program/program-1' },
      {
        label: 'Materi Program 2',
        path: '/materi-program/program-2',
        subChildren: [
          { label: 'Materi Program 2 Vol.1', path: '/materi-program/program-2-vol-1' },
          { label: 'Materi Program 2 Vol.2', path: '/materi-program/program-2-vol-2' },
        ],
      },
      {
        label: 'Materi Program 3',
        path: '/materi-program/program-3',
        subChildren: [
          { label: 'Materi Program 3 Vol.1', path: '/materi-program/program-3-vol-1' },
          { label: 'Materi Program 3 Vol.2', path: '/materi-program/program-3-vol-2' },
        ],
      },
      {
        label: 'Materi Program 4',
        path: '/materi-program/program-4',
        subChildren: [
          { label: 'Materi Program 4 Vol.1', path: '/materi-program/program-4-vol-1' },
        ],
      },
    ],
  },
]

// Tautan singkat di footer
export const footerLinks = {
  jelajahi: [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang Panti', path: '/tentang' },
    { label: 'Program Kami', path: '/program' },
    { label: 'Program 1', path: '/program/program-1' },
    { label: 'Program 2 Vol.1', path: '/program/program-2-vol-1' },
    { label: 'Program 2 Vol.2', path: '/program/program-2-vol-2' },
    { label: 'Program 3 Vol.1', path: '/program/program-3-vol-1' },
    { label: 'Program 3 Vol.2', path: '/program/program-3-vol-2' },
    { label: 'Program 4 Vol.1', path: '/program/program-4-vol-1' },
    { label: 'Program 4 Vol.2', path: '/program/program-4-vol-2' },
    { label: 'Produk Karya Binaan', path: '/produk' },
    { label: 'Dukung Panti & Kemitraan', path: '/dukung-kami' },
  ],
  layanan: [
    { label: 'Literasi Keuangan', path: '/literasi-keuangan' },
    { label: 'Materi Program', path: '/literasi-keuangan/materi-program' },
    { label: 'Kalkulator HPP', path: '/literasi-keuangan/kalkulator-hpp' },
    { label: 'Kalkulator Laba Rugi', path: '/literasi-keuangan/kalkulator-laba-rugi' },
    { label: 'Kalkulator Arus Kas', path: '/literasi-keuangan/kalkulator-arus-kas' },
  ],
}
