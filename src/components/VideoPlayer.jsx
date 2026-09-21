import { useState, useRef } from 'react'

/**
 * Komponen VideoPlayer fleksibel untuk React / Vite
 * 
 * Cara Penggunaan:
 * 1. Embed YouTube:
 *    <VideoPlayer youtubeId="dQw4w9WgXcQ" title="Judul Video YouTube" />
 * 
 * 2. Play File MP4 Lokal / URL MP4:
 *    <VideoPlayer src="/videos/sekilas-panti.mp4" poster="/images/thumbnail.jpg" title="Video Kegiatan Panti" />
 */
export default function VideoPlayer({
  youtubeId,
  src,
  fallbackSrc,
  poster,
  title = 'Video Dokumentasi',
  description,
  aspectRatio = '16/9',
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef(null)

  // Konversi URL YouTube biasa ke format Embed jika dimasukkan URL penuh
  const getEmbedUrl = (idOrUrl) => {
    if (!idOrUrl) return ''
    if (idOrUrl.includes('youtube.com/watch?v=')) {
      const id = idOrUrl.split('v=')[1]?.split('&')[0]
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    }
    if (idOrUrl.includes('youtu.be/')) {
      const id = idOrUrl.split('youtu.be/')[1]?.split('?')[0]
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    }
    return `https://www.youtube-nocookie.com/embed/${idOrUrl}?autoplay=1&rel=0`
  }

  const handlePlayMp4 = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay error:', err)
      })
    }
  }

  const handleVideoError = () => {
    setHasError(true)
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-900 shadow-2xl backdrop-blur-md">
      <div className="relative w-full aspect-video bg-black overflow-hidden group">
        {youtubeId ? (
          !isPlaying ? (
            /* Cover Preview YouTube sebelum di-play */
            <div className="relative h-full w-full">
              <img
                src={
                  poster ||
                  `https://img.youtube.com/vi/${
                    youtubeId.includes('v=')
                      ? youtubeId.split('v=')[1]?.split('&')[0]
                      : youtubeId
                  }/hqdefault.jpg`
                }
                alt={title}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Tombol Play Besar */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-400"
                aria-label="Putar Video YouTube"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ) : (
            /* Iframe Embed YouTube */
            <iframe
              src={getEmbedUrl(youtubeId)}
              title={title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )
        ) : (
          /* Pemutar Video MP4 HTML5 biasa */
          <div className="relative h-full w-full">
            <video
              ref={videoRef}
              controls={isPlaying}
              poster={poster}
              preload="metadata"
              playsInline
              onError={handleVideoError}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            >
              {src && <source src={src} type="video/mp4" />}
              {fallbackSrc && <source src={encodeURI(fallbackSrc)} type="video/mp4" />}
              Browser Anda tidak mendukung pemutaran tag video MP4.
            </video>

            {/* Overlay Cover / Play Button sebelum user memutar video MP4 */}
            {!isPlaying && !hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-black/20 backdrop-blur-[1px] transition duration-300 group-hover:bg-black/30">
                <button
                  type="button"
                  onClick={handlePlayMp4}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-400 cursor-pointer"
                  aria-label="Putar Video MP4"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="mt-3 rounded-full bg-slate-900/80 border border-emerald-500/30 px-3.5 py-1 text-xs font-semibold text-emerald-300 shadow backdrop-blur-md">
                  Klik untuk Memutar Video MP4
                </span>
              </div>
            )}

            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 p-4 text-center">
                <p className="text-sm font-semibold text-rose-400">Gagal memuat file video MP4.</p>
                <p className="mt-1 text-xs text-slate-400">Pastikan file video berada di folder public/videos/</p>
              </div>
            )}
          </div>
        )}
      </div>

      {(title || description) && (
        <div className="p-4 sm:p-5">
          {title && <h3 className="font-display text-base font-bold text-white sm:text-lg">{title}</h3>}
          {description && <p className="mt-1 text-xs text-emerald-100/70 sm:text-sm">{description}</p>}
        </div>
      )}
    </div>
  )
}

