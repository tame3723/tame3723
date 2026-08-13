/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#F1F5F9', // Soothing, warm Slate gray
          surface: '#FFFFFF',    // Crisp white cards
          card: '#FFFFFF',
          cardHover: '#F1F5F9',  // Micro-interaction highlight background
          textPrimary: '#0F172A',// High-contrast deep Slate for headers
          textSecondary: '#334155',// Soothing, highly readable paragraph text
          textMuted: '#64748B',  // Calming medium gray for captions/dates
          accent: '#2563EB',     // Soothing primary Royal Blue
          accentHover: '#1D4ED8',// Deepened hover state Blue
          accentSecondary: '#0891B2', // Cyan helper highlights
          border: '#E2E8F0',     // Low-contrast clean dividing lines
          borderHover: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        accentGlow: '0 4px 20px rgba(37, 99, 235, 0.08)',
      }
    },
  },
  plugins: [],
}
