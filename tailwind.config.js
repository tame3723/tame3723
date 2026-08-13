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
          background: '#F5F8FC', // Calming light slate-blue
          surface: '#FFFFFF',    // Crisp white card canvas
          card: '#FFFFFF',
          cardHover: '#F1F5F9',  // Smooth hover container backgrounds
          textPrimary: '#0F172A',// Authoritative dark slate for headers
          textSecondary: '#475569',// Highly readable charcoal grey for paragraphs
          textMuted: '#64748B',  // Calming steel grey for dates & tags
          accent: '#2563EB',     // Professional Royal Blue accents
          accentHover: '#1D4ED8',// Deepened blue interactive trigger states
          lightAccent: '#DBEAFE',// Soft cyan-blue highlights
          border: '#DCE4EE',     // Low-contrast elegant divider lines
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
