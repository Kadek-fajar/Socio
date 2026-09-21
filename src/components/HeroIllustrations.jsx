import React from 'react'

// Komponen Bintang Berkilau (Sparkling Star SVG)
export function SparkleStar({ className = '', style = {}, color = '#34D399', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`animate-sparkle-twinkle filter drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] ${className}`}
      style={style}
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill={color}
      />
    </svg>
  )
}

// Komponen Background Hero Ultra-HD Tanpa Pembatas Border / Garis Kotak
export function HeroBackgroundImage({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 ${className}`}>
      {/* Visual Canvas Container Full Screen Tanpa Pembatas Frame */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src="/images/hero-bg.jpg"
          alt="HD Background Ilustrasi Panti Wira Adhi Karya"
          className="w-full h-full object-cover object-center opacity-60 sm:opacity-70 transition-all duration-300"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            filter: 'contrast(120%) brightness(90%) saturate(130%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 98%)',
            maskImage: 'radial-gradient(ellipse 95% 85% at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 98%)',
          }}
        />
      </div>

      {/* Radial Soft Overlay untuk Memastikan Tidak Ada Pembatas di Pinggir Screen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021810]/40 via-transparent to-[#03130c]/80 pointer-events-none" />
    </div>
  )
}

// Taburan Bintang Berkilau (Sparkling Stars Background)
export function HeroSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-10">
      <SparkleStar size={28} color="#34D399" className="absolute top-[8%] left-[5%]" style={{ animationDelay: '0.1s' }} />
      <SparkleStar size={20} color="#FBBF24" className="absolute top-[16%] left-[15%]" style={{ animationDelay: '0.8s' }} />
      <SparkleStar size={32} color="#6EE7B7" className="absolute top-[10%] right-[7%]" style={{ animationDelay: '0.4s' }} />
      <SparkleStar size={22} color="#FBBF24" className="absolute top-[22%] right-[16%]" style={{ animationDelay: '1.2s' }} />
      <SparkleStar size={24} color="#34D399" className="absolute bottom-[12%] left-[8%]" style={{ animationDelay: '0.6s' }} />
      <SparkleStar size={26} color="#6EE7B7" className="absolute bottom-[10%] right-[10%]" style={{ animationDelay: '1.4s' }} />
      <SparkleStar size={18} color="#FBBF24" className="absolute top-[30%] left-[50%] -translate-x-1/2" style={{ animationDelay: '1.0s' }} />
    </div>
  )
}
