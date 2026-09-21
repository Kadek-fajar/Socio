import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

export default function TentangPanti() {
  const galeriFoto = [
    {
      id: 1,
      src: '/images/program-1-photo-1.png',
      alt: 'Pembinaan Keterampilan & Literasi Anak Panti Wira Adhi Karya',
      caption: 'Kegiatan Pembinaan & Pelatihan Keterampilan Anak Panti',
    },
    {
      id: 2,
      src: '/images/program-1-photo-2.png',
      alt: 'Foto Bersama Kegiatan Pemberdayaan Sosiopreneur Muda & Mitra',
      caption: 'Dokumentasi Kebersamaan Anak Binaan & Tim Pendamping',
    },
    {
      id: 3,
      src: '/images/program-1-photo-3.png',
      alt: 'Pendampingan & Presentasi Kewirausahaan Panti Wira Adhi Karya',
      caption: 'Sesi Pendampingan Literasi Keuangan & Kewirausahaan',
    },
  ]

  return (
    <div className="min-h-screen text-white">
      {/* SECTION UTAMA: PROFIL LENGKAP PANTI (SESUAI DESAIN & TEKS FOTO PENGGUNA) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#166534] via-[#047857] to-[#022c22] py-16 sm:py-20 lg:py-24">
        {/* Ambient Glow & Sparkle background */}
        <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-[48rem] rounded-full bg-emerald-400/20 blur-3xl" />
        
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10 relative z-10 text-center">
          
          {/* Judul Utama Panti */}
          <h1 className="font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl tracking-tight drop-shadow-md">
            Panti Pelayanan Sosial Anak Wira Adhi Karya Ungaran
          </h1>

          {/* Paragraf 1 */}
          <p className="mt-8 text-base leading-relaxed text-emerald-50/95 sm:text-lg lg:text-xl font-normal max-w-4xl mx-auto drop-shadow-sm text-justify">
            Panti Pelayanan Sosial Anak Wira Adhi Karya Ungaran merupakan lembaga pelayanan sosial
            yang berlokasi di Kabupaten Semarang dan berperan dalam memberikan pembinaan serta
            pendampingan bagi anak dan remaja berusia 15–21 tahun. Panti ini membina sekitar 25–30
            anak dengan latar belakang sosial ekonomi yang beragam dan rentan, serta membantu mereka
            mempersiapkan diri untuk mencapai kehidupan yang lebih mandiri.
          </p>

          {/* Paragraf 2 */}
          <p className="mt-6 text-base leading-relaxed text-emerald-50/95 sm:text-lg lg:text-xl font-normal max-w-4xl mx-auto drop-shadow-sm text-justify">
            Dalam proses pembinaannya, Panti Wira Adhi Karya Ungaran tidak hanya berfokus pada
            pemenuhan kebutuhan dan pendampingan sosial, tetapi juga mendorong pengembangan potensi
            dan keterampilan anak binaan. Berbagai upaya diarahkan untuk meningkatkan literasi,
            keterampilan hidup, kreativitas, kepercayaan diri, serta kemampuan produktif sebagai
            bekal menghadapi kehidupan setelah masa pembinaan.
          </p>

          {/* Paragraf 3 */}
          <p className="mt-6 text-base leading-relaxed text-emerald-50/95 sm:text-lg lg:text-xl font-normal max-w-4xl mx-auto drop-shadow-sm text-justify">
            Panti juga memiliki potensi sumber daya dan fasilitas yang dapat dikembangkan untuk
            mendukung kegiatan produktif dan kewirausahaan. Dengan adanya pembinaan yang
            berkelanjutan, diharapkan anak-anak binaan dapat memiliki keterampilan yang bermanfaat,
            mampu mengembangkan potensi diri, serta tumbuh menjadi individu yang kreatif, mandiri, dan
            siap berkontribusi di masyarakat.
          </p>

          {/* 3 Kartu Foto Kegiatan di Bagian Bawah (Sesuai Layout Foto Pengguna) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {galeriFoto.map((foto) => (
              <div
                key={foto.id}
                className="group relative overflow-hidden rounded-2xl border border-emerald-300/40 bg-[#063825]/80 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-emerald-500/20"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center bg-[#042619]/90 border-t border-emerald-500/30">
                  <p className="text-xs font-medium text-emerald-100">{foto.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION TAMBAHAN: VISI & MISI & PROGRAM UNGGULAN */}
      <section className="relative bg-[#031d14] py-16 sm:py-20 border-t border-emerald-500/20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Visi & Misi"
            title="Komitmen Membentuk Generasi Mandiri & Berdaya"
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Visi Card */}
            <div className="rounded-2xl border border-emerald-400/30 bg-[#063825]/90 p-8 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white">Visi Panti</h2>
              <p className="mt-3 text-sm leading-relaxed text-emerald-100/90">
                Terwujudnya anak binaan yang mandiri, berkarakter mulia, menguasai keterampilan hidup
                serta literasi kewirausahaan untuk masa depan yang produktif dan bermartabat.
              </p>
            </div>

            {/* Misi Card */}
            <div className="rounded-2xl border border-emerald-400/30 bg-[#063825]/90 p-8 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white">Misi Utama</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-emerald-100/90 list-disc list-inside">
                <li>Memberikan perlindungan, pengasuhan, dan pendampingan sosial yang kondusif.</li>
                <li>Menyelenggarakan pelatihan vokasional, literasi keuangan, dan kewirausahaan.</li>
                <li>Mendorong kreativitas dan rasa percaya diri anak dalam berkarya secara mandiri.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/program" className="btn-primary">
              Lihat Program Pembinaan Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
