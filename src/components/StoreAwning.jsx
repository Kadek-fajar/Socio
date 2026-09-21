export default function StoreAwning({ className = '' }) {
  // 16 jalur strip kanopi yang berulang secara merata (hijau & putih)
  const numStripes = 16
  const stripeWidth = 1600 / numStripes // 100px per strip

  return (
    <div className={`pointer-events-none select-none block w-full overflow-hidden leading-none m-0 p-0 ${className}`}>
      <svg
        viewBox="0 0 1600 135"
        preserveAspectRatio="none"
        className="pointer-events-none block w-full h-10 sm:h-14 md:h-16 lg:h-18 drop-shadow-xl m-0 p-0"
      >
        <defs>
          {/* Gradient Warna Hijau Emerald dengan Efek 3D / Bayangan */}
          <linearGradient id="greenAwningStripe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="30%" stopColor="#065f46" />
            <stop offset="80%" stopColor="#04633f" />
            <stop offset="100%" stopColor="#023b24" />
          </linearGradient>

          {/* Gradient Warna Putih/Krem dengan Efek 3D / Bayangan */}
          <linearGradient id="whiteAwningStripe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f8fafc" />
            <stop offset="80%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Filter Drop Shadow Halus untuk Lengkungan Bawah (Scallop) */}
          <filter id="awningScallopShadow" x="-10%" y="-10%" width="120%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 16 Strip Vektor Kanopi Selang-Seling Hijau & Putih */}
        {Array.from({ length: numStripes }).map((_, i) => {
          const x = i * stripeWidth
          const isGreen = i % 2 === 0
          const fillUrl = isGreen ? 'url(#greenAwningStripe)' : 'url(#whiteAwningStripe)'
          return (
            <g key={i} className="pointer-events-none">
              {/* Badan Strip Kanopi */}
              <rect x={x} y="0" width={stripeWidth} height="85" fill={fillUrl} className="pointer-events-none" />
              {/* Ujung Lengkungan Setengah Lingkaran (Scallop) Bawah */}
              <path
                d={`M ${x} 85 Q ${x + stripeWidth / 2} 130 ${x + stripeWidth} 85 Z`}
                fill={fillUrl}
                filter="url(#awningScallopShadow)"
                className="pointer-events-none"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
