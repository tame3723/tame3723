/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Configured system-aware or dark-by-default
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#0B0F19', // Sleek near-black/dark slate
          surface: '#111827',    // Slightly lighter card/surface color
          cardHover: '#1F2937',  // Interactive state border/fill color
          textPrimary: '#F9FAFB',// High contrast off-white
          textMuted: '#9CA3AF',  // Sophisticated medium gray
          accent: '#10B981',     // Restrained primary Emerald accent
          accentHover: '#059669',// Slightly deeper shade for hover effects
          border: '#1F2937'      // Thin elegant divider/border color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        accentGlow: '0 0 20px rgba(16, 185, 129, 0.15)',
      }
    },
  },
  plugins: [],
}
