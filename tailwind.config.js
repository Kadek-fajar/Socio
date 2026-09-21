/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Biru: kepercayaan & profesionalisme
        wira: {
          blue: {
            50: '#EFF6FC',
            100: '#DCEBF7',
            200: '#B3D6EE',
            400: '#3E7CB1',
            500: '#1D4E89',
            600: '#173F6E',
            700: '#123054',
          },
          // Hijau: pertumbuhan & kepedulian (humanis)
          green: {
            50: '#EAF7EF',
            100: '#CFEEDA',
            400: '#57B583',
            500: '#3FA66E',
            600: '#2F8656',
            700: '#236842',
          },
          // Netral hangat untuk teks & latar
          sand: {
            50: '#FAF9F6',
            100: '#F3F1EA',
          },
          ink: '#1E2A33',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(29, 78, 137, 0.12)',
      },
    },
  },
  plugins: [],
}
